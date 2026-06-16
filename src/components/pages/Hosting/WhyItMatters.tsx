function BrowserLoadAnimation() {
  return (
    <div className="relative w-[229px] h-[170px]">
      <style>{`
        @keyframes progress-fill {
          0%   { width: 0%; }
          60%  { width: 85%; }
          80%  { width: 85%; }
          100% { width: 0%; }
        }
        @keyframes rocket-fly {
          0%   { transform: translate(0px, 0px) rotate(-10deg); opacity: 1; }
          55%  { transform: translate(0px, 0px) rotate(-10deg); opacity: 1; }
          80%  { transform: translate(18px, -60px) rotate(-30deg); opacity: 1; }
          90%  { transform: translate(22px, -80px) rotate(-30deg); opacity: 0; }
          91%  { transform: translate(0px, 0px) rotate(-10deg); opacity: 0; }
          100% { transform: translate(0px, 0px) rotate(-10deg); opacity: 1; }
        }
        @keyframes flame-flicker {
          0%,100% { transform: scaleY(1) scaleX(1); }
          50%      { transform: scaleY(1.3) scaleX(0.85); }
        }
        @keyframes content-fade {
          0%,15% { opacity: 0.3; }
          50%    { opacity: 1; }
          100%   { opacity: 0.3; }
        }
        @keyframes dot-pulse {
          0%,100% { opacity: 0.4; }
          50%     { opacity: 1; }
        }
      `}</style>

      {/* Browser chrome */}
      <div className="absolute inset-0 overflow-hidden rounded-xl border border-[#e8e0d8] bg-white shadow-sm">

        {/* Title bar */}
        <div className="flex h-[28px] items-center gap-[5px] border-b border-[#f0ebe6] bg-[#4285f4] px-3">
          <span className="size-[7px] rounded-full bg-[#ff5f57]" />
          <span className="size-[7px] rounded-full bg-[#febc2e]" />
          <span className="size-[7px] rounded-full bg-[#28c840]" />
          {/* URL bar */}
          <div className="ml-2 flex h-[14px] flex-1 items-center rounded-full bg-white/20 px-2">
            <span className="h-[4px] w-[60px] rounded-full bg-white/40" />
          </div>
          {/* Hamburger */}
          <div className="ml-1 flex flex-col gap-[2.5px]">
            <span className="h-[1.5px] w-[10px] rounded-full bg-white/60" />
            <span className="h-[1.5px] w-[10px] rounded-full bg-white/60" />
            <span className="h-[1.5px] w-[10px] rounded-full bg-white/60" />
          </div>
        </div>

        {/* Page content */}
        <div className="relative flex flex-col gap-3 overflow-hidden p-4">

          {/* Hero placeholder bar (URL/search bar in design) */}
          <div className="h-[14px] w-full overflow-hidden rounded-full bg-[#f0e8d8]">
            <div
              className="h-full rounded-full bg-[#e8c89a]"
              style={{ animation: "progress-fill 2.8s ease-in-out infinite" }}
            />
          </div>

          {/* Content blocks row */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-[28px] flex-1 rounded-md bg-[#f0e8d8]"
                style={{ animation: `content-fade 2.8s ease-in-out ${i * 0.18}s infinite` }}
              />
            ))}
          </div>

          {/* Bottom progress bar outline */}
          <div className="h-[10px] w-[80px] rounded-full border border-[#e8e0d8]" />

          {/* Rocket */}
          <div
            className="absolute bottom-[10px] right-[12px]"
            style={{ animation: "rocket-fly 2.8s ease-in-out infinite" }}
          >
            <svg width="38" height="50" viewBox="0 0 38 50" fill="none">
              {/* Body */}
              <path d="M19 4C19 4 10 12 10 26h18C28 12 19 4 19 4Z" fill="#ff4136" />
              {/* Nose */}
              <path d="M19 2C16 6 14 10 13 14h12C24 10 22 6 19 2Z" fill="#cc2222" />
              {/* Window */}
              <circle cx="19" cy="20" r="4" fill="white" fillOpacity="0.9" />
              <circle cx="19" cy="20" r="2.2" fill="#4285f4" />
              {/* Fins */}
              <path d="M10 26L6 34l6-4" fill="#cc2222" />
              <path d="M28 26l4 8-6-4" fill="#cc2222" />
              {/* Exhaust */}
              <rect x="15" y="26" width="8" height="5" rx="1" fill="#888" />
              {/* Flame */}
              <ellipse
                cx="19" cy="34" rx="5" ry="7"
                fill="#ff9500"
                style={{ transformOrigin: "19px 28px", animation: "flame-flicker 0.25s ease-in-out infinite" }}
              />
              <ellipse cx="19" cy="35" rx="3" ry="4.5" fill="#ffcc00" style={{ transformOrigin: "19px 28px", animation: "flame-flicker 0.25s ease-in-out 0.1s infinite" }} />
              <ellipse cx="19" cy="35.5" rx="1.5" ry="2.5" fill="white" fillOpacity="0.7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpeedIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <g clipPath="url(#speed-clip)">
        <path d="M22.9974 10.5949C23.0262 10.701 23.089 10.7946 23.1762 10.8615C23.2634 10.9283 23.3701 10.9647 23.48 10.9649C23.5239 10.9653 23.5677 10.9594 23.61 10.9475C23.7054 10.9218 23.7911 10.8683 23.8562 10.7939C23.9212 10.7195 23.9628 10.6275 23.9755 10.5295C23.9883 10.4315 23.9717 10.3319 23.9279 10.2433C23.884 10.1547 23.8149 10.0811 23.7293 10.0318C23.6436 9.9825 23.5452 9.95971 23.4466 9.96631C23.348 9.97291 23.2535 10.0086 23.1752 10.0689C23.0969 10.1292 23.0382 10.2113 23.0065 10.3049C22.9749 10.3986 22.9717 10.4995 22.9974 10.5949Z" fill="#F24E29"/>
        <path d="M22.6999 9.09995C22.8102 9.09977 22.9172 9.06321 23.0045 8.99594C23.0918 8.92866 23.1544 8.83444 23.1827 8.72792C23.2109 8.62139 23.2032 8.50852 23.1607 8.40684C23.1182 8.30516 23.0433 8.22036 22.9476 8.16562C22.852 8.11087 22.741 8.08924 22.6318 8.10409C22.5226 8.11894 22.4213 8.16944 22.3438 8.24774C22.2662 8.32604 22.2167 8.42776 22.2029 8.5371C22.1891 8.64644 22.2118 8.75727 22.2674 8.85239C22.3116 8.92783 22.3748 8.99039 22.4507 9.03382C22.5266 9.07726 22.6125 9.10006 22.6999 9.09995Z" fill="#F24E29"/>
        <path d="M21.46 7.49997C21.526 7.50062 21.5915 7.48787 21.6526 7.46251C21.7136 7.43714 21.7688 7.39968 21.8149 7.35239C21.8966 7.27028 21.9474 7.1624 21.9585 7.04711C21.9696 6.93181 21.9404 6.81624 21.8758 6.72005C21.8113 6.62387 21.7154 6.55302 21.6045 6.51958C21.4936 6.48613 21.3746 6.49216 21.2676 6.53662C21.1607 6.58109 21.0724 6.66125 21.0179 6.76345C20.9634 6.86566 20.946 6.98359 20.9687 7.09717C20.9914 7.21076 21.0528 7.31297 21.1423 7.38641C21.2319 7.45986 21.3441 7.49999 21.46 7.49997Z" fill="#F24E29"/>
        <path d="M19.605 6.20737C19.68 6.25138 19.7654 6.27468 19.8524 6.27487C19.9744 6.27585 20.0925 6.2324 20.1848 6.15265C20.277 6.0729 20.3371 5.96229 20.3538 5.84149C20.3704 5.72068 20.3426 5.59794 20.2754 5.49617C20.2082 5.39441 20.1062 5.32059 19.9886 5.28849C19.8709 5.2564 19.7456 5.26822 19.636 5.32176C19.5265 5.3753 19.4401 5.46689 19.3931 5.57943C19.3462 5.69197 19.3418 5.81776 19.3807 5.93332C19.4197 6.04887 19.4994 6.14628 19.605 6.20737Z" fill="#F24E29"/>
        <path d="M17.855 5.48996C17.8967 5.49989 17.9395 5.50492 17.9824 5.50498C18.108 5.50336 18.2282 5.45404 18.3187 5.36703C18.4092 5.28002 18.4632 5.16183 18.4697 5.03646C18.4763 4.91108 18.4349 4.78791 18.3539 4.69194C18.273 4.59597 18.1586 4.5344 18.0339 4.51971C17.9092 4.50502 17.7836 4.53832 17.6826 4.61285C17.5816 4.68737 17.5127 4.79755 17.4899 4.92101C17.4671 5.04448 17.4922 5.17198 17.56 5.27764C17.6278 5.3833 17.7333 5.45921 17.855 5.48996Z" fill="#F24E29"/>
        <path d="M29.25 23H2.75C2.02065 23 1.32118 23.2897 0.805456 23.8054C0.289731 24.3212 0 25.0206 0 25.75C0 26.4793 0.289731 27.1788 0.805456 27.6945C1.32118 28.2102 2.02065 28.5 2.75 28.5H29.25C29.9793 28.5 30.6788 28.2102 31.1945 27.6945C31.7103 27.1788 32 26.4793 32 25.75C32 25.0206 31.7103 24.3212 31.1945 23.8054C30.6788 23.2897 29.9793 23 29.25 23ZM29.25 27.5H2.75C2.28587 27.5 1.84075 27.3156 1.51256 26.9874C1.18437 26.6592 1 26.2141 1 25.75C1 25.2858 1.18437 24.8407 1.51256 24.5125C1.84075 24.1843 2.28587 24 2.75 24H29.25C29.7141 24 30.1592 24.1843 30.4874 24.5125C30.8156 24.8407 31 25.2858 31 25.75C31 26.2141 30.8156 26.6592 30.4874 26.9874C30.1592 27.3156 29.7141 27.5 29.25 27.5Z" fill="#F24E29"/>
        <path d="M15 25C14.9126 25.0002 14.8268 25.0234 14.7512 25.0673C14.6756 25.1111 14.6129 25.1742 14.5694 25.25H3.43063C3.37583 25.1547 3.29105 25.0802 3.18951 25.038C3.08796 24.9959 2.97534 24.9885 2.86917 25.0171C2.763 25.0456 2.66923 25.1084 2.60246 25.1957C2.5357 25.2831 2.49967 25.39 2.5 25.5V26C2.49967 26.1099 2.5357 26.2169 2.60246 26.3042C2.66923 26.3915 2.763 26.4544 2.86917 26.4829C2.97534 26.5114 3.08796 26.504 3.18951 26.4619C3.29105 26.4198 3.37583 26.3453 3.43063 26.25H14.5694C14.6242 26.3453 14.7089 26.4198 14.8105 26.4619C14.912 26.504 15.0247 26.5114 15.1308 26.4829C15.237 26.4544 15.3308 26.3915 15.3975 26.3042C15.4643 26.2169 15.5003 26.1099 15.5 26V25.5C15.5 25.3674 15.4473 25.2402 15.3535 25.1464C15.2598 25.0527 15.1326 25 15 25Z" fill="#F24E29"/>
        <path d="M17 25C16.8674 25 16.7402 25.0527 16.6465 25.1464C16.5527 25.2402 16.5 25.3674 16.5 25.5V26C16.5 26.1326 16.5527 26.2598 16.6464 26.3535C16.7402 26.4473 16.8674 26.5 17 26.5C17.1326 26.5 17.2598 26.4473 17.3536 26.3535C17.4473 26.2598 17.5 26.1326 17.5 26V25.5C17.5 25.3674 17.4473 25.2402 17.3535 25.1464C17.2598 25.0527 17.1326 25 17 25Z" fill="#F24E29"/>
        <path d="M19 25C18.8674 25 18.7402 25.0527 18.6465 25.1464C18.5527 25.2402 18.5 25.3674 18.5 25.5V26C18.5 26.1326 18.5527 26.2598 18.6464 26.3535C18.7402 26.4473 18.8674 26.5 19 26.5C19.1326 26.5 19.2598 26.4473 19.3536 26.3535C19.4473 26.2598 19.5 26.1326 19.5 26V25.5C19.5 25.3674 19.4473 25.2402 19.3535 25.1464C19.2598 25.0527 19.1326 25 19 25Z" fill="#F24E29"/>
        <path d="M21 25C20.8674 25 20.7402 25.0527 20.6465 25.1464C20.5527 25.2402 20.5 25.3674 20.5 25.5V26C20.5 26.1326 20.5527 26.2598 20.6464 26.3535C20.7402 26.4473 20.8674 26.5 21 26.5C21.1326 26.5 21.2598 26.4473 21.3536 26.3535C21.4473 26.2598 21.5 26.1326 21.5 26V25.5C21.5 25.3674 21.4473 25.2402 21.3535 25.1464C21.2598 25.0527 21.1326 25 21 25Z" fill="#F24E29"/>
        <path d="M15.3754 21.9773C15.592 21.9923 15.8075 21.9997 16.0217 21.9996C18.2744 21.9988 20.4503 21.1803 22.1451 19.6963C23.8399 18.2123 24.9385 16.1636 25.2368 13.9308C25.2652 13.7158 25.2475 13.4972 25.1847 13.2896C25.1219 13.0821 25.0155 12.8903 24.8727 12.7271C24.6814 12.5096 24.4314 12.3521 24.1526 12.2735C23.8739 12.1949 23.5784 12.1986 23.3017 12.2841C23.025 12.3697 22.7789 12.5334 22.5932 12.7557C22.4075 12.9779 22.29 13.2491 22.2549 13.5366C22.102 14.698 21.6271 15.7934 20.884 16.6989C20.1409 17.6044 19.1592 18.2839 18.0499 18.6604C16.9407 19.037 15.7482 19.0956 14.6074 18.8296C13.4666 18.5636 12.423 17.9836 11.5947 17.1553C10.7664 16.327 10.1864 15.2834 9.92041 14.1426C9.65441 13.0018 9.713 11.8093 10.0895 10.7001C10.4661 9.59082 11.1455 8.6091 12.0511 7.86597C12.9566 7.12284 14.052 6.64797 15.2134 6.49508C15.4101 6.47029 15.6 6.40684 15.7721 6.3084C15.9442 6.20995 16.0951 6.07845 16.2162 5.92146C16.3373 5.76447 16.4261 5.58508 16.4776 5.39362C16.5292 5.20217 16.5423 5.00241 16.5163 4.80586C16.4904 4.6093 16.4258 4.41982 16.3263 4.24831C16.2268 4.0768 16.0944 3.92665 15.9367 3.8065C15.779 3.68635 15.5991 3.59857 15.4073 3.5482C15.2156 3.49784 15.0157 3.48588 14.8193 3.51303C12.539 3.81373 10.4514 4.95025 8.96125 6.70235C7.47107 8.45444 6.68437 10.6973 6.75361 12.9964C6.82284 15.2955 7.74308 17.487 9.33599 19.1462C10.9289 20.8055 13.081 21.8143 15.3754 21.9773Z" fill="#F24E29"/>
        <path d="M16 7.99997C15.0605 7.99997 14.1422 8.27855 13.361 8.80049C12.5799 9.32243 11.9711 10.0643 11.6116 10.9322C11.2521 11.8002 11.158 12.7552 11.3413 13.6766C11.5245 14.5981 11.9769 15.4444 12.6412 16.1087C13.3055 16.773 14.1519 17.2254 15.0733 17.4087C15.9947 17.592 16.9498 17.4979 17.8177 17.1384C18.6857 16.7789 19.4275 16.1701 19.9495 15.3889C20.4714 14.6078 20.75 13.6894 20.75 12.75C20.7486 11.4906 20.2477 10.2833 19.3572 9.39279C18.4667 8.5023 17.2593 8.0014 16 7.99997ZM16 16.5C15.2583 16.5 14.5333 16.28 13.9166 15.868C13.2999 15.4559 12.8193 14.8703 12.5355 14.185C12.2516 13.4998 12.1774 12.7458 12.3221 12.0184C12.4667 11.291 12.8239 10.6228 13.3483 10.0983C13.8728 9.57387 14.541 9.21672 15.2684 9.07203C15.9958 8.92733 16.7498 9.00159 17.4351 9.28542C18.1203 9.56925 18.706 10.0499 19.118 10.6666C19.5301 11.2833 19.75 12.0083 19.75 12.75C19.7489 13.7442 19.3534 14.6974 18.6504 15.4004C17.9474 16.1034 16.9942 16.4988 16 16.5Z" fill="#F24E29"/>
      </g>
      <defs>
        <clipPath id="speed-clip"><rect width="32" height="32" fill="white"/></clipPath>
      </defs>
    </svg>
  );
}

function SecureIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <path d="M15.3874 14.6129C14.2399 14.6129 13.3062 15.5465 13.3062 16.694C13.3062 17.3227 13.5828 17.903 14.0579 18.2957V20.4524C14.0579 21.1855 14.6543 21.7819 15.3874 21.7819C16.1204 21.7819 16.7168 21.1855 16.7168 20.4524V18.2957C17.1921 17.9029 17.4684 17.3227 17.4684 16.694C17.4685 15.5465 16.5349 14.6129 15.3874 14.6129ZM15.9542 17.6149C15.8067 17.7059 15.7169 17.8669 15.7169 18.0403V20.4525C15.7169 20.6311 15.566 20.7819 15.3874 20.7819C15.2089 20.7819 15.058 20.6311 15.058 20.4525V18.0403C15.058 17.8669 14.9681 17.7059 14.8206 17.6148C14.4986 17.416 14.3063 17.0718 14.3063 16.6941C14.3063 16.098 14.7913 15.613 15.3874 15.613C15.9836 15.613 16.4686 16.098 16.4686 16.6941C16.4685 17.0718 16.2763 17.416 15.9542 17.6149ZM28.1569 19.5189C28.3471 18.5486 28.4447 17.5466 28.4447 16.5354V6.38163C28.4447 6.18163 28.3255 6.00081 28.1416 5.922L15.5844 0.540375C15.4586 0.486562 15.3162 0.486562 15.1904 0.540375L2.63319 5.92206C2.44938 6.00087 2.33013 6.18163 2.33013 6.38169V16.5354C2.33013 20.271 3.60831 23.6897 6.0265 26.4219C8.35731 29.0556 11.6513 30.8563 15.3015 31.4926C15.3299 31.4976 15.3586 31.5001 15.3874 31.5001C15.4161 31.5001 15.4448 31.4976 15.4733 31.4926C17.8614 31.0764 20.1266 30.1535 22.0439 28.821C22.6347 29.0269 23.2689 29.1393 23.9289 29.1393C27.0944 29.1393 29.6698 26.5639 29.6698 23.3984C29.6699 21.9039 29.0958 20.5414 28.1569 19.5189ZM23.9289 28.1391C21.3147 28.1391 19.188 26.0124 19.188 23.3983C19.188 20.7841 21.3147 18.6573 23.9289 18.6573C26.5431 18.6573 28.6698 20.7841 28.6698 23.3983C28.6699 26.0124 26.5431 28.1391 23.9289 28.1391Z" fill="#F24E29"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
      <path d="M11 1L13.012 6.23109C13.294 6.96432 13.435 7.33093 13.6542 7.63931C13.8486 7.91262 14.0874 8.15141 14.3607 8.34575C14.6691 8.56503 15.0357 8.70603 15.7689 8.98804L21 11L15.7689 13.012C15.0357 13.294 14.6691 13.435 14.3607 13.6542C14.0874 13.8486 13.8486 14.0874 13.6542 14.3607C13.435 14.6691 13.294 15.0357 13.012 15.7689L11 21L8.98804 15.7689C8.70603 15.0357 8.56503 14.6691 8.34575 14.3607C8.15141 14.0874 7.91262 13.8486 7.63931 13.6542C7.33093 13.435 6.96432 13.294 6.23109 13.012L1 11L6.23108 8.98804C6.96431 8.70603 7.33093 8.56503 7.63931 8.34575C7.91262 8.15141 8.15141 7.91262 8.34575 7.63931C8.56503 7.33093 8.70603 6.96431 8.98804 6.23108L11 1Z" stroke="#F24E29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex size-[68px] shrink-0 items-center justify-center rounded-[34px] bg-[#fdece6]">
      {children}
    </div>
  );
}

