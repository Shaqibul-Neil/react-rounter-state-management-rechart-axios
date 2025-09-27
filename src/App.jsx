import { Suspense } from "react";
import "./App.css";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";

const fetchPricingData = async () => {
  const res = await fetch("/pricingData.json");
  return res.json();
};

function App() {
  const fetchPromise = fetchPricingData();

  return (
    <>
      <header className="max-w-[1200px] mx-auto my-10 px-10">
        <Navbar />
      </header>
      {/* <DaisyNav /> */}
      <div className="max-w-[1200px] mx-auto my-10 px-10">
        <Suspense
          fallback=<span className="loading loading-spinner loading-lg"></span>
        >
          <PricingOptions fetchPromise={fetchPromise} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
