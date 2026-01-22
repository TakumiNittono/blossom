const Stores = () => {
  const stores = [
    {
      name: 'Tokyo Store',
      address: '東京都渋谷区1-2-3',
      hours: '11:00 - 20:00',
      phone: '03-1234-5678',
    },
    {
      name: 'Osaka Store',
      address: '大阪府大阪市1-2-3',
      hours: '11:00 - 20:00',
      phone: '06-1234-5678',
    },
    {
      name: 'Online Store',
      address: '24時間営業',
      hours: '24/7',
      phone: 'オンライン',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">STORES</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {stores.map((store, index) => (
            <div key={index} className="border p-6">
              <h2 className="text-xl font-bold mb-4">{store.name}</h2>
              <p className="text-gray-600 mb-2">{store.address}</p>
              <p className="text-gray-600 mb-2">営業時間: {store.hours}</p>
              <p className="text-gray-600">電話: {store.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stores;
