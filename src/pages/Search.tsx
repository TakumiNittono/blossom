import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { mockProducts } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState(mockProducts);
  const { language } = useLanguage();

  useEffect(() => {
    if (query) {
      const filtered = mockProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults(mockProducts);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(searchQuery ? { q: searchQuery } : {});
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          {language === 'ja' ? '検索' : 'SEARCH'}
        </h1>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'ja' ? '商品名またはカテゴリで検索...' : 'Search by product name or category...'}
              className="flex-1 border border-gray-300 px-4 py-2 focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-2 hover:bg-gray-800"
            >
              {language === 'ja' ? '検索' : 'SEARCH'}
            </button>
          </div>
        </form>

        {query && (
          <p className="mb-6 text-gray-600">
            {language === 'ja'
              ? `「${query}」の検索結果: ${results.length}件`
              : `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`
            }
          </p>
        )}

        {results.length > 0 ? (
          <ProductGrid products={results} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 uppercase tracking-wide">
              {language === 'ja' ? '検索結果が見つかりません' : 'NO SEARCH RESULTS FOUND'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
