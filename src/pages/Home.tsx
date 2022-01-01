export default function Home() {
  return (
    <div className="container mx-auto text-center max-w-5xl">
      <div className="mt-40 mb-40">
        <h1 className="text-6xl font-bold font-serif mb-6">
          Automate your crypto giving.
        </h1>
        <p className="text-2xl mb-1">
          Pledge to give 10% of your crypto income to the world's most effective
          charities.
        </p>
        <p className="text-2xl mb-6">Powered by smart contracts on Ethereum.</p>

        <button className="bg-blue-600 px-5 py-3 rounded-lg text-white text-xl">
          Take a pledge
        </button>
      </div>
    </div>
  );
}
