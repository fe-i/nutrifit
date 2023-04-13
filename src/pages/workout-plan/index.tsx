import type { NextPage } from "next";
import { Text, Flex, Box } from "@chakra-ui/react";
import Layout from "@/components/layout";

const exercises = [{ id: "q1", name: "v" }];

const WorkoutPlan: NextPage = () => {
	return (
		<Layout title="Workout Plan">
			<Box w="100%" h="1900px" bgGradient="linear(to-r, green.200, pink.500)" />;
			<Flex flexDir="column" align="center" justify="center" px={{ base: 2, md: 16 }}>
				{exercises.map((exercise) => (
					<Text key={exercise.id}>{exercise.name}</Text>
				))}
			</Flex>
		</Layout>
	);
};

export default WorkoutPlan;
