// Social network illustration — positioned elements mirroring the Figma layout
// (container 512×464, all coordinates from Figma node-id 202:1821)

function SocialNetworkIllustration() {
  // Icon center coordinates
  const CENTER = { x: 256.5, y: 237.5 };
  const ICONS = [
    { cx: 113, cy: 89 }, // Instagram
    { cx: 356, cy: 51 }, // X
    { cx: 49, cy: 235 }, // Facebook
    { cx: 466, cy: 238 }, // Google
    { cx: 159, cy: 415 }, // LinkedIn
    { cx: 394, cy: 381 }, // TikTok
  ];
  const DOTS = [
    { cx: 172, cy: 147 },
    { cx: 303, cy: 128 },
    { cx: 359, cy: 231 },
    { cx: 320, cy: 307 },
    { cx: 198, cy: 318 },
    { cx: 142, cy: 232 },
  ];

  // entry delay, float-start delay (after entry finishes ~0.8s)
  const iconAnim = [
    { entry: "0.2s", float: "1.0s" },
    { entry: "0.35s", float: "1.15s" },
    { entry: "0.5s", float: "1.3s" },
    { entry: "0.65s", float: "1.45s" },
    { entry: "0.8s", float: "1.6s" },
    { entry: "0.95s", float: "1.75s" },
  ];
  const dotAnim = [
    { entry: "0.6s", pulse: "1.4s" },
    { entry: "0.75s", pulse: "1.55s" },
    { entry: "0.9s", pulse: "1.7s" },
    { entry: "1.05s", pulse: "1.85s" },
    { entry: "1.2s", pulse: "2.0s" },
    { entry: "1.35s", pulse: "2.15s" },
  ];

  return (
    <div className="relative h-[464px] w-[512px] shrink-0">
      <style>{`
        @keyframes spin-slow    { from { transform: rotate(0deg); }   to { transform: rotate(360deg); } }
        @keyframes spin-rev     { from { transform: rotate(0deg); }   to { transform: rotate(-360deg); } }
        @keyframes ring-entry   { from { opacity: 0; transform: scale(0.7); } to { opacity: 1; transform: scale(1); } }
        @keyframes icon-entry   { from { opacity: 0; transform: translateY(14px) scale(0.8); } to { opacity: 1; transform: translateY(0px) scale(1); } }
        @keyframes icon-float   { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }
        @keyframes dot-entry    { from { opacity: 0; transform: scale(0); } to { opacity: 0.45; transform: scale(1); } }
        @keyframes dot-pulse    { 0%,100% { opacity: 0.45; } 50% { opacity: 0.9; } }
        @keyframes center-entry { from { opacity: 0; transform: scale(0.6); } to { opacity: 1; transform: scale(1); } }
        @keyframes center-pulse { 0%,100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(242,78,41,0); }
                                   50% { transform: scale(1.04); box-shadow: 0 0 0 12px rgba(242,78,41,0.12); } }
        @keyframes lines-entry  { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      {/* SVG: rings + connection lines + dots */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width="512"
        height="464"
        viewBox="0 0 512 464"
        fill="none"
        aria-hidden
      >
        {/* Concentric rings — entry fade+scale then continuous spin */}
        <g
          style={{
            transformOrigin: "256px 230px",
            animation:
              "ring-entry 0.7s ease-out 0.1s both, spin-slow 18s linear 0.8s infinite",
          }}
        >
          <circle
            cx="256"
            cy="230"
            r="210"
            stroke="#f24e29"
            strokeWidth="1"
            strokeOpacity="0.12"
            strokeDasharray="4 7"
          />
        </g>
        <g
          style={{
            transformOrigin: "256px 230px",
            animation:
              "ring-entry 0.7s ease-out 0.2s both, spin-rev 13s linear 0.9s infinite",
          }}
        >
          <circle
            cx="256"
            cy="230"
            r="164"
            stroke="#f24e29"
            strokeWidth="1"
            strokeOpacity="0.18"
            strokeDasharray="4 6"
          />
        </g>
        <g
          style={{
            transformOrigin: "256px 230px",
            animation:
              "ring-entry 0.7s ease-out 0.3s both, spin-slow 9s linear 1.0s infinite",
          }}
        >
          <circle
            cx="256"
            cy="230"
            r="109.5"
            stroke="#f24e29"
            strokeWidth="1"
            strokeOpacity="0.22"
            strokeDasharray="4 5"
          />
        </g>

        {/* Connection lines */}
        {ICONS.map((icon, i) => (
          <line
            key={i}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={icon.cx}
            y2={icon.cy}
            stroke="#f24e29"
            strokeWidth="1"
            strokeOpacity="0.25"
            strokeDasharray="4 5"
          />
        ))}

        {/* Dot nodes on lines — entry then pulse */}
        {DOTS.map((d, i) => (
          <circle
            key={i}
            cx={d.cx}
            cy={d.cy}
            r="7"
            fill="#ef9981"
            fillOpacity="0.45"
            style={{
              animation: `dot-entry 0.5s ease-out ${dotAnim[i].entry} both, dot-pulse 2.4s ease-in-out ${dotAnim[i].pulse} infinite`,
            }}
          />
        ))}
      </svg>

      {/* Center icon — entry then pulse */}
      <div
        className="absolute flex items-center justify-center rounded-[59.5px]"
        style={{
          left: 197,
          top: 178,
          width: 119,
          height: 119,
          background: "rgba(239,153,129,0.3)",
          animation:
            "center-entry 0.6s ease-out 0.1s both, center-pulse 3s ease-in-out 0.7s infinite",
        }}
      >
        <div
          className="flex items-center justify-center rounded-[51.5px]"
          style={{ width: 103, height: 103, background: "#f24e29" }}
        >
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
            <circle cx="12" cy="12" r="5" fill="white" />
            <circle cx="34" cy="34" r="5" fill="white" />
            <circle cx="34" cy="12" r="4" fill="white" fillOpacity="0.7" />
            <line
              x1="12"
              y1="12"
              x2="34"
              y2="34"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="12"
              y1="12"
              x2="34"
              y2="12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeOpacity="0.7"
            />
          </svg>
        </div>
      </div>

      {/* Instagram */}
      <div
        className="absolute flex items-center justify-center rounded-[43px]"
        style={{
          left: 70,
          top: 46,
          width: 86,
          height: 86,
          background: "rgba(239,153,129,0.3)",
          animation: `icon-entry 0.6s ease-out ${iconAnim[0].entry} both, icon-float 3.5s ease-in-out ${iconAnim[0].float} infinite`,
        }}
      >
        <div
          className="flex items-center justify-center rounded-[37px]"
          style={{ width: 74, height: 74, background: "#e10202" }}
        >
          <svg viewBox="0 0 24 24" fill="white" width="30" height="30">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </div>
      </div>

      {/* X / Twitter */}
      <div
        className="absolute flex items-center justify-center rounded-[41px]"
        style={{
          left: 315,
          top: 10,
          width: 82,
          height: 82,
          background: "rgba(35,11,4,0.3)",
          animation: `icon-entry 0.6s ease-out ${iconAnim[1].entry} both, icon-float 3.5s ease-in-out ${iconAnim[1].float} infinite`,
        }}
      >
        <div
          className="flex items-center justify-center rounded-[35px]"
          style={{ width: 71, height: 71, background: "#2e0d05" }}
        >
          <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
          </svg>
        </div>
      </div>

      {/* Facebook */}
      <div
        className="absolute flex items-center justify-center rounded-[56px]"
        style={{
          left: 6,
          top: 192,
          width: 86,
          height: 86,
          background: "rgba(24,119,242,0.1)",
          animation: `icon-entry 0.6s ease-out ${iconAnim[2].entry} both, icon-float 3.5s ease-in-out ${iconAnim[2].float} infinite`,
        }}
      >
        <div
          className="flex items-center justify-center rounded-[56px]"
          style={{ width: 65, height: 66, background: "#1877f2" }}
        >
          <span
            className="font-bold text-white"
            style={{
              fontSize: 34,
              fontFamily: "Inter, sans-serif",
              lineHeight: 1,
            }}
          >
            f
          </span>
        </div>
      </div>

      {/* Google */}
      <div
        className="absolute flex items-center justify-center rounded-[46px]"
        style={{
          left: 420,
          top: 192,
          width: 92,
          height: 92,
          background: "rgba(235,228,218,0.6)",
          animation: `icon-entry 0.6s ease-out ${iconAnim[3].entry} both, icon-float 3.5s ease-in-out ${iconAnim[3].float} infinite`,
        }}
      >
        <div
          className="flex items-center justify-center rounded-[40px]"
          style={{ width: 80, height: 80, background: "#faf6ef" }}
        >
          <svg viewBox="0 0 24 24" width="36" height="36">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        </div>
      </div>

      {/* LinkedIn */}
      <div
        className="absolute flex items-center justify-center rounded-[112px]"
        style={{
          left: 116,
          top: 372,
          width: 86,
          height: 86,
          background: "rgba(10,102,194,0.1)",
          animation: `icon-entry 0.6s ease-out ${iconAnim[4].entry} both, icon-float 3.5s ease-in-out ${iconAnim[4].float} infinite`,
        }}
      >
        <div
          className="flex items-center justify-center rounded-[47px]"
          style={{ width: 69, height: 69, background: "#0a66c2" }}
        >
          <span
            className="font-bold text-white"
            style={{
              fontSize: 28,
              fontFamily: "Inter, sans-serif",
              lineHeight: 1,
            }}
          >
            in
          </span>
        </div>
      </div>

      {/* TikTok */}
      <div
        className="absolute flex items-center justify-center rounded-[42px]"
        style={{
          left: 352,
          top: 339,
          width: 84,
          height: 84,
          background: "rgba(206,206,206,0.3)",
          animation: `icon-entry 0.6s ease-out ${iconAnim[5].entry} both, icon-float 3.5s ease-in-out ${iconAnim[5].float} infinite`,
        }}
      >
        <div
          className="flex items-center justify-center rounded-[64px]"
          style={{ width: 73, height: 73, background: "#e3e2e1" }}
        >
          <svg viewBox="0 0 24 24" fill="#221c19" width="28" height="28">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FeaturePill({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex h-[45px] items-center gap-[10px] rounded-[30px] border border-coral-50 bg-white py-[3px] pl-[3px] pr-[22px]">
      <div className="flex h-[39px] w-[40px] items-center justify-center rounded-[30px] bg-coral-500/10">
        {icon}
      </div>
      <span className="whitespace-nowrap font-figtree text-[12px] text-[#221c19]">
        {label}
      </span>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f24e29"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f24e29"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f24e29"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </svg>
  );
}

import { Badge } from "@/components/shared/Badge";
import Bounded from "@/components/shared/Bounded";
import React from "react";

export function WhyItMatters() {
  return (
    <section className="bg-white w-full relative overflow-hidden">
      <Bounded as="div">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <Badge text="Why it matters" className="w-fit" />

            <h2
              className="font-fraunces font-bold text-[#221C19] leading-12 md:leading-13 text-4xl sm:text-5xl lg:text-[48px] tracking-normal lg:max-w-137"
              style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
            >
              <span className="text-coral-500">One name, everywhere</span>{" "}
              people look
            </h2>

            <p className="max-w-165 font-figtree text-[19px] leading-7 text-[#6b5f57]">
              Customers should find you whether they type your web address or
              search for you on social. Picking a name that&apos;s free across
              all of them from day one saves a world of confusion later.
            </p>

            <div className="flex flex-wrap gap-4">
              <FeaturePill icon={<ShieldIcon />} label="Free Privacy" />
              <FeaturePill icon={<LightningIcon />} label="Easy to Manage" />
              <FeaturePill
                icon={<GlobeIcon />}
                label="Connects to everything"
              />
            </div>
          </div>

          {/* Right: illustration */}
          <div className="hidden md:block">
            <SocialNetworkIllustration />
          </div>
        </div>
      </Bounded>
    </section>
  );
}
