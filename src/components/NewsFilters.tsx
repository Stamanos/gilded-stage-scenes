import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface NewsFiltersProps {
  selectedType: string;
  selectedProduction: string;
  onTypeChange: (type: string) => void;
  onProductionChange: (production: string) => void;
  availableTypes: string[];
  availableProductions: Array<{ id: number; title: string }>;
}

const NewsFilters = ({
  selectedType,
  selectedProduction,
  onTypeChange,
  onProductionChange,
  availableTypes,
  availableProductions
}: NewsFiltersProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="flex-1">
        <Select value={selectedType} onValueChange={onTypeChange}>
          <SelectTrigger className="bg-card border-border">
            <SelectValue placeholder="Φιλτράρισμα κατά είδος" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Όλα τα είδη</SelectItem>
            {availableTypes.map((type) => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <Select value={selectedProduction} onValueChange={onProductionChange}>
          <SelectTrigger className="bg-card border-border">
            <SelectValue placeholder="Φιλτράρισμα κατά παράσταση" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Όλες οι παραστάσεις</SelectItem>
            {availableProductions.map((production) => (
              <SelectItem key={production.id} value={production.id.toString()}>
                {production.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default NewsFilters;