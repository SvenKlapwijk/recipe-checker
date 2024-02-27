import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";
import { Center, SimpleGrid, Stack } from "@chakra-ui/react";
import { RecipeListPage } from "../pages/RecipeListPage";

export const RecipeSearch = ({ clickFn }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const matchedRecipes = data.hits.filter((hit) => {
    return (
      hit.recipe.label.toLowerCase().includes(searchValue.toLowerCase()) ||
      hit.recipe.healthLabels.some((label) => {
        return label.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  });

  let columns = 4; // Default number of columns
  if (matchedRecipes.length === 1) {
    columns = 1; // If only one item, set columns to 1 for centering
  } else if (matchedRecipes.length === 2 || matchedRecipes.length === 3) {
    columns = matchedRecipes.length; // If 2 or 3 items, set columns to match the number of items
  }

  return (
    <Center flexDirection="column">
      <Stack marginBottom="1rem" spacing="1.5rem">
        <TextInput
          onChange={handleChange}
          variant="filled"
          margin="0 auto"
          size={{ base: "xs", sm: "sm", md: "lg", lg: "lg" }}
          width={{ base: "90%", sm: "sm", md: "lg", lg: "lg" }}
          placeholder="Search recipes"
        />
        <SimpleGrid
          justifyItems="center"
          alignItems="center"
          columns={{ base: 1, sm: 1, md: columns - 1, lg: columns, xl: columns }}
          spacing="2rem">
          <RecipeListPage clickFn={clickFn} recipes={matchedRecipes} />
        </SimpleGrid>
      </Stack>
    </Center>
  );
};
