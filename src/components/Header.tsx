import { ShoppingCart, Coins } from "lucide-react";
import logo from "../../public/logo.png"
interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#6161614c] border-b border-border/30">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="IT Time Logo" className="w-50 h-10 rounded-xl" />
        </div>

        {/* Cart Button */}
        <button 
          onClick={onCartClick}
          className="relative w-12 h-12 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
        >
          <ShoppingCart className="text-[#000000]" size={22} />
          {cartItemsCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-accent text-xs font-bold text-accent-foreground flex items-center justify-center animate-bounce-gentle">
              {cartItemsCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
