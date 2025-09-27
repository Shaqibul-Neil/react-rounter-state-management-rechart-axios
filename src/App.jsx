import { Suspense } from "react";
import "./App.css";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import DaisyPricing from "./components/DaisyPricing/DaisyPricing";
import ResultsCharts from "./components/ResultsCharts/ResultsCharts";

const fetchPricingData = async () => {
  const res = await fetch("/pricingData.json");
  return res.json();
};

function App() {
  const fetchPromise = fetchPricingData();

  return (
    <>
      <header className="max-w-[1200px] mx-auto my-10 px-5">
        <Navbar />
      </header>
      {/* <DaisyNav /> */}
      <main className="max-w-[1200px] mx-auto mt-24 px-5  min-h-[500px]">
        <h2 className="mt-24 text-3xl text-center">Custom Card</h2>
        <div>
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-lg"></span>
            }
          >
            <PricingOptions fetchPromise={fetchPromise} />
          </Suspense>
        </div>
        <h2 className="mt-24 text-3xl text-center">Daisy Card</h2>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <DaisyPricing fetchPromise={fetchPromise} />
        </Suspense>

        <h2 className="my-24 text-3xl text-center">Charts</h2>
        <div>
          <ResultsCharts />
        </div>
      </main>
    </>
  );
}

export default App;
