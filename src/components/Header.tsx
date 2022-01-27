export default function Header() {
  return (
    <header className="h-20 px-8 flex items-center justify-between">
      Pledgr
      <div>
        <button className="px-3 py-2 rounded-lg border-2 border-slate-900 text-slate-900">
          Connect wallet
        </button>
      </div>
    </header>
  );
}
