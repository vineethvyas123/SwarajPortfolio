import React, { useEffect, useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  tag?: string;
  transitionDelay?: string;
  key?: React.Key;
}

export default function AnimatedSection({
  children,
  id,
  className = "",
  tag = "section",
  transitionDelay
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const Tag = tag as any;

  return (
    <Tag
      id={id}
      ref={ref}
      className={`reveal-on-scroll ${className}`}
      style={transitionDelay ? { transitionDelay } : undefined}
    >
      {children}
    </Tag>
  );
}
