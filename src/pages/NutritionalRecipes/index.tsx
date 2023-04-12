import type { NextPage } from "next";
import { FC, PropsWithChildren, ReactNode, useState } from "react";
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
  Card,
  CardBody,
  Heading,
  ButtonGroup,
  CardFooter,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  OrderedList,
  ListItem,
  UnorderedList
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

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
      </Box>
      <Text mx={10} my={10} fontSize="50">
        Nutritional Recipes
      </Text>
      

      <Box ml={15} >
      <Card maxW='sm' >
  <CardBody >
    <Image 
      src='https://www.shape.com/thmb/rcoAEWTEu6i6zEvZKfU3DkcyA5c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/800_SweetpotatoKaleShrimpskillet_PrimaveraKitchen-600px-e1573579470176-7d1a0934aa1145ccbc4e092e419c5e32.jpg'
      alt='Sweet Potatoes, Kale, and Shrimp in a black bowl with a wooden spoon'
      borderRadius='lg'
    />
    <Stack my='6' spacing='5'>
      <Heading size='md'>Sweet Potato, Kale, and Shrimp Skillet</Heading>
      <Text>
      This gluten-free recipe uses sweet potato, kale, and shrimp to make a quick high-protein weekday meal. Even better: It only uses one pan!
      </Text>
      <Text color='orange.600' fontSize='2xl' size = 'md'>
        325 - 460 calories
      </Text>
    </Stack>
    <Button variant='solid' colorScheme='orange' onClick={onOpen} > {/*variant attribute can also hold ghost */}
  View
</Button>
  </CardBody>
  <ButtonGroup spacing='2'>
<Drawer
  isOpen={isOpen}
  placement='right'
  onClose={onClose}
  size = "xl"
   
>
  <DrawerOverlay />
  <DrawerContent>
  
    <DrawerCloseButton />
    <DrawerHeader fontSize="35">Sweet Potato, Kale, and Shrimp Skillet</DrawerHeader>
          
    <DrawerBody>
      
    <Text fontSize="35" pb={10}>
      Ingredients:
    </Text>
    <UnorderedList fontSize="23"  ml={17}>
      <ListItem>2 tablespoons extra virgin olive oil or ghee</ListItem>
      <ListItem>½ cup onions diced</ListItem>
      <ListItem>A pinch crushed red pepper to taste</ListItem>
      <ListItem>2 cloves garlic minced</ListItem>
    </UnorderedList>
     <Button mt={12}>
     Add Ingredients to Grocery List      
     </Button>
    </DrawerBody>

   
  </DrawerContent>
</Drawer>
</ButtonGroup>
</Card>
      </Box>
    </>
  );

  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
   
    return (
      <>
        <Button colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  
}
