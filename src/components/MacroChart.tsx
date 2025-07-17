import React from "react";

interface MacroChartProps {
  kcal: number;
  protein: number;
  carbs: number;
}

const MacroChart: React.FC<MacroChartProps> = ({ kcal, protein, carbs }) => {
  // Placeholder: Replace with a real chart library (e.g., recharts, chart.js) for production
  return (
    <div className="w-full max-w-xs mx-auto">
      <h3 className="text-lg font-semibold mb-2">Nutrition Macros</h3>
      <div className="space-y-2">
        <div>
          <span className="font-medium">Calories:</span> {kcal} kcal
          <div className="bg-blue-200 h-2 rounded" style={{ width: `${Math.min(kcal / 5, 100)}%` }} />
        </div>
        <div>
          <span className="font-medium">Protein:</span> {protein} g
          <div className="bg-green-200 h-2 rounded" style={{ width: `${Math.min(protein * 2, 100)}%` }} />
        </div>
        <div>
          <span className="font-medium">Carbs:</span> {carbs} g
          <div className="bg-yellow-200 h-2 rounded" style={{ width: `${Math.min(carbs * 2, 100)}%` }} />
        </div>
      </div>
    </div>
  );
};

export default MacroChart; 