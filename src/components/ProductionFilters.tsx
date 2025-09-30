import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, X, MapPin, Theater, ChevronDown } from "lucide-react";
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
  const [locationOpen, setLocationOpen] = useState(false);
  const [genreOpen, setGenreOpen] = useState(false);
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

  const hasActiveFilters = selectedLocation !== "all" || selectedGenre !== "all";

  const handleRemoveLocationFilter = () => {
    onLocationChange("all");
  };

  const handleRemoveGenreFilter = () => {
    onGenreChange("all");
  };

  return (
    <div className="space-y-3">
      {/* Main Horizontal Bar */}
      <div className="flex items-center gap-3 bg-card border border-border rounded-lg p-2 shadow-sm">
        {/* Search Input */}
        <div ref={searchRef} className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Αναζήτηση παράστασης..."
            value={searchQuery}
            onChange={(e) => handleSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => searchQuery.trim().length > 0 && setShowSuggestions(true)}
            className="pl-9 pr-9 border-0 bg-transparent h-10 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Καθαρισμός αναζήτησης"
            >
              <X className="w-4 h-4" />
            </button>
          )}

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

        {/* Filter Buttons */}
        <div className="flex items-center gap-2">
          {/* Location Filter */}
          <Popover open={locationOpen} onOpenChange={setLocationOpen}>
            <PopoverTrigger asChild>
              <Button
                variant={selectedLocation !== "all" ? "default" : "outline"}
                size="sm"
                className="gap-1.5 h-10"
              >
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">Τοποθεσία</span>
                <ChevronDown className="w-3 h-3 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2" align="end">
              <div className="space-y-1">
                <Button
                  variant={selectedLocation === "all" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    onLocationChange("all");
                    setLocationOpen(false);
                  }}
                >
                  Όλες οι τοποθεσίες
                </Button>
                {availableLocations.map((location) => (
                  <Button
                    key={location}
                    variant={selectedLocation === location ? "secondary" : "ghost"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => {
                      onLocationChange(location);
                      setLocationOpen(false);
                    }}
                  >
                    {location}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* Genre Filter */}
          <Popover open={genreOpen} onOpenChange={setGenreOpen}>
            <PopoverTrigger asChild>
              <Button
                variant={selectedGenre !== "all" ? "default" : "outline"}
                size="sm"
                className="gap-1.5 h-10"
              >
                <Theater className="w-4 h-4" />
                <span className="hidden sm:inline">Είδος</span>
                <ChevronDown className="w-3 h-3 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2" align="end">
              <div className="space-y-1">
                <Button
                  variant={selectedGenre === "all" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    onGenreChange("all");
                    setGenreOpen(false);
                  }}
                >
                  Όλα τα είδη
                </Button>
                {availableGenres.map((genre) => (
                  <Button
                    key={genre}
                    variant={selectedGenre === genre ? "secondary" : "ghost"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => {
                      onGenreChange(genre);
                      setGenreOpen(false);
                    }}
                  >
                    {genre}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Active Filter Pills */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 animate-fade-in">
          <span className="text-xs text-muted-foreground">Ενεργά φίλτρα:</span>
          {selectedLocation !== "all" && (
            <Badge
              variant="secondary"
              className="gap-1.5 pl-2 pr-1 cursor-pointer hover:bg-secondary/80 transition-colors"
            >
              <MapPin className="w-3 h-3" />
              {selectedLocation}
              <button
                onClick={handleRemoveLocationFilter}
                className="ml-1 hover:bg-background/50 rounded-full p-0.5"
                aria-label="Αφαίρεση φίλτρου τοποθεσίας"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {selectedGenre !== "all" && (
            <Badge
              variant="secondary"
              className="gap-1.5 pl-2 pr-1 cursor-pointer hover:bg-secondary/80 transition-colors"
            >
              <Theater className="w-3 h-3" />
              {selectedGenre}
              <button
                onClick={handleRemoveGenreFilter}
                className="ml-1 hover:bg-background/50 rounded-full p-0.5"
                aria-label="Αφαίρεση φίλτρου είδους"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductionFilters;