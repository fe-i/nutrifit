import type { FC, PropsWithChildren } from "react";
import {
	Stack,
	Box,
	IconButton,
	Image,
	useDisclosure,
	Flex,
	useColorModeValue,
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
			bgColor={router.pathname === path ? "red.200" : "none"}
			href={path}
			_hover={{
				bg: router.pathname !== path && "gray.200"
			}}>
			{label}
		</Box>
	);
};

const Header: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box bg="gray.100" px={4}>
			<Flex
				h={{ base: 28, md: 24 }}
				px={5}
				alignItems={"center"}
				justifyContent={"space-between"}>
				<IconButton
					as={Button}
					size={"md"}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={"Open Menu"}
					display={{ md: "none" }}
					onClick={isOpen ? onClose : onOpen}
				/>
				<Link href="/">
					<Image src="/logo-no-background.png" alt="Logo" w={{ base: 20, md: 24 }} />
				</Link>
				<Flex as="nav" display={{ base: "none", md: "flex" }}>
					{links.map((link, _) => (
						<PageLink key={_} {...link} />
					))}
				</Flex>
				<Flex px={4} />
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
