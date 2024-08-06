"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressBar() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1>Progress</h1>
      </div>
      <Progress value={progress} className="w-[75%] bg-primaryy-500" />
    </div>
  );
}
