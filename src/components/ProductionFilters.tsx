import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProductionFiltersProps {
  selectedLocation: string;
  selectedGenre: string;
  onLocationChange: (location: string) => void;
  onGenreChange: (genre: string) => void;
  availableLocations: string[];
  availableGenres: string[];
}

const ProductionFilters = ({
  selectedLocation,
  selectedGenre,
  onLocationChange,
  onGenreChange,
  availableLocations,
  availableGenres
}: ProductionFiltersProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="flex-1">
        <Select value={selectedLocation} onValueChange={onLocationChange}>
          <SelectTrigger className="bg-card border-border">
            <SelectValue placeholder="Φιλτράρισμα κατά τοποθεσία" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Όλες οι τοποθεσίες</SelectItem>
            {availableLocations.map((location) => (
              <SelectItem key={location} value={location}>{location}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <Select value={selectedGenre} onValueChange={onGenreChange}>
          <SelectTrigger className="bg-card border-border">
            <SelectValue placeholder="Φιλτράρισμα κατά είδος" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Όλα τα είδη</SelectItem>
            {availableGenres.map((genre) => (
              <SelectItem key={genre} value={genre}>{genre}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductionFilters;