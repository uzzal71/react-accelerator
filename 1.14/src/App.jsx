import avatar from "./assets/avatar.png";
import heroImage from "./assets/hero-graphics.svg";
import headerLogo from "./assets/lws-logo-en.svg";

function App() {
  return (
    <>
      <nav className="py-6">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">
            <img className="h-[40px]" src={headerLogo} alt="Lws" />
          </a>
          <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">
            Get Admission
          </a>
        </div>
      </nav>

      <section className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px]">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center w-10/12 mx-auto">
            <img
              className="md:order-2 object-cover ml-auto animate-updown"
              src={heroImage}
              width="500px"
              height="500px"
              alt="Banner"
            />
            <div>
              <h1 className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8">
                The Future of Learning starts with students at the center
              </h1>
              <a className="px-5 py-2.5 bg-[#038C61] rounded-[44px]" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:pt-[120px] lg:pb-28">
        <div className="container">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
              <span className="text-[#00CC8C]">Students</span> of the Year
            </h2>
            <form>
              <div className="flex">
                <div className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="z-20 block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
                    placeholder="Search by Student "
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
                  >
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="max-w-[848px] mx-auto overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#FFFFFF0D]">
                  <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                    ID
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold text-left">
                    Name
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold">
                    Scores
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="p-5 text-sm md:text-xl" colSpan="4">
                    Class One
                  </td>
                </tr>
                <tr className="border-b border-[#7ECEB529]">
                  <td className="p-5 text-sm md:text-xl">1</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="w-8 h-8"
                        src={avatar}
                        width="32"
                        height="32"
                        alt="John Smith"
                      />
                      <span className="whitespace-nowrap">John Smith</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">A+</td>
                  <td className="p-5 text-sm md:text-xl text-center">98%</td>
                </tr>
                <tr className="border-b border-[#7ECEB529]">
                  <td className="p-5 text-sm md:text-xl">2</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="w-8 h-8"
                        src={avatar}
                        width="32"
                        height="32"
                        alt="John Smith"
                      />
                      <span className="whitespace-nowrap">John Smith</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">A+</td>
                  <td className="p-5 text-sm md:text-xl text-center">98%</td>
                </tr>
                <tr className="border-b border-[#7ECEB529]">
                  <td className="p-5 text-sm md:text-xl">3</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="w-8 h-8"
                        src={avatar}
                        width="32"
                        height="32"
                        alt="John Smith"
                      />
                      <span className="whitespace-nowrap">John Smith</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">A+</td>
                  <td className="p-5 text-sm md:text-xl text-center">98%</td>
                </tr>

                <tr className="bg-white/5">
                  <td className="p-5 text-sm md:text-xl" colSpan="4">
                    Class Two
                  </td>
                </tr>
                <tr className="border-b border-[#7ECEB529]">
                  <td className="p-5 text-sm md:text-xl">1</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="w-8 h-8"
                        src={avatar}
                        width="32"
                        height="32"
                        alt="John Smith"
                      />
                      <span className="whitespace-nowrap">John Smith</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">A+</td>
                  <td className="p-5 text-sm md:text-xl text-center">98%</td>
                </tr>
                <tr className="border-b border-[#7ECEB529]">
                  <td className="p-5 text-sm md:text-xl">2</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="w-8 h-8"
                        src={avatar}
                        width="32"
                        height="32"
                        alt="John Smith"
                      />
                      <span className="whitespace-nowrap">John Smith</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">A+</td>
                  <td className="p-5 text-sm md:text-xl text-center">98%</td>
                </tr>
                <tr className="border-b border-[#7ECEB529]">
                  <td className="p-5 text-sm md:text-xl">3</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="w-8 h-8"
                        src={avatar}
                        width="32"
                        height="32"
                        alt="John Smith"
                      />
                      <span className="whitespace-nowrap">John Smith</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">A+</td>
                  <td className="p-5 text-sm md:text-xl text-center">98%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="py-6 md:py-8">
        <div className="container mx-auto">
          <p className="text-center text-base text-gray-500">
            Copyright ©2024 | All rights reserved by Learn with Sumit
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
