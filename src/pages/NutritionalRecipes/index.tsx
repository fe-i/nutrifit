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
  UnorderedList,
  CircularProgress, 
  CircularProgressLabel,
  Progress, 
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger
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
      
      <Flex direction="row">
{/*Sweet Potato kale shrimp skillet */}
      <Box ml={15} >
      <Card maxW='sm' >
  <CardBody >
    <Image 
      src='https://www.primaverakitchen.com/wp-content/uploads/2018/06/Sweet-potato-Kale-and-Shrimp-Skillet-Primavera-Kitchen-1-1.jpg'
      alt='Sweet Potatoes, Kale, and Shrimp in a black bowl with a wooden spoon'
      borderRadius='lg'
      
      height="230"
    />
    <Stack my='6' spacing='2'>
      <Heading size='md'>Sweet Potato, Kale, and Shrimp Skillet</Heading>
      <Text>
      This gluten-free recipe uses sweet potato, kale, and shrimp to make a quick high-protein weekday meal. Even better: It only uses one pan!
      </Text>
      <Text ml='8' color='red.300' fontSize='2xl' size = 'md'>
        325 - 460 calories
      </Text>
    </Stack>
    <Button ml='7'variant='solid' colorScheme='red' onClick={onOpen} > {/*variant attribute can also hold ghost */}
             View Recipe            
</Button>

<Popover>
  <PopoverTrigger>
    <Button ml='7' >View Macros</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader><strong>Macro Chart</strong></PopoverHeader>
      <PopoverBody>
      <Text> Carbs - 18g
      <Stack spacing={5}>
          <Progress colorScheme='blue' size='md' value={31} />
      </Stack>
      </Text>
      <br></br>
      <Text> Protein - 32g
      <Stack spacing={5}>
          <Progress colorScheme='red' size='md' value={55} />
      </Stack>
      </Text>
      <br></br>
      <Text> Fat - 8g
      <Stack spacing={5}>
          <Progress colorScheme='yellow' size='md' value={14} />
      </Stack>
      </Text>        

      </PopoverBody>
  </PopoverContent>
</Popover>

  </CardBody>
  <ButtonGroup spacing='2'>
<Drawer
  isOpen={isOpen}
  placement='right'
  onClose={onClose}
  size = "md"
   
>
  <DrawerOverlay />
  <DrawerContent>
  
    <DrawerCloseButton />
    <DrawerHeader mt='-2'fontSize="35" my='-3'>Sweet Potato, Kale, and Shrimp Skillet</DrawerHeader>
          
    <DrawerBody>
      
    <Text fontSize="30" pb={2} >
      Ingredients: </Text>
    
    <UnorderedList fontSize="18"  ml={19}>
      <ListItem>2 tablespoons extra virgin olive oil or ghee</ListItem>
      <ListItem>½ cup onions diced</ListItem>
      <ListItem>A pinch crushed red pepper to taste</ListItem>
      <ListItem>2 cloves garlic minced</ListItem>
      <ListItem>2 cups sweet potatoes diced</ListItem>
      <ListItem>2 cups shrimp peeled, deveined, and thawed if frozen</ListItem>
      <ListItem>3 cups trimmed and coarsely chopped kale leaves</ListItem>
      <ListItem>Salt and ground black pepper</ListItem>
    </UnorderedList>

     <Button mt={5}>
     Add Ingredients to Grocery List      
     </Button>
     <br></br>
     <br></br>
     
    </DrawerBody>

  </DrawerContent>
</Drawer>
</ButtonGroup>
</Card>
      </Box>

{/*Roasted Broccoli with Shrimp*/}
      <Box ml={15} >
      <Card maxW='sm' >
  <CardBody >
    <Image 
      src='https://cdn.muscleandstrength.com/sites/default/files/images/articles/high-protein-roasted-shrimp-with-broccoli.jpg'
      alt='Sweet Potatoes, Kale, and Shrimp in a black bowl with a wooden spoon'
      borderRadius='lg'
      width="300"
      height="230"
    />
    <Stack my='6' spacing='2'>
      <Heading size='md'>Roasted Broccoli with Shrimp</Heading>
      <Text>
      This nutrient-rich dinner only dirties one pan and comes together in just a few minutes. It's the perfect healthy, weeknight meal. Note: if you don't keep whole spices, you can use half the amount of ground spices instead. 
      </Text>
      <Text ml='8' color='red.300' fontSize='2xl' size = 'md'>
        350 - 480 calories
      </Text>
    </Stack>
    <Button ml='7'variant='solid' colorScheme='red' onClick={onOpen} > {/*variant attribute can also hold ghost */}
             View Recipe            
</Button>

<Popover>
  <PopoverTrigger>
    <Button ml='7' >View Macros</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader><strong>Macro Chart</strong></PopoverHeader>
      <PopoverBody>
      <Text> Carbs - 12g
      <Stack spacing={5}>
          <Progress colorScheme='blue' size='md' value={21} />
      </Stack>
      </Text>
      <br></br>
      <Text> Protein - 29g
      <Stack spacing={5}>
          <Progress colorScheme='red' size='md' value={50} />
      </Stack>
      </Text>
      <br></br>
      <Text> Fat - 16g
      <Stack spacing={5}>
          <Progress colorScheme='yellow' size='md' value={29} />
      </Stack>
      </Text>        

      </PopoverBody>
  </PopoverContent>
