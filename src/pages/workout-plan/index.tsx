import type { NextPage } from "next";
import { Text, Flex } from "@chakra-ui/react";
import Layout from "@/components/layout";

// export async function getServerSideProps() {
//   const response = await fetch("https://api.api-ninjas.com/v1/exercises");
//   const exercises = await response.json();
//   return { props: { exercises } };
// }

const exercises = [{ id: "q1", name: "v" }];

const WorkoutPlan: NextPage = () => {
	return (
		<Layout title="Workout Plan">
			<Flex flexDir="column" align="center" justify="center" px={{ base: 2, md: 16 }}>
				{exercises.map((exercise) => (
					<Text key={exercise.id}>{exercise.name}</Text>
				))}
			</Flex>
		</Layout>
	);
};

export default WorkoutPlan;
