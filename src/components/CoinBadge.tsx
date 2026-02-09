import { Coins } from "lucide-react";

interface CoinBadgeProps {
  amount: number;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  className?: string;
}

export function CoinBadge({ 
  amount, 
  size = "md", 
  showIcon = true,
  className = "" 
}: CoinBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-sm px-3 py-1 gap-1.5",
    lg: "text-base px-4 py-1.5 gap-2",
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 18,
  };

  return (
    <div 
      className={`inline-flex items-center rounded-full bg-coin/10 text-coin font-semibold ${sizeClasses[size]} ${className}`}
    >
      {showIcon && (
        <Coins size={iconSizes[size]} className="text-coin" />
      )}
      <span>{amount.toLocaleString()}</span>
    </div>
  );
}
