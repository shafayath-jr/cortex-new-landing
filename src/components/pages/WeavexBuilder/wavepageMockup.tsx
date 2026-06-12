export default function WebpageMockup() {
    return (
      <div className="w-full bg-[#17951f] p-6">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[24px]">
            {/* Navbar */}
            <div className="rounded-[22px] bg-[#eb5519] px-6 py-3">
              <div className="flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-full bg-white">
                  <div className="size-4 rounded-full bg-[#eb5519]" />
                </div>
  
                <div className="flex gap-8">
                  {["Home", "Service", "Contact", "About"].map((item) => (
                    <span
                      key={item}
                      className="font-semibold text-white text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
  
                <div className="flex items-center gap-2 rounded-full border border-white px-4 py-1 text-sm text-white">
                  Search
                  <svg
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
  
            <div className="mt-4 space-y-4">
              {/* HERO ROW */}
              <div className="grid grid-cols-[2.2fr_0.8fr] gap-4">
                {/* Hero */}
                <div className="rounded-[24px] bg-[#f3f3f3] p-4">
                  <div className="relative overflow-hidden rounded-[20px] bg-[#eb5519] p-6 min-h-[220px]">
                    <h2 className="text-4xl font-bold text-white">
                      Coffee Shop
                    </h2>
  
                    <div className="mt-4 max-w-[260px]">
                      <div className="mb-2 h-2 rounded-full bg-white/50" />
                      <div className="h-2 w-3/4 rounded-full bg-white/50" />
                    </div>
  
                    <button className="mt-6 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#eb5519]">
                      Learn More
                    </button>
  
                    {/* Decorative shapes */}
                    <div className="absolute bottom-[-40px] left-[42%] h-36 w-36 rotate-45 rounded-[28px] bg-white" />
  
                    <div className="absolute bottom-[-50px] right-10 h-44 w-44 rotate-45 rounded-[28px] bg-[#ff7a3d]" />
  
                    <div className="absolute right-24 top-8 size-8 rounded-full bg-white" />
  
                    <div className="absolute right-10 top-5 size-10 rounded-full bg-white" />
                  </div>
                </div>
  
                {/* Right Side */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-[20px] bg-[#eb5519] p-3">
                    <div className="flex aspect-video items-center justify-center rounded-[16px] bg-[#f9d5c8]">
                      <svg
                        className="size-12 text-[#eb5519]/50"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                      </svg>
                    </div>
                  </div>
  
                  <div className="rounded-[20px] bg-[#f5f5f5] p-4">
                    <div className="mb-4 h-3 w-16 rounded-full bg-black" />
  
                    <div className="mb-4 h-24 rounded-xl bg-[#f9d5c8]" />
  
                    <div className="space-y-2">
                      <div className="h-2 rounded-full bg-gray-300" />
                      <div className="h-2 w-3/4 rounded-full bg-gray-300" />
                    </div>
  
                    <button className="mt-4 rounded-full bg-[#eb5519] px-4 py-2 text-xs text-white">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
  
              {/* SECOND ROW */}
              <div className="grid grid-cols-[1fr_1fr_0.8fr_0.9fr] gap-4">
                {/* Web Card */}
                <div className="rounded-[20px] bg-[#eb5519] p-4">
                  <div className="rounded-xl bg-[#ff7a3d] py-3 text-center text-xl font-bold text-white">
                    Web
                  </div>
  
                  <div className="mt-4 h-3 w-20 rounded-full bg-black" />
  
                  <div className="mt-4 space-y-2">
                    <div className="h-2 rounded-full bg-white/40" />
                    <div className="h-2 rounded-full bg-white/40" />
                    <div className="h-2 w-2/3 rounded-full bg-white/40" />
                  </div>
                </div>
  
                {/* Light Web Card */}
                <div className="rounded-[20px] bg-[#f9d5c8] p-4">
                  <div className="rounded-xl bg-white py-3 text-center text-xl font-bold text-[#eb5519]">
                    Web
                  </div>
  
                  <div className="mt-4 h-3 w-20 rounded-full bg-black" />
  
                  <div className="mt-4 space-y-2">
                    <div className="h-2 rounded-full bg-gray-300" />
                    <div className="h-2 rounded-full bg-gray-300" />
                    <div className="h-2 w-2/3 rounded-full bg-gray-300" />
                  </div>
                </div>
  
                {/* Orange Content Card */}
                <div className="rounded-[20px] bg-[#eb5519] p-4">
                  <div className="mb-4 h-3 w-20 rounded-full bg-white" />
  
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-white/50" />
                    <div className="h-2 rounded-full bg-white/50" />
                    <div className="h-2 w-3/4 rounded-full bg-white/50" />
                  </div>
  
                  <button className="mt-6 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#eb5519]">
                    Learn More
                  </button>
                </div>
  
                {/* Sidebar Card */}
                <div className="rounded-[20px] bg-[#f3f3f3] p-4">
                  <div className="mb-4 h-3 w-16 rounded-full bg-black" />
  
                  <div className="mb-4 h-24 rounded-xl bg-[#f9d5c8]" />
  
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-gray-300" />
                    <div className="h-2 w-3/4 rounded-full bg-gray-300" />
                  </div>
  
                  <button className="mt-4 rounded-full bg-[#eb5519] px-4 py-2 text-xs text-white">
                    Learn More
                  </button>
                </div>
              </div>
  
              {/* FOOTER ROW */}
              <div className="grid grid-cols-[2fr_1fr] gap-4">
                {/* Profile */}
                <div className="overflow-hidden rounded-[20px]">
                  <div className="flex">
                    <div className="flex w-24 items-center justify-center bg-[#eb5519]">
                      <div className="flex size-14 items-center justify-center rounded-full bg-white">
                        <svg
                          className="size-7 text-[#eb5519]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                        </svg>
                      </div>
                    </div>
  
                    <div className="flex-1 bg-[#f5f5f5] p-4">
                      <div className="mb-4 h-3 w-24 rounded-full bg-black" />
  
                      <div className="space-y-2">
                        <div className="h-2 rounded-full bg-gray-300" />
                        <div className="h-2 rounded-full bg-gray-300" />
                        <div className="h-2 w-3/4 rounded-full bg-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* CTA */}
                <div className="rounded-[20px] bg-[#eb5519] p-4">
                  <div className="mb-4 h-3 w-24 rounded-full bg-white" />
  
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-white/50" />
                    <div className="h-2 rounded-full bg-white/50" />
                    <div className="h-2 rounded-full bg-white/50" />
                    <div className="h-2 w-4/5 rounded-full bg-white/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }