import type { NextPage } from "next";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  Flex,
  Button,
  useDisclosure,
  Stack,
  Card,
  CardBody,
  Heading,
  Center,
} from "@chakra-ui/react";

import Layout from "@/components/layout";
const WorkoutPlan: NextPage = () => {
  const {
    isOpen: item1isOpen,
    onOpen: item1onOpen,
    onClose: item1onClose,
  } = useDisclosure();
  const {
    isOpen: item2isOpen,
    onOpen: item2onOpen,
    onClose: item2onClose,
  } = useDisclosure();
  const {
    isOpen: item3isOpen,
    onOpen: item3onOpen,
    onClose: item3onClose,
  } = useDisclosure();

  return (
    <Layout title="Workout Plan">
      <Text my={8} fontSize="5xl" textAlign="center">
        <strong>Workout Splits</strong>
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={10}
        m="6"
      >
        {/*Upper Lower */}
        <Card maxW="sm" height={500}>
          <CardBody textAlign="center">
            <Stack my="6" spacing="2" justifyContent="center">
              <Heading textAlign="center" size="md">
                Upper/Lower
              </Heading>
              <Text textAlign="center">
                This workout split involves dividing your training into two main
                sessions: upper body and lower body. Typically, you would train
                your upper body (chest, back, shoulders, and arms) on one day
                and your lower body (legs, glutes, and calves) on another day.
                This split is popular because it allows you to focus on specific
                muscle groups without overworking them.
              </Text>
            </Stack>
            <Button
              style={{ margin: "0 auto" }}
              variant="solid"
              colorScheme="red"
              onClick={item1onOpen}
            >
              View Workout
            </Button>
          </CardBody>
          <Modal isOpen={item1isOpen} onClose={item1onClose} size="xl">
            <ModalOverlay />

            <ModalContent>
              <ModalHeader>
                <Heading>Exercises</Heading>
              </ModalHeader>
              <ModalBody>
                <Text>
                  Day 1: Upper Body Warm up: 10 minutes on the rowing machine
                  Bench press: 4 sets of 8 reps Bent-over rows: 4 sets of 10
                  reps Seated military press: 3 sets of 12 reps Pull-ups: 3 sets
                  of 10 reps Bicep curls: 3 sets of 12 reps Tricep extensions: 3
                  sets of 12 reps Day 2: Lower Body Warm up: 10 minutes on the
                  stationary bike Squats: 4 sets of 8 reps Romanian deadlifts: 4
                  sets of 10 reps Leg press: 3 sets of 12 reps Calf raises: 3
                  sets of 15 reps Plank: 3 sets of 60 seconds Bicycle crunches:
                  3 sets of 20 reps Day 3: Rest Day 4: Upper Body Warm up: 10
                  minutes on the elliptical machine Incline bench press: 4 sets
                  of 8 reps Pull-downs: 4 sets of 10 reps Seated dumbbell press:
                  3 sets of 12 reps Dumbbell rows: 3 sets of 12 reps Hammer
                  curls: 3 sets of 12 reps Skull crushers: 3 sets of 12 reps Day
                  5: Lower Body Warm up: 10 minutes on the stair climber
                  Deadlifts: 4 sets of 8 reps Lunges: 4 sets of 10 reps Leg
                  curls: 3 sets of 12 reps Leg extensions: 3 sets of 12 reps
                  Plank: 3 sets of 60 seconds Bicycle crunches: 3 sets of 20
                  reps Day 6-7: Rest
                </Text>
              </ModalBody>
              <ModalFooter>
                <Button
                  bg="red.400"
                  textColor="white"
                  mr={4}
                  mb={4}
                  _hover={{ bg: "red.500" }}
                  onClick={item1onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Card>

        {/*Push Pull Legs*/}
        <Card maxW="sm" height={500}>
          <CardBody textAlign="center">
            <Stack my="6" spacing="2">
              <Heading size="md" textAlign="center">
                Push Pull Legs
              </Heading>
              <Text textAlign="center">
                This workout split involves dividing your training into three
                main sessions: push, pull, and legs. On push days, you would
                train muscles involved in pushing exercises, such as chest,
                triceps, and shoulders. On pull days, you would train muscles
                involved in pulling exercises, such as back and biceps. On leg
                days, you would train muscles in your lower body. This split is
                popular because it allows you to train specific muscle groups
                while still giving your body enough rest.
              </Text>
            </Stack>
            <Button variant="solid" colorScheme="red" onClick={item2onOpen}>
              View Workout
            </Button>
          </CardBody>
          <Modal isOpen={item2isOpen} onClose={item2onClose} size="xl">
            <ModalOverlay />

            <ModalContent>
              <ModalHeader>
                <Heading>Exercises</Heading>
              </ModalHeader>
              <ModalBody>
                <Text>
                  Monday - Push Barbell bench press - 4 sets of 6-8 reps Incline
                  dumbbell press - 3 sets of 8-10 reps Shoulder press - 4 sets
                  of 6-8 reps Lateral raises - 3 sets of 10-12 reps Tricep
                  pushdowns - 3 sets of 10-12 reps Skull crushers - 3 sets of
                  10-12 reps Tuesday - Pull Deadlifts - 4 sets of 6-8 reps
                  Pull-ups - 3 sets of 8-10 reps Seated rows - 4 sets of 8-10
                  reps Dumbbell curls - 3 sets of 10-12 reps Hammer curls - 3
                  sets of 10-12 reps Face pulls - 3 sets of 12-15 reps Wednesday
                  - Rest Thursday - Legs Squats - 4 sets of 6-8 reps Romanian
                  deadlifts - 3 sets of 8-10 reps Leg press - 4 sets of 8-10
                  reps Leg curls - 3 sets of 10-12 reps Calf raises - 3 sets of
                  12-15 reps Friday - Push Incline bench press - 4 sets of 6-8
                  reps Dumbbell bench press - 3 sets of 8-10 reps Arnold press -
                  4 sets of 6-8 reps Front raises - 3 sets of 10-12 reps Tricep
                  overhead extensions - 3 sets of 10-12 reps Cable flyes - 3
                  sets of 10-12 reps Saturday - Pull Barbell rows - 4 sets of
                  6-8 reps Chin-ups - 3 sets of 8-10 reps Lat pulldowns - 4 sets
                  of 8-10 reps Preacher curls - 3 sets of 10-12 reps Cable curls
                  - 3 sets of 10-12 reps Reverse flyes - 3 sets of 12-15 reps
                  Sunday - Rest
                </Text>
              </ModalBody>
              <ModalFooter>
                <Button
                  bg="red.400"
                  textColor="white"
                  mr={4}
                  mb={4}
                  _hover={{ bg: "red.500" }}
                  onClick={item2onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Card>

        {/* Bro Split*/}
        <Card maxW="sm" height={500}>
          <CardBody textAlign="center">
            <Stack my="6" spacing="2">
              <Heading textAlign="center" size="md">
                Bro Split
              </Heading>
              <Text textAlign="center">
                The term "bro split" is sometimes used to describe a workout
                split that involves training each muscle group once per week.
                For example, you might do chest on Monday, back on Tuesday,
                shoulders on Wednesday, legs on Thursday, and arms on Friday.
                This split is popular among bodybuilders who are looking to
                build muscle size and definition in specific areas. However, it
                can be less effective for overall strength and fitness gains, as
                it may not allow for enough frequency and volume for each muscle
                group.
              </Text>
            </Stack>
            <Button variant="solid" colorScheme="red" onClick={item3onOpen}>
              View Workout
            </Button>
          </CardBody>
          <Modal isOpen={item3isOpen} onClose={item3onClose} size="xl">
            <ModalOverlay />

            <ModalContent>
              <ModalHeader>
                <Heading>Exercises</Heading>
              </ModalHeader>
              <ModalBody>
                <Text>
                  Monday - Chest Barbell Bench Press: 4 sets x 8-12 reps
                  Dumbbell Flyes: 3 sets x 10-12 reps Incline Dumbbell Press: 3
                  sets x 8-12 reps Cable Crossovers: 3 sets x 10-12 reps Tuesday
                  - Back Deadlift: 4 sets x 6-8 reps Wide-Grip Pull-Ups: 3 sets
                  x 10-12 reps Seated Rows: 3 sets x 10-12 reps One-Arm Dumbbell
                  Rows: 3 sets x 10-12 reps Wednesday - Rest Thursday - Legs
                  Barbell Squats: 4 sets x 8-10 reps Leg Press: 3 sets x 10-12
                  reps Leg Extensions: 3 sets x 10-12 reps Lying Leg Curls: 3
                  sets x 10-12 reps Standing Calf Raises: 3 sets x 10-12 reps
                  Friday - Shoulders Seated Dumbbell Press: 4 sets x 8-10 reps
                  Front Dumbbell Raises: 3 sets x 10-12 reps Side Lateral
                  Raises: 3 sets x 10-12 reps Reverse Flyes: 3 sets x 10-12 reps
                  Saturday - Arms Barbell Curls: 3 sets x 10-12 reps Skull
                  Crushers: 3 sets x 10-12 reps Preacher Curls: 3 sets x 10-12
                  reps Cable Tricep Extensions: 3 sets x 10-12 reps Hammer
                  Curls: 3 sets x 10-12 reps Concentration Curls: 3 sets x 10-12
                  reps Sunday - Rest
                </Text>
              </ModalBody>
              <ModalFooter>
                <Button
                  bg="red.400"
                  textColor="white"
                  mr={4}
                  mb={4}
                  _hover={{ bg: "red.500" }}
                  onClick={item3onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Card>
      </Flex>
    </Layout>
  );
};

export default WorkoutPlan;
