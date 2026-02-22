import { cn } from "@/lib/utils";

interface ShinyTextProps {
  children: React.ReactNode;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText = ({
  children,
  disabled = false,
  speed = 5,
  className,
  isLight = false,
}: ShinyTextProps & { isLight?: boolean }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={cn(
        "text-transparent bg-clip-text inline-block",
        disabled ? "" : "animate-shine",
        className,
      )}
      style={{
        backgroundImage: isLight
          ? "linear-gradient(120deg, rgba(24, 24, 27, 1) 35%, #2563eb 45%, #18181b 50%, #2563eb 55%, rgba(24, 24, 27, 1) 65%)"
          : "linear-gradient(120deg, rgba(255, 255, 255, 1) 35%, #0ea5e9 45%, #ffffff 50%, #0ea5e9 55%, rgba(255, 255, 255, 1) 65%)",
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
