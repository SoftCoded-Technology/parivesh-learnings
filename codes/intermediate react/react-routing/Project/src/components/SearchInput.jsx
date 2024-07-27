import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ onSearch }) => {
  const ref = useRef(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          size="md"
          variant="filled"
          placeholder="Search Games..."
          borderRadius={20}
          focusBorderColor="gray.500"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
