import React from 'react';
import Image from 'next/image';

interface Recipe {
  id: number;
  title: string;
  image: string;
  nutrition?: unknown;
}

interface RecipeCardProps {
  recipe: Recipe;
  onRemove?: () => void;
}

const CARD_WIDTH = 'w-64'; // 256px
const CARD_HEIGHT = 'h-80'; // 320px (reduced)
const IMAGE_HEIGHT = 'h-32'; // 128px (reduced)

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onRemove }) => {
  return (
    <div className={`bg-gradient-to-br from-amber-50 via-lime-50 to-amber-100 rounded-2xl shadow-lg border border-lime-200 flex flex-col items-center p-4 ${CARD_WIDTH} ${CARD_HEIGHT} transition-transform hover:scale-105 hover:shadow-2xl`}>
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={224}
        height={128}
        className={`rounded-xl mb-6 object-cover w-full ${IMAGE_HEIGHT}`}
      />
      <h2 className="text-xl font-bold text-green-800 mb-2 line-clamp-2 min-h-[48px] text-center">{recipe.title}</h2>
      {onRemove && (
        <button className="mt-2 px-4 py-1 rounded-full bg-amber-200 hover:bg-amber-300 text-green-900 font-semibold shadow transition-colors" onClick={onRemove}>
          Remove
        </button>
      )}
    </div>
  );
};

export default RecipeCard; 