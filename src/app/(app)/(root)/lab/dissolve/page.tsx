import { Metadata } from "next";
import Experience from "./experience";

export const metadata: Metadata = {
  title: "Dissolve",
  description: "Dissolve using TSL",
};

const ExperimentPage = () => {
  return (
    <div className="fixed h-[80vh] w-full overflow-hidden">
      <Experience />
    </div>
  );
};

export default ExperimentPage;
