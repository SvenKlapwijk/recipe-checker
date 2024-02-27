import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";
import { Center, SimpleGrid, Stack, Flex } from "@chakra-ui/react";
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

  return (
    <Center padding="0" flexDirection="column">
      <Stack marginBottom="0.75rem" spacing="1.5rem">
        <TextInput
          onChange={handleChange}
          variant="filled"
          margin="0 auto"
          size={{ base: "md", sm: "md", md: "lg", lg: "lg" }}
          width={{ base: "15rem", sm: "25rem", md: "lg", lg: "lg" }}
          placeholder="Search recipes"
        />
        <Flex maxWidth="1300px" justifyContent="center" alignItems="center" gap="2rem" flexWrap="wrap">
          <RecipeListPage clickFn={clickFn} recipes={matchedRecipes} />
        </Flex>
      </Stack>
    </Center>
  );
};
