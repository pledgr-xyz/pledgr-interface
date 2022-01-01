export default function Header() {
  return (
    <header className="h-20 px-8 flex items-center justify-between">
      Pledgr
      <div>
        <button className="px-3 py-2 rounded-lg text-white border-2 border-blue-700 text-blue-700">
          Connect wallet
        </button>
      </div>
    </header>
  );
}
