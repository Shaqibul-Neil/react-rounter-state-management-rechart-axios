import { ShieldCheck } from "lucide-react";

const PricingFeature = ({ feature }) => {
  return (
    <>
      <p className="flex gap-2">
        <span>{<ShieldCheck />}</span>
        <span>{feature}</span>
      </p>
    </>
  );
};

export default PricingFeature;
