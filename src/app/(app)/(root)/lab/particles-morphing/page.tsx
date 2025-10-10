import { Metadata } from "next";
import Experience from "./experience";
import ExperimentLayout from "@/components/experiment-layout";

export const metadata: Metadata = {
  title: "Particles morphing (WebGPU)",
  description: "WebGPU particles morphing using TSL",
};

const ExperimentPage = () => {
  return (
    <ExperimentLayout>
      <div className="h-[80vh]">
        <Experience />
      </div>
    </ExperimentLayout>
  );
};

export default ExperimentPage;
