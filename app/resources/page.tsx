import type { Metadata } from "next";
import Link from "next/link";
import { ResourceBrowser } from "@/components/resource-browser";

export const metadata: Metadata = {
  title: "Triangle Disability Resources | Uniquely You! Raleigh Metro",
  description:
    "Local disability resources, services, and support across Wake, Durham, Orange, Johnston, and Chatham counties in NC's Triangle region.",
};

const CATEGORIES = [
  {
    title: "Therapy & Clinical Services",
    icon: "🏥",
    resources: [
      {
        name: "Alliance Health",
        description: "Managed care organization for mental health, substance use, and intellectual/developmental disability services across Wake, Durham, Johnston, and Cumberland counties.",
        url: "https://www.alliancehealthplan.org",
      },
      {
        name: "Autism Society of NC",
        description: "State chapter providing support services, advocacy, and resources for individuals with autism and their families. Triangle office in Raleigh.",
        url: "https://www.autismsociety-nc.org",
      },
      {
        name: "Carolina Therapy Connection",
        description: "Pediatric therapy clinic offering speech, occupational, and physical therapy in the Triangle area.",
      },
      {
        name: "UNC TEACCH Autism Program",
        description: "UNC-based program providing clinical services, training, and research for individuals with autism across NC. Centers in Chapel Hill and Durham.",
        url: "https://teacch.com",
      },
      {
        name: "Tammy Lynn Center",
        description: "Raleigh-based residential and day program for children and adults with severe developmental disabilities.",
        url: "https://www.tammylynncenter.org",
      },
    ],
  },
  {
    title: "Education & Youth Programs",
    icon: "📚",
    resources: [
      {
        name: "Exceptional Children's Assistance Center (ECAC)",
        description: "NC's Parent Training and Information Center helping families of children with disabilities navigate education and services.",
        url: "https://www.ecac-parentcenter.org",
      },
      {
        name: "Wake County Exceptional Children's Programs",
        description: "Special education services through Wake County Public Schools serving students with disabilities.",
      },
      {
        name: "Durham Public Schools Exceptional Children",
        description: "Durham County special education programs and Individualized Education Program (IEP) support.",
      },
      {
        name: "Camp Royall",
        description: "Year-round camp near Pittsboro (Chatham County) for individuals with autism, run by the Autism Society of NC.",
        url: "https://www.autismsociety-nc.org/camp-royall",
      },
      {
        name: "Triangle Down Syndrome Network",
        description: "Local support network for families in the Triangle, offering playgroups, educational workshops, and community events.",
      },
    ],
  },
  {
    title: "Employment & Adult Services",
    icon: "💼",
    resources: [
      {
        name: "NC Division of Vocational Rehabilitation",
        description: "State program helping people with disabilities prepare for, find, and keep jobs. Offices in Raleigh and Durham.",
        url: "https://www.ncdhhs.gov/divisions/dvrs",
      },
      {
        name: "Lifespan",
        description: "Raleigh-based nonprofit providing residential, vocational, and community services for adults with developmental disabilities.",
        url: "https://lifespan-services.org",
      },
      {
        name: "The Arc of the Triangle",
        description: "Local chapter advocating for people with intellectual and developmental disabilities. Programs, events, and family support.",
        url: "https://www.arctriangle.org",
      },
      {
        name: "Goodwill Industries of Eastern NC",
        description: "Job training, employment placement, and community programs for individuals with disabilities and other barriers to employment.",
      },
    ],
  },
  {
    title: "Recreation & Sensory-Friendly Spaces",
    icon: "🎉",
    resources: [
      {
        name: "Marbles Kids Museum — Sensory Hours",
        description: "Downtown Raleigh children's museum offering designated sensory-friendly hours with reduced stimulation.",
        url: "https://www.marbleskidsmuseum.org",
      },
      {
        name: "NC Museum of Life and Science",
        description: "Durham science museum with outdoor nature trails, accessible exhibits, and sensory-friendly events.",
        url: "https://www.lifeandscience.org",
      },
      {
        name: "Pullen Park Accessibility",
        description: "Raleigh's historic park with accessible playground equipment, train rides, and pedal boats.",
      },
      {
        name: "Special Olympics NC — Triangle Region",
        description: "Year-round sports training and athletic competition for children and adults with intellectual disabilities.",
        url: "https://www.sonc.net",
      },
      {
        name: "Miracle League of the Triangle",
        description: "Adaptive baseball league with a custom rubberized field designed for children and adults with disabilities.",
        url: "https://www.miracleleagueofthetriangle.com",
      },
    ],
  },
  {
    title: "Advocacy & Support Organizations",
    icon: "🤝",
    resources: [
      {
        name: "Disability Rights NC",
        description: "Statewide nonprofit providing free legal services to people with disabilities. Helps with discrimination, access, and benefits.",
        url: "https://www.disabilityrightsnc.org",
      },
      {
        name: "Family Support Network of NC",
        description: "Peer support for families of children with special needs. Local chapters across the Triangle.",
        url: "https://www.fsnnc.org",
      },
      {
        name: "NAMI Wake County",
        description: "National Alliance on Mental Illness local chapter offering support groups, education, and advocacy.",
        url: "https://namiwakecounty.org",
      },
      {
        name: "NC Council on Developmental Disabilities",
        description: "State agency promoting independence, productivity, and inclusion for people with developmental disabilities.",
        url: "https://nccdd.org",
      },
    ],
  },
  {
    title: "Transportation & Mobility",
    icon: "🚐",
    resources: [
      {
        name: "GoRaleigh Access",
        description: "ADA paratransit service for Raleigh residents who cannot use fixed-route buses due to a disability.",
      },
      {
        name: "GoDurham ACCESS",
        description: "Door-to-door paratransit service for Durham County residents with disabilities.",
      },
      {
        name: "Orange County Public Transportation",
        description: "Demand-response transit service available to Orange County residents including those with disabilities.",
      },
      {
        name: "Johnston County Area Transit (JCATS)",
        description: "Public transportation for Johnston County, including medical appointment transportation for residents with disabilities.",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="relative z-10 mx-auto flex min-h-screen max-w-2xl flex-col gap-6 px-4 pb-8 pt-14 sm:pt-20">
      <div className="text-center">
        <Link
          href="/"
          className="inline-block font-display text-2xl text-brand-gradient sm:text-3xl"
        >
          Uniquely You!
        </Link>
      </div>

      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
          Triangle Disability Resources
        </h1>
        <p className="text-base text-muted-foreground">
          Local services, programs, and organizations across Wake, Durham,
          Orange, Johnston, and Chatham counties.
        </p>
      </div>

      <div className="rounded-2xl border-2 border-accent/50 bg-accent/10 p-4 text-center text-sm text-accent-foreground">
        Know a resource that should be listed here?{" "}
        <a
          href="mailto:will.sigmon@n2co.com?subject=Resource%20suggestion%20for%20UY%20Raleigh%20Metro"
          className="font-semibold underline"
        >
          Let us know
        </a>
      </div>

      <ResourceBrowser categories={CATEGORIES} />

      <div className="mt-4 flex flex-col items-center gap-4 border-t-2 border-border/50 pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          This list is maintained by Uniquely You! Raleigh Metro and is not
          exhaustive. Always verify services directly with providers.
        </p>
        <Link
          href="/"
          className="rounded-xl bg-primary px-6 py-2.5 font-semibold text-primary-foreground transition-all hover:brightness-110"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
