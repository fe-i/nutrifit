import type { NextPage } from "next";
import {
	Text,
	Flex,
	Button,
	useDisclosure,
	Stack,
	Image,
	Card,
	CardBody,
	Heading,
	ButtonGroup,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	ListItem,
	UnorderedList,
	Progress,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger
} from "@chakra-ui/react";

import Layout from "@/components/layout";

const Recipes: NextPage = () => {
	const { isOpen: item1isOpen, onOpen: item1onOpen, onClose: item1onClose } = useDisclosure();
	const { isOpen: item2isOpen, onOpen: item2onOpen, onClose: item2onClose } = useDisclosure();
	const { isOpen: item3isOpen, onOpen: item3onOpen, onClose: item3onClose } = useDisclosure();
	const { isOpen: item4isOpen, onOpen: item4onOpen, onClose: item4onClose } = useDisclosure();
	const { isOpen: item5isOpen, onOpen: item5onOpen, onClose: item5onClose } = useDisclosure();
	const { isOpen: item6isOpen, onOpen: item6onOpen, onClose: item6onClose } = useDisclosure();

	return (
		<Layout title="Nutritional Recipes">
			<Text mx={8} fontSize="5xl" textAlign="center">
				<strong>Nutritional Recipes</strong>
			</Text>

			<Flex
				direction={{ base: "column", md: "row" }}
				align="center"
				justify="center"
				gap={10}
				m="6">
				{/*Sweet Potato kale shrimp skillet */}
				<Card maxW="sm" height={600}>
					<CardBody>
						<Image
							src="https://www.primaverakitchen.com/wp-content/uploads/2018/06/Sweet-potato-Kale-and-Shrimp-Skillet-Primavera-Kitchen-1-1.jpg"
							alt="Sweet Potatoes, Kale, and Shrimp in a black bowl with a wooden spoon"
							borderRadius="lg"
							height="230"
						/>
						<Stack my="6" spacing="2">
							<Heading size="md">Sweet Potato, Kale, and Shrimp Skillet</Heading>
							<Text>
								This gluten-free recipe uses sweet potato, kale, and shrimp to make
								a quick high-protein weekday meal. Even better: It only uses one
								pan!
							</Text>
							<Text ml="8" color="red.300" fontSize="2xl" size="md">
								325 - 460 calories
							</Text>
						</Stack>
						<Button ml="7" variant="solid" colorScheme="red" onClick={item1onOpen}>
							{" "}
							{/*variant attribute can also hold ghost */}
							View Recipe
						</Button>

						<Popover>
							<PopoverTrigger>
								<Button ml="7">View Macros</Button>
							</PopoverTrigger>
							<PopoverContent>
								<PopoverArrow />
								<PopoverCloseButton />
								<PopoverHeader>
									<strong>Macro Chart</strong>
								</PopoverHeader>
								<PopoverBody>
									<Text>
										{" "}
										Carbs - 18g
										<Stack spacing={5}>
											<Progress colorScheme="blue" size="md" value={31} />
										</Stack>
									</Text>
									<br></br>
									<Text>
										{" "}
										Protein - 32g
										<Stack spacing={5}>
											<Progress colorScheme="red" size="md" value={55} />
										</Stack>
									</Text>
									<br></br>
									<Text>
										{" "}
										Fat - 8g
										<Stack spacing={5}>
											<Progress colorScheme="yellow" size="md" value={14} />
										</Stack>
									</Text>
								</PopoverBody>
							</PopoverContent>
						</Popover>
					</CardBody>
					<ButtonGroup spacing="2">
						<Drawer
							isOpen={item1isOpen}
							placement="right"
							onClose={item1onClose}
							size="md">
							<DrawerOverlay />
							<DrawerContent>
								<DrawerCloseButton />
								<DrawerHeader mt="-2" fontSize="35" my="-3">
									Sweet Potato, Kale, and Shrimp Skillet
								</DrawerHeader>

								<DrawerBody>
									<Text fontSize="30" pb={2}>
										Ingredients:{" "}
									</Text>

									<UnorderedList fontSize="18" ml={19}>
										<ListItem>
											2 tablespoons extra virgin olive oil or ghee
										</ListItem>
										<ListItem>½ cup onions diced</ListItem>
										<ListItem>A pinch crushed red pepper to taste</ListItem>
										<ListItem>2 cloves garlic minced</ListItem>
										<ListItem>2 cups sweet potatoes diced</ListItem>
										<ListItem>
											2 cups shrimp peeled, deveined, and thawed if frozen
										</ListItem>
										<ListItem>
											3 cups trimmed and coarsely chopped kale leaves
										</ListItem>
										<ListItem>Salt and ground black pepper</ListItem>
									</UnorderedList>

									<Button mt={5}>Add Ingredients to Grocery List</Button>
									<br></br>
									<br></br>
								</DrawerBody>
							</DrawerContent>
						</Drawer>
					</ButtonGroup>
				</Card>

				{/*Roasted Broccoli with Shrimp*/}
				<Card maxW="sm" height={600}>
					<CardBody>
						<Image
							src="https://cdn.muscleandstrength.com/sites/default/files/images/articles/high-protein-roasted-shrimp-with-broccoli.jpg"
							alt="Sweet Potatoes, Kale, and Shrimp in a black bowl with a wooden spoon"
							borderRadius="lg"
							width="300"
							height="230"
						/>
						<Stack my="6" spacing="2">
							<Heading size="md">Roasted Broccoli with Shrimp</Heading>
							<Text>
								This nutrient-rich dinner only dirties one pan and comes together in
								just a few minutes. It's the perfect healthy, weeknight meal. Note:
								if you don't keep whole spices, you can use half the amount of
								ground spices instead.
							</Text>
							<Text ml="8" color="red.300" fontSize="2xl" size="md">
								350 - 480 calories
							</Text>
						</Stack>
						<Button ml="7" variant="solid" colorScheme="red" onClick={item2onOpen}>
							{" "}
							{/*variant attribute can also hold ghost */}
							View Recipe
						</Button>

						<Popover>
							<PopoverTrigger>
								<Button ml="7">View Macros</Button>
							</PopoverTrigger>
							<PopoverContent>
								<PopoverArrow />
								<PopoverCloseButton />
								<PopoverHeader>
									<strong>Macro Chart</strong>
								</PopoverHeader>
								<PopoverBody>
									<Text>
										{" "}
										Carbs - 12g
										<Stack spacing={5}>
											<Progress colorScheme="blue" size="md" value={21} />
										</Stack>
									</Text>
									<br></br>
									<Text>
										{" "}
										Protein - 29g
										<Stack spacing={5}>
											<Progress colorScheme="red" size="md" value={50} />
										</Stack>
									</Text>
									<br></br>
									<Text>
										{" "}
										Fat - 16g
										<Stack spacing={5}>
											<Progress colorScheme="yellow" size="md" value={29} />
										</Stack>
									</Text>
								</PopoverBody>
							</PopoverContent>
						</Popover>
					</CardBody>
					<ButtonGroup spacing="2">
						<Drawer
							isOpen={item2isOpen}
							placement="right"
							onClose={item2onClose}
							size="md">
							<DrawerOverlay />
							<DrawerContent>
								<DrawerCloseButton />
								<DrawerHeader mt="-2" fontSize="35" my="-3">
									Roasted Broccoli with Shrimp
								</DrawerHeader>

								<DrawerBody>
									<Text fontSize="30" pb={2}>
										Ingredients:{" "}
									</Text>

									<UnorderedList fontSize="18" ml={19}>
										<ListItem>
											2 pounds broccoli, cut into bite-size florets
										</ListItem>
										<ListItem>
											4 tablespoons (¼ cup) extra virgin olive oil
										</ListItem>
										<ListItem>1 teaspoon whole coriander seeds</ListItem>
										<ListItem>1 teaspoon whole cumin seeds</ListItem>
										<ListItem>1½ teaspoons kosher salt</ListItem>
										<ListItem>1 teaspoon freshly ground black pepper</ListItem>
										<ListItem>⅛ teaspoon hot chili powder</ListItem>
										<ListItem>
											1 pound large shrimp, shelled and deveined
										</ListItem>
										<ListItem>
											1¼ teaspoons lemon zest (from 1 large lemon)
										</ListItem>
									</UnorderedList>

									<Button mt={5}>Add Ingredients to Grocery List</Button>
									<br></br>
									<br></br>
								</DrawerBody>
							</DrawerContent>
						</Drawer>
					</ButtonGroup>
				</Card>

				{/* Make-Ahead Breakfast Burritos*/}
				<Card maxW="sm" height={600}>
					<CardBody>
						<Image
							src="https://skinnyms.com/wp-content/uploads/2014/05/Southwestern-Protein-Breakfast-Burrito-Breakfast-Recipe-2-1200x799.jpg"
							alt="3 sliced breakfast burritos "
							borderRadius="lg"
							width="300"
							height="230"
						/>
						<Stack my="6" spacing="2">
							<Heading size="md">Make-Ahead Breakfast Burritos</Heading>
							<Text>
								Although this is more template than recipe, make-ahead breakfast
								burritos are a convenient way to eat healthy on the go. These
								meal-prep friendly burritos are freezer-friendly and customizable.
							</Text>
							<Text ml="8" color="red.300" fontSize="2xl" size="md">
								300 - 600 calories
							</Text>
						</Stack>
						<Button ml="7" variant="solid" colorScheme="red" onClick={item3onOpen}>
							{" "}
							{/*variant attribute can also hold ghost */}
							View Recipe
						</Button>

						<Popover>
							<PopoverTrigger>
								<Button ml="7">View Macros</Button>
							</PopoverTrigger>
							<PopoverContent>
								<PopoverArrow />
								<PopoverCloseButton />
								<PopoverHeader>
									<strong>Macro Chart</strong>
								</PopoverHeader>
								<PopoverBody>
									<Text>
										{" "}
										Carbs - 26g
										<Stack spacing={5}>
											<Progress colorScheme="blue" size="md" value={63} />
										</Stack>
									</Text>
									<br></br>
									<Text>
										{" "}
										Protein - 12g
										<Stack spacing={5}>
											<Progress colorScheme="red" size="md" value={29} />
										</Stack>
									</Text>
									<br></br>
									<Text>
										{" "}
										Fat - 3g
										<Stack spacing={5}>
											<Progress colorScheme="yellow" size="md" value={7} />
										</Stack>
									</Text>
								</PopoverBody>
							</PopoverContent>
						</Popover>
					</CardBody>
					<ButtonGroup spacing="2">
						<Drawer
							isOpen={item3isOpen}
							placement="right"
							onClose={item3onClose}
							size="md">
							<DrawerOverlay />
							<DrawerContent>
								<DrawerCloseButton />
								<DrawerHeader mt="-2" fontSize="35" my="-3">
									Make-Ahead Breakfast Burritos
								</DrawerHeader>

								<DrawerBody>
									<Text fontSize="30" pb={2}>
										Ingredients:{" "}
									</Text>

									<UnorderedList fontSize="18" ml={19}>
										<ListItem>6 cups baby spinach (loosely packed)</ListItem>
										<ListItem>
											15 ounces black beans (can, rinsed and drained)
										</ListItem>
										<ListItem>4 egg whites</ListItem>
										<ListItem>2 eggs</ListItem>
										<ListItem>
											1/4 cup feta cheese (optional, shredded cheddar or
											Mexican cheese)
										</ListItem>
									</UnorderedList>

									<Button mt={5}>Add Ingredients to Grocery List</Button>
									<br></br>
									<br></br>
								</DrawerBody>
							</DrawerContent>
						</Drawer>
					</ButtonGroup>
				</Card>
			</Flex>

			<Flex
				direction={{ base: "column", md: "row" }}
				align="center"
				justify="center"
				gap={10}
				m="6">
				{/* Copycat Qdoba Chicken*/}
				<Card maxW="sm" height={600}>
					<CardBody>
						<Image
							src="https://myfarmhousetable.com/wp-content/uploads/Chipotle-Chicken-5.png"
							alt="Copycat Qdoba Chicken in a bowl"
							borderRadius="lg"
							width="300"
							height="230"
						/>
						<Stack my="6" spacing="2">
							<Heading size="md">Copycat Qdoba Chicken</Heading>
							<Text>
								This recipe unlocks the secret to burrito worthy chicken pieces.
								Simply marinade 2lbs of chicken and then you have nearly a week’s
								worth of tasty lunch options. This would also work well on salads.
							</Text>
							<Text ml="8" color="red.300" fontSize="2xl" size="md">
								640 - 780 calories
							</Text>
						</Stack>
						<Button ml="7" variant="solid" colorScheme="red" onClick={item4onOpen}>
							{" "}
							{/*variant attribute can also hold ghost */}
							View Recipe
						</Button>

						<Popover>
							<PopoverTrigger>
								<Button ml="7">View Macros</Button>
							</PopoverTrigger>
							<PopoverContent>
								<PopoverArrow />
								<PopoverCloseButton />
								<PopoverHeader>
									<strong>Macro Chart</strong>
								</PopoverHeader>
								<PopoverBody>
									<Text>
										{" "}
										Carbs - 48g
										<Stack spacing={5}>
											<Progress colorScheme="blue" size="md" value={39} />
										</Stack>
									</Text>
									<br></br>
									<Text>
										{" "}
										Protein - 44g
										<Stack spacing={5}>
											<Progress colorScheme="red" size="md" value={36} />
										</Stack>
									</Text>
									<br></br>
									<Text>
										{" "}
										Fat - 29g
										<Stack spacing={5}>
											<Progress colorScheme="yellow" size="md" value={23} />
										</Stack>
									</Text>
								</PopoverBody>
							</PopoverContent>
						</Popover>
					</CardBody>
					<ButtonGroup spacing="2">
						<Drawer
							isOpen={item4isOpen}
							placement="right"
							onClose={item4onClose}
							size="md">
							<DrawerOverlay />
							<DrawerContent>
								<DrawerCloseButton />
								<DrawerHeader mt="-2" fontSize="35" my="-3">
									Copycat Qdoba Chicken
								</DrawerHeader>

								<DrawerBody>
									<Text fontSize="30" pb={2}>
										Ingredients:{" "}
									</Text>

									<UnorderedList fontSize="18" ml={19}>
										<ListItem>2 lbs boneless skinless chicken tenderloins</ListItem>
										<ListItem>2 cloves garlic minced</ListItem>
										<ListItem>2 tablespoons olive oil</ListItem>
										<ListItem>2 tablespoons adobo sauce from a small can of chipotle peppers</ListItem>
										<ListItem>½ teaspoon oregano or Italian seasoning</ListItem>
										<ListItem>1 teaspoon salt</ListItem>
										<ListItem>½ teaspoon black pepper</ListItem>
									</UnorderedList>

									<Button mt={5}>Add Ingredients to Grocery List</Button>
									<br></br>
									<br></br>
								</DrawerBody>
							</DrawerContent>
						</Drawer>
					</ButtonGroup>
				</Card>

				{/*Zucchini & Ground Beef Orzo Casserole*/}
				<Card maxW="sm" height={600}>
					<CardBody>
						<Image
							src="https://images-gmi-pmc.edge-generalmills.com/598fed90-3b17-458e-8336-294616f3a087.jpg"
							alt="Zucchini & Ground Beef Orzo Casserole"
							borderRadius="lg"
							width="300"
							height="230"
						/>
						<Stack my="6" spacing="2">
							<Heading size="md">Zucchini & Ground Beef Orzo Casserole</Heading>
							<Text>
								If you are looking for an easy, cheesy beef casserole recipe that is
								not only healthy but also freezer friendly & packed with protein,
								look no further!
							</Text>
							<Text ml="8" color="red.300" fontSize="2xl" size="md">
								290 - 350 calories
							</Text>
						</Stack>
						<Button ml="7" variant="solid" colorScheme="red" onClick={item5onOpen}>
							{" "}
							{/*variant attribute can also hold ghost */}
							View Recipe
						</Button>

						<Popover>
							<PopoverTrigger>
								<Button ml="7">View Macros</Button>
							</PopoverTrigger>
							<PopoverContent>
								<PopoverArrow />
								<PopoverCloseButton />
								<PopoverHeader>
									<strong>Macro Chart</strong>
								</PopoverHeader>
								<PopoverBody>
									<Text>
										{" "}
										Carbs - 18g
										<Stack spacing={5}>
											<Progress colorScheme="blue" size="md" value={6} />
										</Stack>
									</Text>
									<br></br>
									<Text>
										{" "}
										Protein - 25g
										<Stack spacing={5}>
											<Progress colorScheme="red" size="md" value={49} />
										</Stack>
									</Text>
									<br></br>
									<Text>
										{" "}
										Fat - 15g
										<Stack spacing={5}>
											<Progress colorScheme="yellow" size="md" value={23} />
										</Stack>
									</Text>
								</PopoverBody>
							</PopoverContent>
						</Popover>
					</CardBody>
					<ButtonGroup spacing="2">
						<Drawer
							isOpen={item5isOpen}
							placement="right"
							onClose={item5onClose}
							size="md">
							<DrawerOverlay />
							<DrawerContent>
								<DrawerCloseButton />
								<DrawerHeader mt="-2" fontSize="35" my="-3">
									Zucchini & Ground Beef Orzo Casserole
								</DrawerHeader>

								<DrawerBody>
									<Text fontSize="30" pb={2}>
										Ingredients:{" "}
									</Text>

									<UnorderedList fontSize="18" ml={19}>
										<ListItem>1 tsp Extra Virgin Olive Oil</ListItem>
										<ListItem>3 cups Zucchini sliced into circles</ListItem>
										<ListItem>¼ tsp Salts</ListItem>
										<ListItem>¼ tsp Black Pepper</ListItem>
										<ListItem>16 oz 90% Ground Beef</ListItem>
										<ListItem>
											2 tbsp Shallots diced, (about 1 shallot) or (40 grams)
										</ListItem>
										<ListItem>2 cloves Fresh Garlic diced, (10 grams)</ListItem>
										<ListItem>¼ tsp Italian Seasoning</ListItem>
										<ListItem>
											1½ cups No Salt Added Diced Tomatoes (about 1 16 oz can)
										</ListItem>
										<ListItem>¾ cup Ricotta Cheese (180 grams)</ListItem>
										<ListItem>
											½ cup Cheddar Cheese freshly shredded, (30 grams)
										</ListItem>
										<ListItem>1 cup Chickpea Rice (100 grams)</ListItem>
										<ListItem>1 tsp Red Pepper Flake</ListItem>
										<ListItem>
											1 tbsp Scallions sliced, optional. (about stalk) or (10
											grams)
										</ListItem>
									</UnorderedList>

									<Button mt={5}>Add Ingredients to Grocery List</Button>
									<br></br>
									<br></br>
								</DrawerBody>
							</DrawerContent>
						</Drawer>
					</ButtonGroup>
				</Card>

				{/*Baked Orange Chicken Meatballs*/}
				<Card maxW="sm" height={600}>
					<CardBody>
						<Image
							src="https://www.justataste.com/wp-content/uploads/2013/07/baked-orange-chicken-meatballs-recipe.jpg"
							alt="Zucchini & Ground Beef Orzo Casserole"
							borderRadius="lg"
							width="300"
							height="230"
						/>
						<Stack my="6" spacing="2">
							<Heading size="md">Baked Orange Chicken Meatballs</Heading>
							<Text>
								These fast, lean meatballs come with a Chinese takeout twist.
								Swapping chicken for fattier meats and baking them in an oven makes
								for a healthy alternative. While they bake, whip up the orange
								marmalade glaze!
							</Text>
							<Text ml="8" color="red.300" fontSize="2xl" size="md">
								1200 - 1450 calories
							</Text>
						</Stack>
						<Button ml="7" variant="solid" colorScheme="red" onClick={item6onOpen}>
							{" "}
							{/*variant attribute can also hold ghost */}
							View Recipe
						</Button>

						<Popover>
							<PopoverTrigger>
								<Button ml="7">View Macros</Button>
							</PopoverTrigger>
							<PopoverContent>
								<PopoverArrow />
								<PopoverCloseButton />
								<PopoverHeader>
									<strong>Macro Chart</strong>
								</PopoverHeader>
								<PopoverBody>
									<Text>
										{" "}
										Carbs - 58g
										<Stack spacing={5}>
											<Progress colorScheme="blue" size="md" value={38} />
										</Stack>
									</Text>
									<br></br>
									<Text>
										{" "}
										Protein - 50g
										<Stack spacing={5}>
											<Progress colorScheme="red" size="md" value={32} />
										</Stack>
									</Text>
									<br></br>
									<Text>
										{" "}
										Fat - 45g
										<Stack spacing={5}>
											<Progress colorScheme="yellow" size="md" value={29} />
										</Stack>
									</Text>
								</PopoverBody>
							</PopoverContent>
						</Popover>
					</CardBody>
					<ButtonGroup spacing="2">
						<Drawer
							isOpen={item6isOpen}
							placement="right"
							onClose={item6onClose}
							size="md">
							<DrawerOverlay />
							<DrawerContent>
								<DrawerCloseButton />
								<DrawerHeader mt="-2" fontSize="35" my="-3">
									Zucchini & Ground Beef Orzo Casserole
								</DrawerHeader>

								<DrawerBody>
									<Text fontSize="30" pb={2}>
										Ingredients:{" "}
									</Text>

									<UnorderedList fontSize="18" ml={19}>
										<ListItem>1/4 cup milk</ListItem>
										<ListItem>1/4 cup Panko breadcrumbs</ListItem>
										<ListItem>1 1/2 lbs ground chicken</ListItem>
										<ListItem>2 cloves garlic, minced</ListItem>
										<ListItem>2 teaspoons minced fresh ginger</ListItem>
										<ListItem>2 Tablespoons minced scallions</ListItem>
										<ListItem>2 Tablespoons low sodium soy sauce</ListItem>
										<ListItem>1/4 teaspoon salt</ListItem>
										<ListItem>1/4 teaspoon black pepper</ListItem>
										<ListItem>1 1/2 teaspoons sesame oil</ListItem>
										<ListItem>1 1/2 teaspoons olive oil</ListItem>
										<ListItem>2 cloves garlic, minced</ListItem>
										<ListItem>1 teaspoon minced fresh ginger</ListItem>
										<ListItem>
											1 1/2 teaspoons crushed red pepper flakes, or more to
											taste
										</ListItem>
										<ListItem>3/4 cup orange marmalade</ListItem>
										<ListItem>1/4 cup hoisin sauce</ListItem>
									</UnorderedList>

									<Button mt={5}>Add Ingredients to Grocery List</Button>
									<br></br>
									<br></br>
								</DrawerBody>
							</DrawerContent>
						</Drawer>
					</ButtonGroup>
				</Card>
			</Flex>
		</Layout>
	);
};

export default Recipes;
