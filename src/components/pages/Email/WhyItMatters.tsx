import React from "react";

// Reuse the same BrowserLoadAnimation from hosting
function BrowserLoadAnimation() {
  return (
    <div className="relative w-[229px] h-[170px]">
      <style>{`
        @keyframes email-progress-fill {
          0%   { width: 0%; }
          60%  { width: 85%; }
          80%  { width: 85%; }
          100% { width: 0%; }
        }
        @keyframes email-rocket-fly {
          0%   { transform: translate(0px, 0px) rotate(-10deg); opacity: 1; }
          55%  { transform: translate(0px, 0px) rotate(-10deg); opacity: 1; }
          80%  { transform: translate(18px, -60px) rotate(-30deg); opacity: 1; }
          90%  { transform: translate(22px, -80px) rotate(-30deg); opacity: 0; }
          91%  { transform: translate(0px, 0px) rotate(-10deg); opacity: 0; }
          100% { transform: translate(0px, 0px) rotate(-10deg); opacity: 1; }
        }
        @keyframes email-flame { 0%,100% { transform: scaleY(1) scaleX(1); } 50% { transform: scaleY(1.3) scaleX(0.85); } }
        @keyframes email-content-fade { 0%,15% { opacity: 0.3; } 50% { opacity: 1; } 100% { opacity: 0.3; } }
      `}</style>
      <div className="absolute inset-0 overflow-hidden rounded-xl border border-[#e8e0d8] bg-white shadow-sm">
        <div className="flex h-7 items-center gap-[5px] border-b border-[#f0ebe6] bg-[#4285f4] px-3">
          <span className="size-[7px] rounded-full bg-[#ff5f57]" />
          <span className="size-[7px] rounded-full bg-[#febc2e]" />
          <span className="size-[7px] rounded-full bg-[#28c840]" />
          <div className="ml-2 flex h-[14px] flex-1 items-center rounded-full bg-white/20 px-2">
            <span className="h-1 w-[60px] rounded-full bg-white/40" />
          </div>
          <div className="ml-1 flex flex-col gap-[2.5px]">
            <span className="h-[1.5px] w-2.5 rounded-full bg-white/60" />
            <span className="h-[1.5px] w-2.5 rounded-full bg-white/60" />
            <span className="h-[1.5px] w-2.5 rounded-full bg-white/60" />
          </div>
        </div>
        <div className="relative flex flex-col gap-3 overflow-hidden p-4">
          <div className="h-[14px] w-full overflow-hidden rounded-full bg-[#f0e8d8]">
            <div className="h-full rounded-full bg-[#e8c89a]" style={{ animation: "email-progress-fill 2.8s ease-in-out infinite" }} />
          </div>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-7 flex-1 rounded-md bg-[#f0e8d8]" style={{ animation: `email-content-fade 2.8s ease-in-out ${i * 0.18}s infinite` }} />
            ))}
          </div>
          <div className="h-2.5 w-20 rounded-full border border-[#e8e0d8]" />
          <div className="absolute bottom-2.5 right-3" style={{ animation: "email-rocket-fly 2.8s ease-in-out infinite" }}>
            <svg width="38" height="50" viewBox="0 0 38 50" fill="none">
              <path d="M19 4C19 4 10 12 10 26h18C28 12 19 4 19 4Z" fill="#ff4136" />
              <path d="M19 2C16 6 14 10 13 14h12C24 10 22 6 19 2Z" fill="#cc2222" />
              <circle cx="19" cy="20" r="4" fill="white" fillOpacity="0.9" />
              <circle cx="19" cy="20" r="2.2" fill="#4285f4" />
              <path d="M10 26L6 34l6-4" fill="#cc2222" />
              <path d="M28 26l4 8-6-4" fill="#cc2222" />
              <rect x="15" y="26" width="8" height="5" rx="1" fill="#888" />
              <ellipse cx="19" cy="34" rx="5" ry="7" fill="#ff9500" style={{ transformOrigin: "19px 28px", animation: "email-flame 0.25s ease-in-out infinite" }} />
              <ellipse cx="19" cy="35" rx="3" ry="4.5" fill="#ffcc00" style={{ transformOrigin: "19px 28px", animation: "email-flame 0.25s ease-in-out 0.1s infinite" }} />
              <ellipse cx="19" cy="35.5" rx="1.5" ry="2.5" fill="white" fillOpacity="0.7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex size-[68px] shrink-0 items-center justify-center rounded-[34px] bg-[#fdece6]">
      {children}
    </div>
  );
}

function SpeedIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
      <g clipPath="url(#email-speed-clip)">
        <path d="M29.25 23H2.75C2.02065 23 1.32118 23.2897 0.805456 23.8054C0.289731 24.3212 0 25.0206 0 25.75C0 26.4793 0.289731 27.1788 0.805456 27.6945C1.32118 28.2102 2.02065 28.5 2.75 28.5H29.25C29.9793 28.5 30.6788 28.2102 31.1945 27.6945C31.7103 27.1788 32 26.4793 32 25.75C32 25.0206 31.7103 24.3212 31.1945 23.8054C30.6788 23.2897 29.9793 23 29.25 23ZM29.25 27.5H2.75C2.28587 27.5 1.84075 27.3156 1.51256 26.9874C1.18437 26.6592 1 26.2141 1 25.75C1 25.2858 1.18437 24.8407 1.51256 24.5125C1.84075 24.1843 2.28587 24 2.75 24H29.25C29.7141 24 30.1592 24.1843 30.4874 24.5125C30.8156 24.8407 31 25.2858 31 25.75C31 26.2141 30.8156 26.6592 30.4874 26.9874C30.1592 27.3156 29.7141 27.5 29.25 27.5Z" fill="#F24E29"/>
        <path d="M15.3754 21.9773C15.592 21.9923 15.8075 21.9997 16.0217 21.9996C18.2744 21.9988 20.4503 21.1803 22.1451 19.6963C23.8399 18.2123 24.9385 16.1636 25.2368 13.9308C25.2652 13.7158 25.2475 13.4972 25.1847 13.2896C25.1219 13.0821 25.0155 12.8903 24.8727 12.7271C24.6814 12.5096 24.4314 12.3521 24.1526 12.2735C23.8739 12.1949 23.5784 12.1986 23.3017 12.2841C23.025 12.3697 22.7789 12.5334 22.5932 12.7557C22.4075 12.9779 22.29 13.2491 22.2549 13.5366C22.102 14.698 21.6271 15.7934 20.884 16.6989C20.1409 17.6044 19.1592 18.2839 18.0499 18.6604C16.9407 19.037 15.7482 19.0956 14.6074 18.8296C13.4666 18.5636 12.423 17.9836 11.5947 17.1553C10.7664 16.327 10.1864 15.2834 9.92041 14.1426C9.65441 13.0018 9.713 11.8093 10.0895 10.7001C10.4661 9.59082 11.1455 8.6091 12.0511 7.86597C12.9566 7.12284 14.052 6.64797 15.2134 6.49508C15.6 6.40684 15.7721 6.3084 15.9442 6.20995C16.2162 5.92146 16.4776 5.39362C16.5163 4.80586C16.4904 4.6093 16.4258 4.41982 16.3263 4.24831C16.0944 3.92665 15.9367 3.8065C15.779 3.68635 15.4073 3.5482C15.0157 3.48588 14.8193 3.51303C12.539 3.81373 10.4514 4.95025 8.96125 6.70235C7.47107 8.45444 6.68437 10.6973 6.75361 12.9964C6.82284 15.2955 7.74308 17.487 9.33599 19.1462C10.9289 20.8055 13.081 21.8143 15.3754 21.9773Z" fill="#F24E29"/>
        <path d="M16 7.99997C15.0605 7.99997 14.1422 8.27855 13.361 8.80049C12.5799 9.32243 11.9711 10.0643 11.6116 10.9322C11.2521 11.8002 11.158 12.7552 11.3413 13.6766C11.5245 14.5981 11.9769 15.4444 12.6412 16.1087C13.3055 16.773 14.1519 17.2254 15.0733 17.4087C15.9947 17.592 16.9498 17.4979 17.8177 17.1384C18.6857 16.7789 19.4275 16.1701 19.9495 15.3889C20.4714 14.6078 20.75 13.6894 20.75 12.75C20.7486 11.4906 20.2477 10.2833 19.3572 9.39279C18.4667 8.5023 17.2593 8.0014 16 7.99997Z" fill="#F24E29"/>
      </g>
      <defs>
        <clipPath id="email-speed-clip"><rect width="32" height="32" fill="white"/></clipPath>
      </defs>
    </svg>
  );
}

function SecureIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
      <path d="M15.3874 14.6129C14.2399 14.6129 13.3062 15.5465 13.3062 16.694C13.3062 17.3227 13.5828 17.903 14.0579 18.2957V20.4524C14.0579 21.1855 14.6543 21.7819 15.3874 21.7819C16.1204 21.7819 16.7168 21.1855 16.7168 20.4524V18.2957C17.1921 17.9029 17.4684 17.3227 17.4684 16.694C17.4685 15.5465 16.5349 14.6129 15.3874 14.6129ZM28.1569 19.5189C28.3471 18.5486 28.4447 17.5466 28.4447 16.5354V6.38163C28.4447 6.18163 28.3255 6.00081 28.1416 5.922L15.5844 0.540375C15.4586 0.486562 15.3162 0.486562 15.1904 0.540375L2.63319 5.92206C2.44938 6.00087 2.33013 6.18163 2.33013 6.38169V16.5354C2.33013 20.271 3.60831 23.6897 6.0265 26.4219C8.35731 29.0556 11.6513 30.8563 15.3015 31.4926C15.4448 31.4976 15.4733 31.4926C17.8614 31.0764 20.1266 30.1535 22.0439 28.821C22.6347 29.0269 23.2689 29.1393 23.9289 29.1393C27.0944 29.1393 29.6698 26.5639 29.6698 23.3984C29.6699 21.9039 29.0958 20.5414 28.1569 19.5189ZM23.9289 28.1391C21.3147 28.1391 19.188 26.0124 19.188 23.3983C19.188 20.7841 21.3147 18.6573 23.9289 18.6573C26.5431 18.6573 28.6698 20.7841 28.6698 23.3983C28.6699 26.0124 26.5431 28.1391 23.9289 28.1391Z" fill="#F24E29"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 22 22" fill="none" width="22" height="22">
      <path d="M11 1L13.012 6.23109C13.294 6.96432 13.435 7.33093 13.6542 7.63931C13.8486 7.91262 14.0874 8.15141 14.3607 8.34575C14.6691 8.56503 15.0357 8.70603 15.7689 8.98804L21 11L15.7689 13.012C15.0357 13.294 14.6691 13.435 14.3607 13.6542C14.0874 13.8486 13.8486 14.0874 13.6542 14.3607C13.435 14.6691 13.294 15.0357 13.012 15.7689L11 21L8.98804 15.7689C8.70603 15.0357 8.56503 14.6691 8.34575 14.3607C8.15141 14.0874 7.91262 13.8486 7.63931 13.6542C7.33093 13.435 6.96432 13.294 6.23109 13.012L1 11L6.23108 8.98804C6.96431 8.70603 7.33093 8.56503 7.63931 8.34575C7.91262 8.15141 8.15141 7.91262 8.34575 7.63931C8.56503 7.33093 8.70603 6.96431 8.98804 6.23108L11 1Z" stroke="#F24E29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function EmailWhyItMatters() {
  return (
    <section className="w-full bg-[#fef8f6] px-6 py-[80px] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <span className="inline-flex w-fit items-center rounded-[18px] bg-gradient-to-r from-coral-500/15 to-coral-500/0 px-3.5 py-2 font-figtree text-lg font-semibold text-coral-500">
            Why it matters
          </span>
          <h2
            className="text-center font-fraunces text-[40px] font-bold leading-normal text-[#221c19] sm:text-[48px]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Look professional from the very first email
          </h2>
        </div>

        {/* Bento grid */}
        <div className="flex flex-col gap-6 lg:flex-row">

          {/* Left column */}
          <div className="flex flex-col gap-6 lg:flex-1">

            {/* Look the part — wide card */}
            <div className="relative overflow-hidden rounded-2xl bg-white p-6">
              <div className="flex gap-7">
                <div className="flex flex-col gap-7">
                  <IconBadge><SpeedIcon /></IconBadge>
                  <div className="flex flex-col gap-4">
                    <h3
                      className="font-fraunces text-[26px] font-bold leading-normal text-[#221c19]"
                      style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                    >
                      Look the part
                    </h3>
                    <p className="max-w-[439px] font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                      <strong className="font-bold text-[#221c19]">you@yourbusiness.com</strong>{" "}
                      beats a generic free address every time.
                    </p>
                  </div>
                </div>
                <div className="ml-auto hidden shrink-0 lg:block" aria-hidden>
                  <BrowserLoadAnimation />
                </div>
              </div>
            </div>

            {/* Bottom two cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

              {/* Reliable and secure */}
              <div className="flex flex-col justify-center gap-7 rounded-2xl bg-white p-6">
                <IconBadge><SecureIcon /></IconBadge>
                <div className="flex flex-col gap-4">
                  <h3
                    className="font-fraunces text-[26px] font-bold leading-normal text-[#221c19]"
                    style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                  >
                    Reliable and secure
                  </h3>
                  <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                    Spam filtering and strong security built in to every plan.
                  </p>
                </div>
              </div>

              {/* Matches your domain */}
              <div className="flex flex-col justify-center gap-7 rounded-2xl bg-white p-6">
                <IconBadge>
                  <div className="flex size-6 items-center justify-center">
                    <StarIcon />
                  </div>
                </IconBadge>
                <div className="flex flex-col gap-4">
                  <h3
                    className="font-fraunces text-[26px] font-bold leading-normal text-[#221c19]"
                    style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                  >
                    Matches your domain
                  </h3>
                  <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                    Your email address matches your website — consistent across everything.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right tall card — Works with what you know */}
          <div className="flex flex-col gap-6 overflow-hidden rounded-2xl bg-white p-6 lg:w-[508px] lg:shrink-0">
            <div className="flex flex-col gap-7">
              <IconBadge>
                <div className="flex size-6 items-center justify-center">
                  <StarIcon />
                </div>
              </IconBadge>
              <div className="flex flex-col gap-4">
                <h3
                  className="font-fraunces text-[32px] font-bold leading-normal text-[#221c19]"
                  style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                >
                  Works with what you know
                </h3>
                <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                  Use it on your phone, in Outlook, Gmail or in your browser.
                </p>
              </div>
            </div>
            {/* Decorative devices visual */}
            <div className="mt-auto flex items-end justify-center pt-8" aria-hidden>
              <div className="flex size-[260px] items-center justify-center rounded-2xl bg-[#fef8f6]">
                <svg viewBox="0 0 100 100" fill="none" width="120" height="120">
                  <rect x="10" y="25" width="80" height="55" rx="6" fill="#2e0d05" />
                  <rect x="16" y="31" width="68" height="40" rx="3" fill="#f7c948" />
                  <circle cx="50" cy="51" r="14" fill="#1877f2" />
                  <ellipse cx="50" cy="51" rx="6" ry="14" fill="#1559b8" />
                  <path d="M36 51h28" stroke="white" strokeWidth="1.2" />
                  <path d="M38 43h24M38 59h24" stroke="white" strokeWidth="1.2" />
                  <rect x="38" y="80" width="24" height="6" rx="2" fill="#6b5f57" />
                  <rect x="30" y="86" width="40" height="4" rx="2" fill="#dcd2c5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
