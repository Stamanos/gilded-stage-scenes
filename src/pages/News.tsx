import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import FloatingInfoTip from "@/components/FloatingInfoTip";
import NewsCard from "@/components/NewsCard";
import NewsFilters from "@/components/NewsFilters";
import { useState, useMemo } from "react";
import newsData from "@/data/news.json";
import productionsData from "@/data/productions.json";

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

const News = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedProduction, setSelectedProduction] = useState<string>("all");

  // Extract available types and productions
  const availableTypes = useMemo(() => {
    return [...new Set(newsData.news.map(item => item.type))];
  }, []);

  const availableProductions = useMemo(() => {
    const productionIds = [...new Set(newsData.news.map(item => item.production_id))];
    return productionIds.map(id => {
      const production = productionsData.productions.find(p => p.id === id);
      return { id, title: production?.title || `Παράσταση ${id}` };
    });
  }, []);

  // Filter news items
  const filteredNews = useMemo(() => {
    return newsData.news.filter(item => {
      const typeMatch = selectedType === "all" || item.type === selectedType;
      const productionMatch = selectedProduction === "all" || 
                            item.production_id.toString() === selectedProduction;
      return typeMatch && productionMatch;
    });
  }, [selectedType, selectedProduction]);

  // Get production title for each news item
  const getProductionTitle = (productionId: number) => {
    const production = productionsData.productions.find(p => p.id === productionId);
    return production?.title;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Νέα & Τύπος
          </h1>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Filters */}
            <NewsFilters
              selectedType={selectedType}
              selectedProduction={selectedProduction}
              onTypeChange={setSelectedType}
              onProductionChange={setSelectedProduction}
              availableTypes={availableTypes}
              availableProductions={availableProductions}
            />

            {/* News Grid */}
            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {filteredNews.map((item, index) => (
                  <div
                    key={item.id}
                    className="stagger-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <NewsCard
                      item={item}
                      productionTitle={getProductionTitle(item.production_id)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Δεν βρέθηκαν άρθρα με τα επιλεγμένα φίλτρα
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSocial />
      <FloatingInfoTip page="news" />
    </div>
  );
};

export default News;