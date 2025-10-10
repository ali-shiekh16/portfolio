import ExperimentLayout from "@/components/experiment-layout";
import { Metadata } from "next";
import Experience from "./experience";

export const metadata: Metadata = {
  title: "Particles black hole",
  description: "Particles black hole using TSL",
};

const ExperimentPage = () => {
  return (
    <ExperimentLayout>
      <div className="h-screen">
        <Experience />
      </div>
    </ExperimentLayout>
  );
};

export default ExperimentPage;
