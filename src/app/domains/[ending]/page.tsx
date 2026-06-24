import { EndingDetailHero } from "@/components/pages/Domains/EndingDetail/EndingDetailHero";
import { EndingDetailBody } from "@/components/pages/Domains/EndingDetail/EndingDetailBody";
import { getDomainEnding, getAllEndingSlugs } from "@/lib/domain-endings";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ ending: string }>;
}

export async function generateStaticParams() {
  return getAllEndingSlugs().map((slug) => ({ ending: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ending: slug } = await params;
  const ending = getDomainEnding(slug);
  if (!ending) return {};

  return {
    title: `${ending.ext} Domains — CortexGrip`,
    description: ending.description,
  };
}

export default async function DomainEndingPage({ params }: Props) {
  const { ending: slug } = await params;
  const ending = getDomainEnding(slug);

  if (!ending) notFound();

  return (
    <>
      <EndingDetailHero ending={ending} />
      <EndingDetailBody ending={ending} />
    </>
  );
}
