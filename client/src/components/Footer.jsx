import { assets, footerLinks } from "../assets/assets";

const Footer = () => {

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-primary-dull/10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">

            <div>
                <img src={assets.logo} alt="logoImg" className="w-34 md:w-32" />

                <p className="max-w-[410px] mt-6">
                    We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.
                </p>
            </div>

            <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                {footerLinks.map((val, index) => (
                    <div key={index}>
                        <h3 className="font-semibold text-base text-gray-700 md:mb-5 mb-2">
                            {val.title}
                        </h3>

                        <ul className="text-sm space-y-1">
                            {val.links.map((val, index) => (
                                <li key={index}>
                                    <a href={val.url} className="hover:underline transition">{val.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <p className="py-4 text-center text-sm md:text-base text-gray-600">
            Copyright {new Date().getFullYear()} © All Right Reserved.
        </p>
    </div>
  )
}

export default Footer