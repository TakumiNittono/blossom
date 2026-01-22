const Collections = () => {
  const collections = [
    { name: 'LAST RESORT', description: '最新コレクション', image: '/IMG_8909.JPG' },
    { name: 'ESSENTIALS', description: 'ベーシックアイテム', image: '/IMG_8907.JPG' },
    { name: 'PREMIUM', description: 'プレミアムコレクション', image: '/IMG_8910.JPG' },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">COLLECTIONS</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="cursor-pointer group">
              <div className="aspect-square bg-gray-200 mb-4 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">{collection.name}</h2>
              <p className="text-gray-600">{collection.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
