import { WhyItMattersSection } from "@/components/shared/WhyItMattersSection";

export function EmailWhyItMatters() {
  return (
    <WhyItMattersSection
      title="Look professional from the very first email"
      card1Title="Look the part"
      card1Description={
        <>
          <strong className="font-bold text-[#221c19]">
            you@yourbusiness.com
          </strong>{" "}
          beats a generic free address every time.
        </>
      }
      card2Title="Reliable and secure"
      card2Description="Spam filtering and strong security built in to every plan."
      card3Title="Matches your domain"
      card3Description="Your email address matches your website — consistent across everything."
      card4Title="Works with what you know"
      card4Description="Use it on your phone, in Outlook, Gmail or in your browser."
    />
  );
}
