import type { NextPage } from "next";
import { useState } from "react";
import { FC, PropsWithChildren, ReactNode } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Textarea,
  Image,
  chakra,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  SimpleGrid,
  Checkbox,
  CheckboxGroup,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const links = [
  { label: "Workout Plan", path: "/WorkoutPlan" },
  { label: "Nutritional Recipes", path: "/NutritionalRecipes" },
  { label: "Grocery List", path: "/GroceryList" },
];

const PageLink: FC<PropsWithChildren<{ label: string; path: string }>> = ({
  label,
  path,
}) => {
  const router = useRouter();
  const isExternalLink = /^(https?:)?\/\//.test(path);

  return (
    <Box
      as={isExternalLink ? chakra.a : Link}
      px={3}
      py={{ base: 2, md: 1 }}
      rounded="xl"
      fontWeight={router.pathname === path ? "semibold" : "normal"}
      bgColor={
        router.pathname === path
          ? useColorModeValue("red.200", "red.400")
          : "none"
      }
      href={path}
      rel="noopener noreferrer"
      target={isExternalLink ? "_blank" : "_self"}
      _hover={{
        bg:
          router.pathname !== path && useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {label}
    </Box>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = (): void => {
    const newItem = (
      document.getElementById("newItemInput") as HTMLInputElement
    ).value;
    if (newItem) {
      setItems((prevItems) => [...prevItems, newItem]);
      (document.getElementById("newItemInput") as HTMLInputElement).value = "";
    }
  };
  const handleClearList = () => {
    setItems([]);
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Link href="/#">
              <Box boxSize="50px">
                <Image src="/logo-color.png" alt="Logo" borderRadius="full" />
              </Box>
            </Link>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {links.map((link, _) => (
                <PageLink key={_} {...link} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings & Privacy</MenuItem>
                <MenuDivider />
                <MenuItem>Log out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link, _) => (
                <PageLink key={_} {...link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>{" "}
      <Text mx={10} my={10} fontSize="50">
        Grocery List
      </Text>
      <Box my={10} mx={10}>
        <VStack spacing={4} align="start">
          <Input id="newItemInput" placeholder="Type item here" />
          <HStack>
            <Button onClick={handleAddItem}>Add item</Button>
            <Button onClick={handleClearList}>Clear List</Button>
          </HStack>
          <CheckboxGroup>
            {items.map((item, index) => (
              <Checkbox key={index} value={item}>
                {item}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </VStack>
      </Box>
    </>
  );
}
