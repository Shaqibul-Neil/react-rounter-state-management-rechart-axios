import { use } from "react";

const PricingOptions = ({ fetchPromise }) => {
  const pricingData = use(fetchPromise);
  console.log(pricingData);

  return <div></div>;
};

export default PricingOptions;
