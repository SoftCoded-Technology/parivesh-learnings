import React from "react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";

const PlatFormIconList = ({ platforms}) => {
  // console.log(game)

  const iconMap = {
    pc: BsGlobe,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: FaWindows,
    android: FaAndroid,
  };
  return (
    <HStack>
      {platforms.map(({ platform }) => (
        //   <Text key={platform.id}>{platform.slug}</Text>
        <Icon
          mx={"1px"}
          cursor={"pointer"}
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.200"
        />
      ))}
    </HStack>
  );
};

export default PlatFormIconList;
