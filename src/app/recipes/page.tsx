import { fetchFromSpoonacular } from '../../lib/spoonacular';
import RecipeCard from '../../components/RecipeCard';
import SearchBox from '../../components/SearchBox';

export const revalidate = 600;

type Recipe = {
  id: number;
  title: string;
  image: string;
  // add other fields as needed
};

export default async function RecipesPage({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams?.query || '';
  const data = await fetchFromSpoonacular('recipes/complexSearch', {
    query,
    number: 20,
    addRecipeNutrition: 'true',
  });
  const recipes = data?.results || [];

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">All Recipes</h1>
      <SearchBox />
      {recipes.length === 0 ? (
        <div className="text-center text-gray-500">No recipes found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((Recipe: Recipe) => (
            <RecipeCard key={Recipe.id} recipe={Recipe} />
          ))}
        </div>
      )}
    </section>
  );
} 