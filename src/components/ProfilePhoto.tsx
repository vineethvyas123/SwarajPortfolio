import React, { useState, useEffect } from "react";
import { Upload } from "lucide-react";

export default function ProfilePhoto() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load persisted photo from localStorage if present
    const savedPhoto = localStorage.getItem("skp_profile_photo");
    if (savedPhoto) {
      setPhoto(savedPhoto);
    }
  }, []);

  const handleFileChange = (file: File) => {
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
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Outer elegant frame inspired by high-end gallery frames */}
      <div 
        onDragOver={onDragOver}
        onDrop={onDrop}
        className="group relative aspect-[3/4] w-full bg-dark4 border border-gold/30 rounded-[4px] overflow-hidden p-3 shadow-2xl transition-all duration-500 hover:border-gold"
      >
        {/* Gallery hanging mat border */}
        <div className="relative w-full h-full bg-dark3 border border-gold/10 rounded-[2px] overflow-hidden flex flex-col items-center justify-center p-4">
          
          {photo ? (
            <div className="relative w-full h-full overflow-hidden rounded-[2px] transition-transform duration-700 group-hover:scale-105">
              <img 
                src={photo} 
                alt="Swaraj Kumar Padma" 
                className="w-full h-full object-cover grayscale brightness-95 contrast-105 transition-all duration-500 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60"></div>
            </div>
          ) : (
            /* Elegant artistic placeholder matching his profile: bearded, with glasses in suit */
            <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 space-y-6">
              {/* Stylized vector representation */}
              <div className="relative w-36 h-36 rounded-full border-2 border-gold/20 flex items-center justify-center bg-dark/40 overflow-hidden shadow-inner">
                {/* Executive Silhouette with Glasses and Beard */}
                <svg className="w-24 h-24 text-gold/60" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  {/* Glasses detail */}
                  <circle cx="10" cy="7" r="1.5" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx="14" cy="7" r="1.5" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="11.5" y1="7" x2="12.5" y2="7" stroke="currentColor" strokeWidth="0.8" />
                </svg>
                {/* Glow ring */}
                <div className="absolute inset-0 border border-gold/10 rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-2">
                <span className="font-serif italic text-lg text-gold/90 font-medium">Swaraj Kumar Padma</span>
                <p className="text-muted-gray text-xs font-sans tracking-wide">
                  Drag & drop your portrait photograph here, or click to load a JPG/PNG.
                </p>
              </div>
            </div>
          )}

          {/* Hover Overlay with Upload Action */}
          <label className="absolute inset-0 bg-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center cursor-pointer p-4 text-center z-20">
            <input 
              type="file" 
              accept="image/*" 
              onChange={onFileSelect} 
              className="hidden" 
            />
            <Upload className="w-8 h-8 text-gold mb-3 animate-bounce" />
            <span className="font-sans text-xs uppercase tracking-widest font-bold text-gold mb-1">
              {photo ? "Update Portfolio Photo" : "Upload Portfolio Photo"}
            </span>
            <span className="text-muted-gray text-[10px] max-w-[200px]">
              Supports JPG, JPEG, PNG (Image size limit 4MB)
            </span>
          </label>
        </div>

        {/* Elegant Gold Corners (Luxury Accent) */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gold/40"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gold/40"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gold/40"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gold/40"></div>
      </div>

      {error && (
        <p className="text-red-400 text-xs text-center mt-3 font-medium bg-red-950/20 py-2 border border-red-900/30 rounded-[2px]">
          {error}
        </p>
      )}
    </div>
  );
}
