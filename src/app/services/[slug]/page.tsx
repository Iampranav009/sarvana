import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService, SERVICE_PAGES } from "@/data/servicePages";
import { REAL_PROJECTS } from "@/data/projects";

export function generateStaticParams() { return SERVICE_PAGES.map(({ slug }) => ({ slug })); }
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = getService(slug); if (!service) notFound(); const projects = REAL_PROJECTS.filter((project) => service.projectIds.includes(project.id)); return <ServiceDetail service={service} projects={projects}/>; }
