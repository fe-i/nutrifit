import type { NextPage } from "next";
import { Text, Flex } from "@chakra-ui/react";
import Layout from "@/components/layout";

const Home: NextPage = () => {
	return (
		<Layout title="Home">
			<Flex flexDir="column" align="center" justify="center" px={{ base: 2, md: 16 }}>
				<Text mx={10} my={10} fontSize="50"></Text>
			</Flex>
		</Layout>
	);
};

export default Home;
