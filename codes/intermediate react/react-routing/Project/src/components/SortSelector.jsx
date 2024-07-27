import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
const SortSelector = ({ onSelectSortOrder,sortOrder }) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const sortOrderName = sortOrders.find((order) => order.value === sortOrder)?.label;
  return (
    <>
      <Menu>
        <MenuButton
          w={"250px"}
          as={Button}
          rightIcon={<FaChevronDown />}
        >
          Order by: {sortOrderName}
        </MenuButton>
        <MenuList w={"100%"} h={"200px"} overflowY={"scroll"}>
            {sortOrders.map((order) => (
          <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                {order.label}
          </MenuItem>
            ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
