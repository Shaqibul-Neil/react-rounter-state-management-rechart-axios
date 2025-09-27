import { Suspense } from "react";
import "./App.css";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import DaisyPricing from "./components/DaisyPricing/DaisyPricing";
import ResultsCharts from "./components/ResultsCharts/ResultsCharts";
import axios from "axios";
import MarksCharts from "./components/MarksCharts/MarksCharts";
import { BallTriangle, ThreeCircles } from "react-loader-spinner";

const fetchPricingData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch("pricingData.json");
  return res.json();
};

const marksPromise = axios.get("marksData.json");

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
        <div className="mt-12 min-h-[500px] mx-auto">
          <Suspense
            fallback={
              <div className="flex justify-center items-center">
                <ThreeCircles width={80} height={80} color="#4fa94d" />
                <BallTriangle width={80} height={80} color="#00BFFF" />
              </div>
            }
          >
            <PricingOptions fetchPromise={fetchPromise} />
          </Suspense>
        </div>
        {/* <h2 className="mt-24 text-3xl text-center">Daisy Card</h2>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <DaisyPricing fetchPromise={fetchPromise} />
        </Suspense> */}

        <h2 className="my-24 text-3xl text-center">Re-Charts</h2>
        <div>
          <ResultsCharts />
        </div>

        <h2 className="my-24 text-3xl text-center">Axios JS Chart</h2>
        <div>
          <Suspense fallback={<BallTriangle />}>
            <MarksCharts marksPromise={marksPromise} />
          </Suspense>
        </div>
      </main>
    </>
  );
}

export default App;
