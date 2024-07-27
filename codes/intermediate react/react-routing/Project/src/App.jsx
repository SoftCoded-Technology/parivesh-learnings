import React, { useState } from "react";
import "./index.css";
import { Box, Button, ButtonGroup, HStack, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatFormSelector from "./components/PlatFormSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const [selectedGenre, setselectedGenre] = useState(null);
  const [selectedPlatForm, setSelectedPlatForm] = useState(null);
  const [sortOrders, setsortOrders] = useState("");
  const [searchText, setsearchText] = useState("");

  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area={"nav"} bg={"gray.700"}>
          <Navbar onSearch={(searchText) => setsearchText(searchText)} />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={"10px"}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setselectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem
          borderLeft={"1px solid white"}
          paddingX={"10px"}
          marginTop={"10px"}
          area={"main"}
        >
          <Box paddingLeft={"20px"} marginBottom={"20px"}>
            <GameHeading platform={selectedPlatForm} genre={selectedGenre} />
            <HStack>
              <PlatFormSelector
                onSelectPlatform={(platform) => setSelectedPlatForm(platform)}
                selectedPlatForm={selectedPlatForm}
              />
              <SortSelector
                sortOrder={sortOrders}
                onSelectSortOrder={(order) => setsortOrders(order)}
              />
            </HStack>
          </Box>
          <GameGrid
            searchText={searchText}
            selectedPlatForm={selectedPlatForm}
            selectedGenre={selectedGenre}
            sortOrders={sortOrders}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
