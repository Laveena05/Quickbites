import React from "react";

interface InstructionStep {
  number: number;
  step: string;
}

interface InstructionsProps {
  steps: InstructionStep[];
}

const Instructions: React.FC<InstructionsProps> = ({ steps }) => {
  if (!steps || steps.length === 0) return <div>No instructions found.</div>;
  return (
    <ol className="list-decimal pl-6">
      {steps.map((step) => (
        <li key={step.number}>{step.step}</li>
      ))}
    </ol>
  );
};

export default Instructions; 