import { useState, useRef, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";

interface Production {
  id: number | string;
  title: string;
  subtitle?: string;
  year?: string;
  status?: string;
}

interface ProductionFiltersProps {
  selectedLocation: string;
  selectedGenre: string;
  searchQuery: string;
  onLocationChange: (location: string) => void;
  onGenreChange: (genre: string) => void;
  onSearchChange: (query: string) => void;
  availableLocations: string[];
  availableGenres: string[];
  allProductions: Production[];
}

const ProductionFilters = ({
  selectedLocation,
  selectedGenre,
  searchQuery,
  onLocationChange,
  onGenreChange,
  onSearchChange,
  availableLocations,
  availableGenres,
  allProductions
}: ProductionFiltersProps) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter suggestions based on search query
  const suggestions = searchQuery.trim().length > 0
    ? allProductions.filter(prod =>
        prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchInput = (value: string) => {
    onSearchChange(value);
    setShowSuggestions(value.trim().length > 0);
    setFocusedIndex(-1);
  };

  const handleClearSearch = () => {
    onSearchChange("");
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Search Bar with Autocomplete */}
      <div ref={searchRef} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Αναζήτηση παράστασης..."
            value={searchQuery}
            onChange={(e) => handleSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => searchQuery.trim().length > 0 && setShowSuggestions(true)}
            className="pl-10 pr-10 bg-card border-border h-12"
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Καθαρισμός αναζήτησης"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Autocomplete Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-dramatic z-50 max-h-80 overflow-y-auto animate-fade-in">
            {suggestions.map((production, index) => (
              <Link
                key={production.id}
                to={`/productions/${production.id}`}
                className={`block px-4 py-3 hover:bg-accent/10 transition-colors border-b border-border last:border-b-0 ${
                  index === focusedIndex ? "bg-accent/10" : ""
                }`}
                onClick={() => {
                  setShowSuggestions(false);
                  handleClearSearch();
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground truncate">
                      {production.title}
                    </h4>
                    {production.subtitle && (
                      <p className="text-sm text-muted-foreground truncate mt-1">
                        {production.subtitle}
                      </p>
                    )}
                  </div>
                  {production.year && (
                    <span className="text-xs text-muted-foreground flex-shrink-0 mt-1">
                      {production.year}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* No results message */}
        {showSuggestions && searchQuery.trim().length > 0 && suggestions.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-dramatic z-50 p-4 text-center text-muted-foreground animate-fade-in">
            Δεν βρέθηκαν παραστάσεις
          </div>
        )}
      </div>

      {/* Existing Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger className="bg-card border-border h-12">
              <SelectValue placeholder="Φιλτράρισμα κατά τοποθεσία" />
            </SelectTrigger>
            <SelectContent className="bg-card z-50">
              <SelectItem value="all">Όλες οι τοποθεσίες</SelectItem>
              {availableLocations.map((location) => (
                <SelectItem key={location} value={location}>{location}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <Select value={selectedGenre} onValueChange={onGenreChange}>
            <SelectTrigger className="bg-card border-border h-12">
              <SelectValue placeholder="Φιλτράρισμα κατά είδος" />
            </SelectTrigger>
            <SelectContent className="bg-card z-50">
              <SelectItem value="all">Όλα τα είδη</SelectItem>
              {availableGenres.map((genre) => (
                <SelectItem key={genre} value={genre}>{genre}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProductionFilters;