import React from "react";
import useGames from "../hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = ({ selectedPlatForm,selectedGenre,sortOrders,searchText }) => {
  const { Data, Error, IsLoading } = useGames(selectedGenre,selectedPlatForm,sortOrders,searchText);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if(Error) return <Text>{Error}</Text>

  return (
    <>
      <SimpleGrid
        marginTop={10}
        // padding={10}
        columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
        spacingY={10}
      >
        {IsLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {Data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