</Popover>

  </CardBody>
  <ButtonGroup spacing='2'>
<Drawer
  isOpen={isOpen}
  placement='right'
  onClose={onClose}
  size = "md"
   
>
  <DrawerOverlay />
  <DrawerContent>
  
    <DrawerCloseButton />
    <DrawerHeader mt='-2'fontSize="35" my='-3'>Roasted Broccoli with Shrimp</DrawerHeader>
          
    <DrawerBody>
      
    <Text fontSize="30" pb={2} >
      Ingredients: </Text>
    
    <UnorderedList fontSize="18"  ml={19}>
      <ListItem>2 pounds broccoli, cut into bite-size florets</ListItem>
      <ListItem>4 tablespoons (¼ cup) extra virgin olive oil</ListItem>
      <ListItem>1 teaspoon whole coriander seeds</ListItem>
      <ListItem>1 teaspoon whole cumin seeds</ListItem>
      <ListItem>1½ teaspoons kosher salt</ListItem>
      <ListItem>1 teaspoon freshly ground black pepper</ListItem>
      <ListItem>⅛ teaspoon hot chili powder</ListItem>
      <ListItem>1 pound large shrimp, shelled and deveined</ListItem>
      <ListItem>1¼ teaspoons lemon zest (from 1 large lemon)</ListItem>
    </UnorderedList>

     <Button mt={5}>
     Add Ingredients to Grocery List      
     </Button>
     <br></br>
     <br></br>
     
    </DrawerBody>

  </DrawerContent>
</Drawer>
</ButtonGroup>
</Card>
      </Box>


{/* Make-Ahead Breakfast Burritos*/}
      <Box ml={15} >
      <Card maxW='sm' >
  <CardBody >
    <Image 
      src='https://skinnyms.com/wp-content/uploads/2014/05/Southwestern-Protein-Breakfast-Burrito-Breakfast-Recipe-2-1200x799.jpg'
      alt='3 sliced breakfast burritos '
      borderRadius='lg'
      width="300"
      height="230"
    />
    <Stack my='6' spacing='2'>
      <Heading size='md'>Make-Ahead Breakfast Burritos</Heading>
      <Text>
      Although this is more template than recipe, make-ahead breakfast burritos are a convenient way to eat healthy on the go. These meal-prep friendly burritos are freezer-friendly and customizable. 
      </Text>
      <Text ml='8' color='red.300' fontSize='2xl' size = 'md'>
        300 - 600 calories
      </Text>
    </Stack>
    <Button ml='7'variant='solid' colorScheme='red' onClick={onOpen} > {/*variant attribute can also hold ghost */}
             View Recipe            
</Button>

<Popover>
  <PopoverTrigger>
    <Button ml='7' >View Macros</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader><strong>Macro Chart</strong></PopoverHeader>
      <PopoverBody>
      <Text> Carbs - 12g
      <Stack spacing={5}>
          <Progress colorScheme='blue' size='md' value={21} />
      </Stack>
      </Text>
      <br></br>
      <Text> Protein - 29g
      <Stack spacing={5}>
          <Progress colorScheme='red' size='md' value={50} />
      </Stack>
      </Text>
      <br></br>
      <Text> Fat - 16g
      <Stack spacing={5}>
          <Progress colorScheme='yellow' size='md' value={29} />
      </Stack>
      </Text>        

      </PopoverBody>
  </PopoverContent>
</Popover>

  </CardBody>
  <ButtonGroup spacing='2'>
<Drawer
  isOpen={isOpen}
  placement='right'
  onClose={onClose}
  size = "md"
   
>
  <DrawerOverlay />
  <DrawerContent>
  
    <DrawerCloseButton />
    <DrawerHeader mt='-2'fontSize="35" my='-3'>Roasted Broccoli with Shrimp</DrawerHeader>
          
    <DrawerBody>
      
    <Text fontSize="30" pb={2} >
      Ingredients: </Text>
    
    <UnorderedList fontSize="18"  ml={19}>
      <ListItem>2 pounds broccoli, cut into bite-size florets</ListItem>
      <ListItem>4 tablespoons (¼ cup) extra virgin olive oil</ListItem>
      <ListItem>1 teaspoon whole coriander seeds</ListItem>
      <ListItem>1 teaspoon whole cumin seeds</ListItem>
      <ListItem>1½ teaspoons kosher salt</ListItem>
      <ListItem>1 teaspoon freshly ground black pepper</ListItem>
      <ListItem>⅛ teaspoon hot chili powder</ListItem>
      <ListItem>1 pound large shrimp, shelled and deveined</ListItem>
      <ListItem>1¼ teaspoons lemon zest (from 1 large lemon)</ListItem>
    </UnorderedList>

     <Button mt={5}>
     Add Ingredients to Grocery List      
     </Button>
     <br></br>
     <br></br>
     
    </DrawerBody>

  </DrawerContent>
</Drawer>
</ButtonGroup>
</Card>
      </Box>



</Flex>
    </>
  );
}


