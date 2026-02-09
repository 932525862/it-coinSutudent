import { Product } from "@/data/products";
import { CoinBadge } from "./CoinBadge";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-card-foreground line-clamp-2 mb-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        
        <CoinBadge amount={product.price} size="md" />
      </div>
    </div>
  );
}
