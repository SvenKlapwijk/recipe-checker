import { Heading, Center, Container, Flex, Box, Image, Button, SimpleGrid, Text, Stack, Tag } from "@chakra-ui/react";

export const RecipePage = ({ item, clickFn }) => {
  const hasDietLabels = item.dietLabels.length > 0;
  const hasCautionLabels = item.cautions.length > 0;
  return (
    <Flex padding="1rem" minHeight="100vh" alignItems="center" flexDirection="column" backgroundColor="blue.300">
      <Container
        borderRadius="2xl"
        overflow="hidden"
        padding="0"
        minHeight="100vh"
        bg="gray.100"
        minWidth={{ lg: "800px" }}
        maxWidth="800px">
        <Image width="100%" height="300px" src={item.image}></Image>
        <SimpleGrid spacing="3rem" padding={{ base: "1rem", sm: "1.5rem" }} columns={{ base: 1, md: 2 }}>
          <Flex flexDirection="column">
            <Stack spacing="0.5rem">
              <Text fontSize="0.85rem" textTransform="uppercase" color="gray.500">
                {item.mealType}
              </Text>
              <Heading as="h1" fontSize="1.25rem">
                {item.label}
              </Heading>
              <Box>
                <Text>
                  Dish type:{" "}
                  <Text fontWeight="500" as="span">
                    {item.dishType}
                  </Text>
                </Text>
                <Text>
                  Total cooking time:{" "}
                  <Text fontWeight="500" as="span">
                    {item.totalTime} Minutes
                  </Text>
                </Text>
                <Text>
                  Servings:{" "}
                  <Text fontWeight="500" as="span">
                    {item.yield} portions
                  </Text>
                </Text>
              </Box>
              <Text fontWeight="500" fontSize="1.1rem">
                Ingredients:
              </Text>
              {item.ingredientLines.map((ingredient) => (
                <Text key={ingredient}>{ingredient}</Text>
              ))}
            </Stack>
          </Flex>
          <Flex flexDirection="column">
            <Stack spacing="0.5rem">
              <Text fontWeight="500" fontSize="1rem">
                HealthLabels
              </Text>
              <Flex gap="10px" flexWrap="wrap">
                {item.healthLabels.map((label) => (
                  <Tag
                    fontSize="0.75rem"
                    textTransform="uppercase"
                    borderRadius="3px"
                    backgroundColor="purple.200"
                    key={label}>
                    {label}
                  </Tag>
                ))}
              </Flex>
              <Text fontWeight="500" fontSize="1rem">
                Diet:
              </Text>

              <Flex gap="10px" flexWrap="wrap">
                {hasDietLabels ? (
                  item.dietLabels.map((label) => (
                    <Tag
                      fontSize="0.75rem"
                      textTransform="uppercase"
                      borderRadius="3px"
                      backgroundColor="green.200"
                      key={label}>
                      {label}
                    </Tag>
                  ))
                ) : (
                  <Tag>No specific diet found</Tag>
                )}
              </Flex>
              <Text fontWeight="500" fontSize="1rem">
                Cautions:
              </Text>
              <Flex gap="10px" flexWrap="wrap">
                {hasCautionLabels ? (
                  item.cautions.map((label) => (
                    <Tag
                      fontSize="0.75rem"
                      textTransform="uppercase"
                      borderRadius="3px"
                      backgroundColor="red.300"
                      key={label}>
                      {label}
                    </Tag>
                  ))
                ) : (
                  <Tag>No cautions found</Tag>
                )}
              </Flex>
              <Text fontWeight="500" fontSize="1rem">
                Total Nutrients:
              </Text>
              <SimpleGrid column columns={4} columnGap="0.5rem" rowGap="1rem">
                <Box>
                  <Text fontWeight="500" fontSize="0.75rem">
                    {Math.round(item.calories)}
                  </Text>
                  <Text fontWeight="500" fontSize="0.7rem">
                    CALORIES
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="500" fontSize="0.75rem">
                    {Math.round(item.totalNutrients.CHOCDF.quantity)}
                  </Text>
                  <Text fontWeight="500" fontSize="0.7rem">
                    CARBS
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="500" fontSize="0.75rem">
                    {Math.round(item.totalNutrients.PROCNT.quantity)}
                  </Text>
                  <Text fontWeight="500" fontSize="0.7rem">
                    PROTEIN
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="500" fontSize="0.75rem">
                    {Math.round(item.totalNutrients.FAT.quantity)}
                  </Text>
                  <Text fontWeight="500" fontSize="0.7rem">
                    FAT
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="500" fontSize="0.75rem">
                    {Math.round(item.totalNutrients.CHOLE.quantity)}
                  </Text>
                  <Text fontWeight="500" fontSize="0.7rem">
                    CHOLESTEROL
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="500" fontSize="0.75rem">
                    {Math.round(item.totalNutrients.NA.quantity)}
                  </Text>
                  <Text fontWeight="500" fontSize="0.7rem">
                    SODIUM
                  </Text>
                </Box>
              </SimpleGrid>
            </Stack>
          </Flex>
        </SimpleGrid>
        <Center padding="0 0 1.5rem 0">
          <Button width="50%" onClick={() => clickFn()} variant="solid" bg="red.400">
            Back to homepage
          </Button>
        </Center>
      </Container>
    </Flex>
  );
};
