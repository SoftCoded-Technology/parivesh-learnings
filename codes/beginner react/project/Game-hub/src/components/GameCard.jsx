import { Card, CardBody, Image, Heading, Text, HStack } from "@chakra-ui/react";
import React from "react";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import GetCroppedImageUrl from "../sevices/image-url";

const GameCard = ({ game }) => {

  return (
    <>
      <Card
        h={"400px"}
        w={"90%"}
        margin={"auto"}
        borderRadius={10}
        overflow={"hidden"}
      >
        <Image
          objectFit={"cover"}
          h={"180px"}
          w={"100%"}
          objectPosition={"top"}
          alt={game.name}
          src={GetCroppedImageUrl(game.background_image)}
        />
        <CardBody>
          <HStack display={"flex"} justifyContent={"space-between"}>
          <PlatFormIconList platforms = {game.parent_platforms}/>
          <CriticScore score={game.metacritic? game.metacritic : 'na'} />
          </HStack>
          <Heading marginTop={"15px"} display={"flex"} justifyContent={"center"} w={"100%"} h={"70px"} fontSize={"2xl"}>{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
