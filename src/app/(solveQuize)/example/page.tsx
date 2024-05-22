export default function example() {
    return (
        <main className="flex flex-col items-start flex-1">
            <div className="w-full flex flex-1">
                <div className="w-1/4 bg-gray-100">
                    <h2 className="text-lg font-bold mb-2">ファイル一覧</h2>
                    {/* ファイル一覧を表示するコンポーネント */}
                </div>
                <div className="relative w-2/3 bg-white">
                    <h2 className="text-lg font-bold mb-2">コードエディタ</h2>
                    {/* コードを書くためのエディタコンポーネント */}
                    <div className="absolute bottom-0 w-full">
                        <div className="border border-gray-300 bg-black text-white p-4">
                            <p>ここにターミナルの出力が表示されます。</p>
                            {/* ここにターミナルの出力を動的に表示するコードを追加する */}
                        </div>
                    </div>
                </div>
                <div className="w-1/4 bg-gray-200">
                    <h2 className="text-lg font-bold mb-2">プレビュー</h2>
                    {/* コードのプレビューを表示するコンポーネント */}
                </div>
            </div>
        </main>
    );
}
