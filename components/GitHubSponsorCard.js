import React from "react";
import {
  Box,
  useColorMode,
  Text,
  Heading,
  Image,
  Flex,
} from "@chakra-ui/react";

const GitHubSponsorCard = () => {
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: "gray.600",
    dark: "gray.400",
  };
  return (
    <Box
      w="100%"
      p={5}
      my={4}
      border="1px solid"
      borderColor="lightgray"
      borderRadius={5}
      h="100%"
    >
      <Flex>
        <Image
          w="75px"
          h="75px"
          borderRadius={5}
          src="/images/portrait.jpeg"
        ></Image>
        <Flex flexDirection={["column", "row"]}>
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection="column"
            mx={2}
          >
            <Heading as="h3" size="md">
              Sponsor Your Name Here on GitHub Sponsors
            </Heading>
            <Text color={colorSecondary[colorMode]}>
              Hi 👋 I'm Your Name Here, a senior college student studying
              computer science. I post weekly tutorial videos on my YouTube
              channel and build cool open source projects!
            </Text>
          </Flex>
          <Flex mt={[2, 0, 0]}>
            <iframe
              src="https://github.com/sponsors/coding-to-music/button"
              title="Sponsor coding-to-music"
              height="35"
              width="116"
              style={{ border: "0" }}
            ></iframe>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default GitHubSponsorCard;
