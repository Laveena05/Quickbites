import React from "react";

interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

interface IngredientsListProps {
  ingredients: Ingredient[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  if (!ingredients || ingredients.length === 0) return <div>No ingredients found.</div>;
  return (
    <ul className="list-disc pl-6">
      {ingredients.map((ing) => (
        <li key={ing.id}>
          {ing.amount} {ing.unit} {ing.name}
        </li>
      ))}
    </ul>
  );
};

export default IngredientsList; 