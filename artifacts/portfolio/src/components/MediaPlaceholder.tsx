export interface MediaPlaceholderProps {
  label: string;
  aspectRatio?: string;
  dark?: boolean;
}

export function MediaPlaceholder({ label, aspectRatio = "aspect-[4/3]", dark = false }: MediaPlaceholderProps) {
  const baseClasses = "w-full flex items-center justify-center transition-colors duration-300";
  const colorClasses = dark 
    ? "bg-foreground text-background" 
    : "bg-secondary text-muted-foreground group-hover:bg-primary/5 group-hover:text-primary/70";
    
  return (
    <div className={`${baseClasses} ${colorClasses} ${aspectRatio}`}>
      <span className="text-xs font-medium tracking-[0.2em] uppercase opacity-70">
        {label}
      </span>
    </div>
  );
}
