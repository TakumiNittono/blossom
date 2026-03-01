import { useLanguage } from '../context/LanguageContext';

const Account = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <svg className="w-16 h-16 mx-auto mb-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide">
          {language === 'ja' ? '準備中' : 'COMING SOON'}
        </h1>
        <p className="text-gray-500 text-sm">
          {language === 'ja'
            ? 'アカウント機能は現在準備中です。'
            : 'Account features are currently under development.'}
        </p>
      </div>
    </div>
  );
};

export default Account;
