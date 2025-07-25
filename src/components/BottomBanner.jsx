import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
      <img
        src={assets.bottom_banner_image}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="banner"
        className="w-full md:hidden"
      />

      <div className="absolute inset-0 flex flex-col items-start md:items-start md:justify-center px-6 md:px-20 py-12 md:py-0 md:w-1/2 md:right-0 ml-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
          Why We Are The Best?
        </h1>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 max-w-md">
              <img
                src={feature.icon}
                alt={feature.title}
                className="md:w-11 w-9 mt-1"
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-500/70 text-xs md:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
