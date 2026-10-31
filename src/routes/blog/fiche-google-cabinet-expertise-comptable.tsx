import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import FicheGoogleCabinetComptable from "@/pages/blog/FicheGoogleCabinetComptable";

export const Route = createFileRoute("/blog/fiche-google-cabinet-expertise-comptable")({
  head: () => getContentRouteHead("/blog/fiche-google-cabinet-expertise-comptable"),
  component: FicheGoogleCabinetComptable,
});
