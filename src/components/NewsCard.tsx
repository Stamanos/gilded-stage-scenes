import { ExternalLink } from "lucide-react";

interface NewsItem {
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
  type: string;
  date: string;
  site_name: string;
  production_id: number;
}

interface NewsCardProps {
  item: NewsItem;
  productionTitle?: string;
}

const NewsCard = ({ item, productionTitle }: NewsCardProps) => {
  const getCategoryColor = (type: string): string => {
    switch (type) {
      case 'Κριτική':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'Ενημέρωση':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Παρουσίαση':
        return 'bg-secondary/10 text-secondary-foreground border-secondary/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <a
      href={item.url}
      className="group bg-card rounded-xl border border-border/50 hover:border-border transition-all duration-300 overflow-hidden hover:shadow-lg cursor-pointer block"
    >
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Meta info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(item.type)}`}>
              {item.type}
            </span>
            <span className="text-sm text-muted-foreground">
              {new Date(item.date).toLocaleDateString('el-GR')}
            </span>
          </div>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            {item.site_name}
          </span>
        </div>

        {/* Production tag */}
        {productionTitle && (
          <div className="mb-3">
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md">
              {productionTitle}
            </span>
          </div>
        )}
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
          {item.description}
        </p>
        
        {/* Read more */}
        <div className="flex items-center justify-between">
          <span className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition-colors duration-300 text-sm">
            Διαβάστε περισσότερα
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;