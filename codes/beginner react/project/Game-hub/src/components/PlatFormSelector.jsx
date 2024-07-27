import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms from "../hooks/usePlatforms";

const PlatFormSelector = ({  onSelectPlatform , selectedPlatForm }) => {
  const { Data, IsLoading, Error } = usePlatforms();
  // console.log(selectedPlatForm);
  return (
    <>
      <Menu>
        <MenuButton isDisabled ={IsLoading} w={"225px"} as={Button} rightIcon={<FaChevronDown />}>
          {selectedPlatForm?.name || "Platform"}
        </MenuButton>
        <MenuList w={"100%"} h={"200px"} overflowY={"scroll"}>
          {Data.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatFormSelector;
