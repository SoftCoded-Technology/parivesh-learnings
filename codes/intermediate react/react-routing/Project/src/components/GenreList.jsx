import React from "react";
import useGenres from "../hooks/useGenere";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";

const GenreList = ({ selectedGenre, onSelectGenre }) => {
  const { Data, IsLoading } = useGenres();
  return (
    <>
      <Heading fontSize={"4xl"} marginBottom={3} fontWeight={"bold"} textAlign={"center"}>
        Genres
      </Heading>
      {IsLoading ? (
        <VStack
          height={"70%"}
          w={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner
            thickness="3px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </VStack>
      ) : null}
      <List>
        {Data.map((genre) => {
          return (
            <ListItem
              onClick={() => onSelectGenre(genre)}
              cursor={"pointer"}
              w={"100%"}
              _hover={{ bg: "gray.900" }}
              py={"5px"}
              key={genre.id}
              minW={"max-content"}
            >
              <HStack>
                <Image
                  borderRadius={8}
                  src={genre.image_background}
                  boxSize={"32px"}
                  objectFit={"cover"}
                />
                <Button
                  fontWeight={
                    selectedGenre?.id === genre.id ? "bold" : "normal"
                  }
                  color={selectedGenre?.id === genre.id ? "white" : "gray.200"}
                  whiteSpace={"normal"}
                  variant="link"
                  fontSize={"lg"}
                  textAlign={"left"}

                >
                 {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
