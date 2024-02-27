import { Card, CardBody, CardHeader, Image, Heading, Tag, Flex, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const RecipeItemCard = ({ item, clickFn }) => {
  const hasHealthLabels = item.healthLabels.filter((label) => {
    return label.toLowerCase().includes("vegetarian") || label.toLowerCase().includes("vegan");
  });

  const hasDietLabels = item.dietLabels.length > 0;
  const hasCautions = item.cautions.length > 0;

  const capitalizeWords = (string) => {
    const words = string.split(" ");

    const capitalizedWords = words.map((word) => {
      return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    });

    return capitalizedWords.join(" ");
  };
  return (
    <Card
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
      onClick={() => clickFn(item)}
      backgroundColor="gray.50"
      width={{ base: "220px", sm: "240px" }}
      height="26rem"
      gap="0.75rem"
      justifyContent="center"
      textAlign="center"
      borderRadius="xl"
      overflow="hidden"
      paddingBottom="2rem">
      <CardHeader padding="0">
        <Image src={item.image} alt={item.label} width="100%" height="150px" />
      </CardHeader>
      <CardBody padding="0 1rem">
        <Text fontSize="0.75rem" textTransform="uppercase" color="grey">
          {item.mealType}
        </Text>
        <Stack>
          <Heading as="h3" fontSize="1.35rem" fontWeight="600">
            {item.label}
          </Heading>

          <Flex gap="10px" justifyContent="center">
            {hasHealthLabels.map((label) => (
              <Tag
                fontSize="0.75rem"
                textTransform="uppercase"
                borderRadius="3px"
                backgroundColor="green.200"
                key={label}>
                {label}
              </Tag>
            ))}
          </Flex>
          <Flex gap="10px" justifyContent="center" flexWrap="wrap">
            {hasDietLabels &&
              item.dietLabels.map((label) => (
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
          <Text fontSize="1rem">
            Dish:{" "}
            <Text as="span" fontStyle="italic">
              {capitalizeWords(item.dishType[0])}
            </Text>
          </Text>
          <Text>Cautions:</Text>
          <Flex gap="10px" justifyContent="center" flexWrap="wrap">
            {hasCautions &&
              item.cautions.map((label) => (
                <Tag
                  fontSize="0.75rem"
                  textTransform="uppercase"
                  borderRadius="3px"
                  backgroundColor="red.300"
                  key={label}>
                  {label}
                </Tag>
              ))}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
