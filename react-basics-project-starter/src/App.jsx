import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { RecipeSearch } from "./components/RecipeSearch";
import { Center, Heading, Stack, Text } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  return (
    <div>
      {selectedRecipe ? (
        <RecipePage clickFn={setSelectedRecipe} item={selectedRecipe} />
      ) : (
        <Text padding="0 1rem 0 1rem" minHeight="100vh" as="div" backgroundColor="blue.300">
          <Stack marginTop="1rem" spacing="1.5rem">
            <Heading textAlign="center" as="h1">
              Sven's recipe app
            </Heading>
            <RecipeSearch clickFn={setSelectedRecipe} />
          </Stack>
        </Text>
      )}
    </div>
  );
};