import React from "react";

export function HostingWhyItMatters() {
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
            Built to be fast,{" "}
            <span className="text-coral-500">secure and always on</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="flex flex-col gap-6 lg:flex-row">

          {/* Left column */}
          <div className="flex flex-col gap-6 lg:flex-1">

            {/* Quick to load — wide card */}
            <div className="relative overflow-hidden rounded-2xl bg-white p-6">
              <div className="flex gap-7">
                <div className="flex flex-col gap-7">
                  <IconBadge><SpeedIcon /></IconBadge>
                  <div className="flex flex-col gap-4">
                    <h3
                      className="font-fraunces text-[26px] font-bold leading-normal text-[#221c19]"
                      style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                    >
                      Quick to load
                    </h3>
                    <p className="max-w-[439px] font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                      Fast hosting keeps visitors happy and helps you show up in search results.
                    </p>
                  </div>
                </div>
                {/* Browser + rocket loading animation */}
                <div className="ml-auto hidden shrink-0 lg:block" aria-hidden>
                  <BrowserLoadAnimation />
                </div>
              </div>
            </div>

            {/* Bottom two cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

              {/* Secure by default */}
              <div className="flex flex-col justify-center gap-7 rounded-2xl bg-white p-6">
                <IconBadge><SecureIcon /></IconBadge>
                <div className="flex flex-col gap-4">
                  <h3
                    className="font-fraunces text-[26px] font-bold leading-normal text-[#221c19]"
                    style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                  >
                    Secure by default
                  </h3>
                  <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                    Free SSL and automatic backups included with every plan.
                  </p>
                </div>
              </div>

              {/* Simple to manage */}
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
                    Simple to manage
                  </h3>
                  <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                    One friendly dashboard — no server knowledge needed. Ever.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Always on tall card */}
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
                  Always on
                </h3>
                <p className="font-figtree text-[20px] leading-[1.6] text-[#6b5f57]">
                  99.9% uptime, so your site is there whenever someone looks for you.
                </p>
              </div>
            </div>
            {/* Decorative globe visual */}
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
