import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <>
      <Card
        h={"400px"}
        w={"90%"}
        margin={"auto"}
        overflow={"hidden"}
        borderRadius={10}
      >
        
        <Skeleton  h={"180px"} w={"100%"} />

        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
