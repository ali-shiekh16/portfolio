"use client";

import Link from "next/link";
import { PropsWithChildren, Suspense } from "react";

type Props = PropsWithChildren & {
  sourceLink?: string;
  webglVersion?: string;
  webgpuVersion?: string;
};

const ExperimentLayout = ({
  children,
  sourceLink,
  webglVersion,
  webgpuVersion,
}: Props) => {
  return (
    <div className="experiment-page experiment">
      <div className="wrapper experiment__top pointer-events-none">
        <Link href="/lab" className="pointer-events-auto link">
          Back
        </Link>
      </div>
      <Suspense
        fallback={
          <div className="experiment-error">
            <div>Seems that this experiment is broken.</div>
            <div>
              See{" "}
              <Link href="/lab" className="link--underlined link">
                other experiments
              </Link>
            </div>
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
};

export default ExperimentLayout;
