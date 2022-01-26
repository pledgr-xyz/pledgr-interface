export default function Header() {
  return (
    <header className="h-20 px-8 flex items-center justify-between">
      Pledgr
      <div>
        <button className="px-3 py-2 rounded-lg border-2 border-sky-600 text-sky-600">
          Connect wallet
        </button>
      </div>
    </header>
  );
}
