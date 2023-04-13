import type { NextPage } from "next";
import { Text, Flex, Box } from "@chakra-ui/react";
import Layout from "@/components/layout";

const WorkoutPlan: NextPage = () => {
	return (
		<Layout title="Workout Plan">
			<Box
				w="100%"
				h="1900px"
				bgGradient="linear(to-r, pink.200, red.200, blue.200, blue.500)">
				<Flex
					flexDir="column"
					align="center"
					justify="center"
					px={{ base: 2, md: 2 }}></Flex>
			</Box>
		</Layout>
	);
};

export default WorkoutPlan;
