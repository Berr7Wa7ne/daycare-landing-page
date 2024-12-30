import React from "react";
import PlanImg from "../../assets/PlanImg.jpg";
import PricingCard from "../PricingCards/PricingCards";

const PricingSectionDesktop: React.FC = () => {
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
    <div className="mt-10">
      <div className="relative">
        {/* Image */}
        <img
          src={PlanImg}
          alt="Pricing Plan"
          className="hidden sm:block w-full h-auto object-cover"
        />
        {/* Pricing Heading */}
        <div className="md:absolute top-10 sm:top-52 left-1/2 transform -translate-x-1/2 z-10 text-center">
          <h3 className="uppercase text-[14px] sm:text-[18px] font-sf-pro-rounded text-[#7047EB]">
            Pricing
          </h3>
          <h4 className="text-[18px] sm:text-[32px] lg:text-[56px] font-sf-pro-rounded font-semibold mt-2">
            Choose a Plan That Fits Your Daycare’s Needs
          </h4>
        </div>
        {/* Pricing Cards */}
        <div className="md:absolute top-[450px] sm:top-[550px] left-1/2 transform -translate-x-1/2 z-10 md:flex gap-6">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSectionDesktop;
