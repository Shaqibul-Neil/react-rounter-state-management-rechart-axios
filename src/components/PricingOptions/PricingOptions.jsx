import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ fetchPromise }) => {
  const pricingData = use(fetchPromise);

  return (
    <div className="space-y-12">
      <h2 className="text-3xl text-center">Get Our Membership</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {pricingData.map((pricing) => (
          <PricingCard pricing={pricing} key={pricing.id} />
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
