import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import IcpCabinetExpertiseComptable from "@/pages/blog/IcpCabinetExpertiseComptable";

export const Route = createFileRoute("/blog/icp-cabinet-expertise-comptable")({
  head: () => getContentRouteHead("/blog/icp-cabinet-expertise-comptable"),
  component: IcpCabinetExpertiseComptable,
});
