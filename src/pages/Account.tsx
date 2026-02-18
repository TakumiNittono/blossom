import { useLanguage } from '../context/LanguageContext';

const Account = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{t('account')}</h1>
        <div className="border p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">{t('login')}</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">{t('email.address')}</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-black"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('password')}</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-black"
                  placeholder={language === 'ja' ? 'パスワード' : 'Password'}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800"
              >
                {t('login')}
              </button>
            </form>
          </div>
          <div className="border-t pt-6">
            <h2 className="text-xl font-bold mb-4">{t('register')}</h2>
            <p className="text-gray-600 mb-4">
              {t('no.account')}
            </p>
            <button
              onClick={() => alert(language === 'ja' ? '新規登録ページに進みます' : 'Proceeding to sign up')}
              className="border-2 border-black text-black py-3 px-6 hover:bg-gray-50"
            >
              {t('sign.up')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
