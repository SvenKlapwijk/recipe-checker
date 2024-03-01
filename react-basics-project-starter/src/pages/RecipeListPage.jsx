import { data } from "../utils/data";
import { RecipeItemCard } from "../components/RecipeItemCard";

export const RecipeListPage = ({ recipes, clickFn }) => {
  return (
    <>
      {recipes.map((hit) => (
        <RecipeItemCard clickFn={clickFn} key={hit.recipe.label} item={hit.recipe} />
      ))}
    </>
  );
};
