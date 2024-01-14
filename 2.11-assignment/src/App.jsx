import bookThumbnail from "./assets/book.png";
import logo from "./assets/lws-logo-en.svg";
import starIcon from "./assets/star.svg";

function App() {
  return (
    <>
      <nav className="py-6 ">
        <div className="container mx-auto flex items-center justify-between gap-x-6 max-w-7xl">
          <a href="/">
            <img
              className="max-w-[100px] md:max-w-[165px]"
              src={logo}
              alt="Lws"
            />
          </a>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_33_142)">
              <path
                d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5Z"
                stroke="#1C4336"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
                stroke="#1C4336"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_33_142">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </nav>
      <main className="my-10 lg:my-14">
        <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
          <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
            <div>
              <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
              <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
                Trending Books of the Year
              </h2>
              <form>
                <div className="flex">
                  <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                      placeholder="Search Book"
                      required
                    />
                    <div className="absolute right-0 top-0 flex h-full items-center">
                      <button
                        type="submit"
                        className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                      >
                        <svg
                          className="h-[14px] w-[14px]"
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
                        <span>Search</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex items-stretch space-x-3">
              <select
                className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
                name="sortBy"
                id="sortBy"
              >
                <option value="">Sort</option>
                <option value="name_asc">Name (A-Z)</option>
                <option value="name_desc">Name (Z-A)</option>
                <option value="year_asc">Publication Year (Oldest)</option>
                <option value="year_desc">Publication Year (Newest)</option>
              </select>
            </div>
          </div>
        </header>
        <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
              <img
                className="max-w-[144px]"
                src={bookThumbnail}
                alt="book name"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-bold lg:text-xl">
                JavaScript and Jquery
              </h4>
              <p className="text-xs lg:text-sm">
                By : <span>Jon Duckett</span>
              </p>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold lg:text-xl">$62</h4>
                <div className="flex items-center space-x-1">
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <span className="text-xs lg:text-sm">(4 Star)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Favourite
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
              <img
                className="max-w-[144px]"
                src={bookThumbnail}
                alt="book name"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-bold lg:text-xl">
                JavaScript and Jquery
              </h4>
              <p className="text-xs lg:text-sm">
                By : <span>Jon Duckett</span>
              </p>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold lg:text-xl">$62</h4>
                <div className="flex items-center space-x-1">
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />

                  <span className="text-xs lg:text-sm">(4 Star)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[24%] lg:py-1.5">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
                      fill="#DC2954"
                    />
                    <path
                      d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
                      stroke="#DC2954"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Favourite
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
              <img
                className="max-w-[144px]"
                src={bookThumbnail}
                alt="book name"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-bold lg:text-xl">
                JavaScript and Jquery
              </h4>
              <p className="text-xs lg:text-sm">
                By : <span>Jon Duckett</span>
              </p>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold lg:text-xl">$62</h4>
                <div className="flex items-center space-x-1">
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <span className="text-xs lg:text-sm">(4 Star)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Favourite
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
              <img
                className="max-w-[144px]"
                src={bookThumbnail}
                alt="book name"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-bold lg:text-xl">
                JavaScript and Jquery
              </h4>
              <p className="text-xs lg:text-sm">
                By : <span>Jon Duckett</span>
              </p>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold lg:text-xl">$62</h4>
                <div className="flex items-center space-x-1">
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <span className="text-xs lg:text-sm">(4 Star)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[24%] lg:py-1.5">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
                      fill="#DC2954"
                    />
                    <path
                      d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
                      stroke="#DC2954"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Favourite
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
              <img
                className="max-w-[144px]"
                src={bookThumbnail}
                alt="book name"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-bold lg:text-xl">
                JavaScript and Jquery
              </h4>
              <p className="text-xs lg:text-sm">
                By : <span>Jon Duckett</span>
              </p>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold lg:text-xl">$62</h4>
                <div className="flex items-center space-x-1">
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <span className="text-xs lg:text-sm">(4 Star)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Favourite
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
              <img
                className="max-w-[144px]"
                src={bookThumbnail}
                alt="book name"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-bold lg:text-xl">
                JavaScript and Jquery
              </h4>
              <p className="text-xs lg:text-sm">
                By : <span>Jon Duckett</span>
              </p>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold lg:text-xl">$62</h4>
                <div className="flex items-center space-x-1">
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <span className="text-xs lg:text-sm">(4 Star)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[24%] lg:py-1.5">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
                      fill="#DC2954"
                    />
                    <path
                      d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
                      stroke="#DC2954"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Favourite
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
              <img
                className="max-w-[144px]"
                src={bookThumbnail}
                alt="book name"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-bold lg:text-xl">
                JavaScript and Jquery
              </h4>
              <p className="text-xs lg:text-sm">
                By : <span>Jon Duckett</span>
              </p>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold lg:text-xl">$62</h4>
                <div className="flex items-center space-x-1">
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <span className="text-xs lg:text-sm">(4 Star)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Favourite
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
              <img
                className="max-w-[144px]"
                src={bookThumbnail}
                alt="book name"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-bold lg:text-xl">
                JavaScript and Jquery
              </h4>
              <p className="text-xs lg:text-sm">
                By : <span>Jon Duckett</span>
              </p>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold lg:text-xl">$62</h4>
                <div className="flex items-center space-x-1">
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <span className="text-xs lg:text-sm">(4 Star)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[24%] lg:py-1.5">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
                      fill="#DC2954"
                    />
                    <path
                      d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
                      stroke="#DC2954"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Favourite
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 md:py-8">
        <div className="container mx-auto">
          <p className="text-center text-sm lg:text-base">
            Copyright ©2023 | All rights reserved by Learn with Sumit
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
