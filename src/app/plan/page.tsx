"use client";
import { usePlan } from '../../contexts/PlanContext';
import RecipeCard from '../../components/RecipeCard';

export default function PlanPage() {
  const { plan, removeFromPlan } = usePlan();
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6 text-green-700 text-center">Your Diet Plan</h1>
      {plan.length === 0 ? (
        <p className="text-center">No recipes added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {plan.map((recipe: any) => (
            <RecipeCard key={recipe.id} recipe={recipe} onRemove={() => removeFromPlan(recipe.id)} />
          ))}
        </div>
      )}
    </section>
  );
} 