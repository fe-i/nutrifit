import type { NextPage } from "next";
import { Text, Flex, Heading } from "@chakra-ui/react";
import Layout from "@/components/layout";

const Home: NextPage = () => {
	return (
		<Layout title="Home">
			<Flex flexDir="column" align="center" justify="center" px={{ base: 2, md: 16 }}>
				<Heading>NutriFit</Heading>
			</Flex>
		</Layout>
	);
};

export default Home;
