const Account = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">アカウント</h1>
        <div className="border p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">ログイン</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">メールアドレス</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-black"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">パスワード</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-black"
                  placeholder="パスワード"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800"
              >
                ログイン
              </button>
            </form>
          </div>
          <div className="border-t pt-6">
            <h2 className="text-xl font-bold mb-4">新規登録</h2>
            <p className="text-gray-600 mb-4">
              アカウントをお持ちでない方は、新規登録を行ってください。
            </p>
            <button
              onClick={() => alert('新規登録ページに進みます')}
              className="border-2 border-black text-black py-3 px-6 hover:bg-gray-50"
            >
              新規登録
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
