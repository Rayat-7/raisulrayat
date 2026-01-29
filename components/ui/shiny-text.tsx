import { cn } from "@/lib/utils";

interface ShinyTextProps {
  children: React.ReactNode;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText = ({ children, disabled = false, speed = 5, className }: ShinyTextProps) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={cn(
        "text-transparent bg-clip-text inline-block",
        disabled ? "" : "animate-shine",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.3) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {children}
    </div>
  );
};

export default ShinyText;
