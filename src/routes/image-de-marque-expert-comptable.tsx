import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import ImageDeMarqueExpertComptable from "@/pages/cabinet/ImageDeMarqueExpertComptable";

export const Route = createFileRoute("/image-de-marque-expert-comptable")({
  head: () => getContentRouteHead("/image-de-marque-expert-comptable"),
  component: ImageDeMarqueExpertComptable,
});
