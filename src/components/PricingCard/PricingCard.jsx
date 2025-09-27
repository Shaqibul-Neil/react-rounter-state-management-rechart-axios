import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  return (
    <div className="border p-4 rounded-md space-y-8">
      {/* card title */}
      <div className="layout">
        <h1 className="text-3xl">{pricing.name}</h1>
        <h4 className="text-xl">{pricing.price}</h4>
      </div>
      {/* card body */}
      <div className="space-y-2">
        <p className="text-gray-400 mb-8">{pricing.description}</p>
        {pricing.features.map((feature, i) => (
          <PricingFeature feature={feature} key={i} />
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
