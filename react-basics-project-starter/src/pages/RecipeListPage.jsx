import { data } from "../utils/data";
import { RecipeItemCard } from "../components/RecipeItemCard";

export const RecipeListPage = ({ recipes, clickFn }) => {
  console.log(recipes[0]);
  console.log(data.hits[0]);
  return (
    <>
      {recipes.map((hit) => (
        <RecipeItemCard clickFn={clickFn} key={hit.recipe.label} item={hit.recipe} />
      ))}
    </>
  );
};
