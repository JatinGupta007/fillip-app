"use client";

import ServicePage from "@/components/Services";
import { ServicesData } from "@/components/ServicesData";
import { useParams } from "next/navigation";

export default function TOFUPage() {
  const params = useParams();
  const serviceName = params.serviceName;

  let data = ServicesData.ToFu_Marketing;

  if (serviceName === "ToFu_Marketing") {
    data = {
      ...data,
      hero: {
        ...data.hero,
        headlineBlack: "Skyrocket Your",
        headlineColored: "App Revenue",
        primaryBtn: "Book a Free Call",
        stats: [
          { value: "+200%", label: "Avg. Revenue Lift" },
          { value: "5x", label: "LTV Growth" },
          { value: "-60%", label: "Churn Drop" },
        ],
      },
    };
  } else {
    data = ServicesData[serviceName];
  }

  return <ServicePage data={data} />;
}
