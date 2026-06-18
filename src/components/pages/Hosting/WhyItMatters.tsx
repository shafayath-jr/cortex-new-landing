import { WhyItMattersSection } from "@/components/shared/WhyItMattersSection";

export function HostingWhyItMatters() {
  return (
    <WhyItMattersSection
      title={
        <>
          Built to be fast,{" "}
          <span className="text-coral-500">secure and always on</span>
        </>
      }
      card1Title="Quick to load"
      card1Description="Fast hosting keeps visitors happy and helps you show up in search results."
      card2Title="Secure by default"
      card2Description="Free SSL and automatic backups included with every plan."
      card3Title="Simple to manage"
      card3Description="One friendly dashboard — no server knowledge needed. Ever."
      card4Title="Always on"
      card4Description="99.9% uptime, so your site is there whenever someone looks for you."
    />
  );
}
