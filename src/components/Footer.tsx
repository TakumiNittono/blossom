import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const policies = language === 'ja' ? [
    { label: 'プライバシーポリシー', url: 'https://blossom-20221382.myshopify.com/ja-jp/policies/privacy-policy' },
    { label: '返金ポリシー', url: 'https://blossom-20221382.myshopify.com/ja-jp/policies/refund-policy' },
    { label: '利用規約', url: 'https://blossom-20221382.myshopify.com/ja-jp/policies/terms-of-service' },
    { label: '特定商取引法に基づく表記', url: 'https://blossom-20221382.myshopify.com/ja-jp/policies/legal-notice' },
    { label: '配送ポリシー', url: 'https://blossom-20221382.myshopify.com/ja-jp/policies/shipping-policy' },
  ] : [
    { label: 'Privacy Policy', url: 'https://blossom-20221382.myshopify.com/ja-jp/policies/privacy-policy' },
    { label: 'Refund Policy', url: 'https://blossom-20221382.myshopify.com/ja-jp/policies/refund-policy' },
    { label: 'Terms of Service', url: 'https://blossom-20221382.myshopify.com/ja-jp/policies/terms-of-service' },
    { label: 'Legal Notice', url: 'https://blossom-20221382.myshopify.com/ja-jp/policies/legal-notice' },
    { label: 'Shipping Policy', url: 'https://blossom-20221382.myshopify.com/ja-jp/policies/shipping-policy' },
  ];

  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Policy Links */}
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-[0.2em] mb-4">
            {language === 'ja' ? 'ポリシー' : 'POLICIES'}
          </h3>
          <ul className="space-y-2">
            {policies.map((policy) => (
              <li key={policy.url}>
                <a
                  href={policy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-white tracking-wide brand-transition"
                >
                  {policy.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-[0.2em] mb-4">
            {language === 'ja' ? 'お問い合わせ' : 'CONTACT'}
          </h3>
          <a
            href="https://blossom-20221382.myshopify.com/ja-jp/policies/contact-information"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-white tracking-wide brand-transition"
          >
            {language === 'ja' ? '連絡先情報' : 'Contact Information'}
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-xs text-gray-500 tracking-wide">
            &copy; {new Date().getFullYear()} BLOSSOM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
