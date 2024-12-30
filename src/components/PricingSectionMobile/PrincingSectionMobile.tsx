import React from "react";
import PricingCard from "../PricingCards/PricingCards";

const PricingSectionMobile: React.FC = () => {
  const pricingPlans = [
    {
      price: "₦29,000/mth",
      planName: "Basic Plan 🚀",
      description: "Ideal for small teams and startups.",
      features: [
        "Manage up to 30 children 👶",
        "Basic attendance tracking 📝",
        "Parent messaging (email only) 📧",
        "Billing & invoicing 💰",
        "Basic reporting 📊",
      ],
      onGetStarted: () => alert("Basic Plan Selected"),
      onChatToSales: () => alert("Chat about Basic Plan"),
    },
    {
      price: "₦79,000/mth",
      planName: "Standard Plan 🌟",
      description: "Ideal for growing businesses.",
      features: [
        "Manage up to 100 children 👶",
        "Real-time attendance tracking ⏱️",
        "Parent communication (app & email) 📱",
        "Automated billing reminders 🕒",
        "Activity & meal planning 🍽️",
      ],
      onGetStarted: () => alert("Standard Plan Selected"),
      onChatToSales: () => alert("Chat about Standard Plan"),
    },
    {
      price: "₦149,000/mth",
      planName: "Premium Plan 🏆",
      description: "Ideal for large teams and enterprises.",
      features: [
        "Unlimited children 👶",
        "Advanced attendance with check-in/out 🔑",
        "Parent communication (app, SMS, & email) 📱",
        "Advanced billing automation ⚙️",
        "Customizable reports & analytics 📈",
      ],
      onGetStarted: () => alert("Premium Plan Selected"),
      onChatToSales: () => alert("Chat about Premium Plan"),
    },
  ];

  return (
    <div className="p-4">
      <h3 className="uppercase text-[12px] font-sf-pro-rounded text-[#7047EB] text-center">
        Pricing
      </h3>
      <h4 className="text-[18px] font-sf-pro-rounded font-semibold mt-2 text-center">
        Choose a Plan That Fits Your Daycare’s Needs
      </h4>
      <div className="flex flex-col gap-4 mt-6">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingSectionMobile;
