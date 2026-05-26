import React, { useState, useEffect } from "react";
import { Upload, ShieldCheck } from "lucide-react";

export default function ProfilePhoto() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    // 1. Load persisted photo from localStorage if present
    const savedPhoto = localStorage.getItem("skp_profile_photo");
    if (savedPhoto) {
      setPhoto(savedPhoto);
    }

    // 2. Determine if editable via URL query parameters (?edit=true or ?admin=true)
    const params = new URLSearchParams(window.location.search);
    const hasEditParam = params.get("edit") === "true" || params.get("admin") === "true";
    setIsEditable(hasEditParam);
  }, []);

  const handleFileChange = (file: File) => {
    if (!isEditable) return; // Prevent unauthorized changes if not in edit mode
    
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }
    // Limit to 4MB for localStorage
    if (file.size > 4 * 1024 * 1024) {
      setError("File is too large. Max size is 4MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      try {
        localStorage.setItem("skp_profile_photo", base64String);
        setPhoto(base64String);
        setError(null);
      } catch (e) {
        setError("Failed to save image. Try a smaller size image.");
      }
    };
    reader.readAsDataURL(file);
  };

  const onDragOver = (e: React.DragEvent) => {
    if (!isEditable) return;
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent) => {
    if (!isEditable) return;
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isEditable) return;
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  // Standard premium fallback image of Swaraj Kumar Padma
  const fallbackPhoto = "/Swaraj_Crop.jpg";
  
  // Choose which photo to display
  const displayPhoto = photo || fallbackPhoto;

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Editorial admin banner if in edit mode */}
      {isEditable && (
        <div className="absolute -top-12 left-0 right-0 flex items-center justify-between bg-gold/15 border border-gold/30 rounded-[2px] px-3 py-1.5 z-30 transition-all shadow-md">
          <span className="text-gold text-[10px] uppercase tracking-wider font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Admin: Edit Mode Active
          </span>
          <span className="text-muted-gray text-[9px] uppercase tracking-wider">
            Click / Drop to change
          </span>
        </div>
      )}

      {/* Outer elegant frame inspired by high-end gallery frames */}
      <div 
        onDragOver={onDragOver}
        onDrop={onDrop}
        className={`group relative aspect-[3/4] w-full bg-dark4 border rounded-[4px] overflow-hidden p-3 shadow-2xl transition-all duration-500 ${isEditable ? "border-gold cursor-pointer" : "border-gold/30 hover:border-gold/60"}`}
      >
        {/* Gallery hanging mat border */}
        <div className="relative w-full h-full bg-dark3 border border-gold/10 rounded-[2px] overflow-hidden flex flex-col items-center justify-center p-4">
          
          <div className="relative w-full h-full overflow-hidden rounded-[2px]">
            <img 
              src={displayPhoto} 
              alt="Swaraj Kumar Padma" 
              className="w-full h-full object-cover grayscale brightness-95 contrast-105 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent"></div>
            
            {/* Show uploader only if edit mode is active */}
            {isEditable && (
              <label className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-dark2/95 border border-gold/40 text-gold hover:border-gold hover:bg-gold hover:text-dark px-4 py-2 rounded-[2px] transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-lg text-[10px] uppercase tracking-widest font-bold z-30">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={onFileSelect} 
                  className="hidden" 
                />
                <Upload className="w-3.5 h-3.5" />
                Change Photo
              </label>
            )}
          </div>

        </div>

        {/* Elegant Gold Corners (Luxury Accent) */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gold/40"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gold/40"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gold/40"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gold/40"></div>
      </div>

      {isEditable && error && (
        <p className="text-red-400 text-xs text-center mt-3 font-medium bg-red-950/20 py-2 border border-red-900/30 rounded-[2px]">
          {error}
        </p>
      )}
    </div>
  );
}
