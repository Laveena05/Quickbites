"use client";

import React, { createContext, useContext, useState } from 'react';

// Define a minimal Recipe type
interface Recipe {
  id: number;
  title: string;
  image: string;
  nutrition?: unknown;
}

interface PlanContextType {
  plan: Recipe[];
  setPlan: React.Dispatch<React.SetStateAction<Recipe[]>>;
  removeFromPlan: (id: number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) throw new Error('usePlan must be used within a PlanProvider');
  return context;
};

export const PlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<Recipe[]>([]);
  const removeFromPlan = (id: number) => setPlan((prev) => prev.filter((r) => r.id !== id));
  return (
    <PlanContext.Provider value={{ plan, setPlan, removeFromPlan }}>
      {children}
    </PlanContext.Provider>
  );
}; 