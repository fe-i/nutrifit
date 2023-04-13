import type { FC, PropsWithChildren } from "react";
import {
	Stack,
	Box,
	IconButton,
	Image,
	useDisclosure,
	Flex,
	useColorModeValue,
	HStack,
	Menu,
	MenuButton,
	Avatar,
	MenuList,
	MenuItem,
	MenuDivider,
	Button
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const links = [
	{ label: "Workout Plan", path: "/workout-plan" },
	{ label: "Nutritional Recipes", path: "/recipes" },
	{ label: "Grocery List", path: "/grocery-list" }
];

const PageLink: FC<PropsWithChildren<{ label: string; path: string }>> = ({ label, path }) => {
	const router = useRouter();

	return (
		<Box
			as={Link}
			px={3}
			py={{ base: 2, md: 1 }}
			rounded="xl"
			fontWeight={router.pathname === path ? "semibold" : "normal"}
			bgColor={router.pathname === path ? useColorModeValue("red.200", "red.400") : "none"}
			href={path}
			_hover={{
				bg: router.pathname !== path && useColorModeValue("gray.200", "gray.700")
			}}>
			{label}
		</Box>
	);
};

const Header: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
			<Flex h={24} px={5} alignItems={"center"} justifyContent={"space-between"}>
				<IconButton
					size={"md"}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={"Open Menu"}
					display={{ md: "none" }}
					onClick={isOpen ? onClose : onOpen}
				/>
				<HStack spacing={8} alignItems={"center"} justifyContent={"space-evenly"}>
					<Link href="/">
						<Box boxSize="50px">
							<Image src="/logo-no-background.png" alt="Logo" />
						</Box>
					</Link>

					<HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
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
							minW={0}>
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
	);
};

export default Header;
