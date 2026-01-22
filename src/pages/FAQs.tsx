const FAQs = () => {
  const faqs = [
    {
      question: '配送について',
      answer: '日本国内への配送は無料です。通常2-5営業日でお届けします。',
    },
    {
      question: '返品・交換について',
      answer: '商品到着後7日以内に返品・交換が可能です。未使用・未開封の商品に限ります。',
    },
    {
      question: '支払い方法について',
      answer: 'クレジットカード、銀行振込、コンビニ決済に対応しています。',
    },
    {
      question: 'サイズについて',
      answer: '各商品ページにサイズ表を掲載しています。ご不明な点がございましたらお問い合わせください。',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">FAQS</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-6">
              <h2 className="text-xl font-bold mb-2">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
