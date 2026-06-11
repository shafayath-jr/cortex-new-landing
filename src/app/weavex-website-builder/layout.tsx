import { Navbar } from "@/components/shared/Navbar";
import { PageFooter } from "@/components/pages/WeavexBuilder/PageFooter";

export default function WeavexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#fef8f6]">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <PageFooter />
    </div>
  );
}
