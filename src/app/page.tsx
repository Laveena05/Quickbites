import { fetchFromSpoonacular } from '../lib/spoonacular';
import HeroCarousel from '../components/HeroCarousel';
import FeaturedRecipesCarousel from '../components/FeaturedRecipesCarousel';
import TestimonySlides from '../components/TestimonySlides';

export const revalidate = 600;

const foodQuotes = [
  '"One cannot think well, love well, sleep well, if one has not dined well." – Virginia Woolf',
  '"Cooking is like love. It should be entered into with abandon or not at all." – Harriet Van Horne',
  '"People who love to eat are always the best people." – Julia Child',
  '"Food is symbolic of love when words are inadequate." – Alan D. Wolfelt',
  '"The secret of success in life is to eat what you like and let the food fight it out inside." – Mark Twain',
];

const testimonials = [
  {
    name: 'Priya S.',
    text: 'QuickBite made meal planning so easy and fun! The recipes are delicious and healthy.',
  },
  {
    name: 'Rahul M.',
    text: 'I love the variety of recipes and the simple instructions. Highly recommended!',
  },
  {
    name: 'Anjali K.',
    text: 'The earthy theme and smooth experience make this my go-to recipe app.',
  },
];

// Define a minimal Recipe type for the featured recipes
interface Recipe {
  id: number;
  title: string;
  image: string;
  nutrition?: unknown;
}

export default async function Home() {
  const data = await fetchFromSpoonacular('recipes/complexSearch', {
    sort: 'popularity',
    number: 9,
    addRecipeNutrition: 'true',
  });
  const recipes: Recipe[] = data?.results || [];

  return (
    <div className="earthy-bg min-h-screen">
      <section className="py-10">
        <HeroCarousel quotes={foodQuotes} />
      </section>
      <section className="py-10 max-w-5xl mx-auto">
        <FeaturedRecipesCarousel recipes={recipes} />
      </section>
      <TestimonySlides testimonials={testimonials} />
    </div>
  );
}
