import { assets, features } from "../assets/assets"

const Banner = () => {
  return (
    <div className="relative mt-24">
        <img src={assets.bottom_banner_image} alt="bannerImg" className="w-full hidden md:block" />

        <img src={assets.bottom_banner_image_sm} alt="bannerImg" className="w-full md:hidden" />

        <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24">
            <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-primary-dull mb-6">
                    Why Are We the Best?
                </h2>

                {features.map((val, index) => (
                    <div key={index} className="flex items-center gap-4 mt-2">
                        <img src={val.icon} alt={val.title} className="md:w-11 w-9" />
                        
                        <div>
                            <h3 className="text-primary-dull text-lg md:text-xl font-semibold">
                                {val.title}
                            </h3>

                            <p className="text-gray-700/80 text-xs md:text-sm">
                                {val.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Banner