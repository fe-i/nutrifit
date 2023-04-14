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
  Checkbox,
  CheckboxGroup
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
        {/*Push*/}
        <Card maxW="sm" height={500}>
          <CardBody textAlign="center">
            <Stack my="6" spacing="2" justifyContent="center">
              <Heading textAlign="center" size="md">
                Push
              </Heading>
              <Text textAlign="center">
                Push exercises are a type of strength training that involves pushing against resistance
                in a horizontal or vertical direction using the upper body muscles. These exercises primarily
                work the chest, shoulders, and triceps, but also engage other muscle groups like the back,
                core, and legs as stabilizers.
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
                <Text py="5">
                  <Checkbox defaultChecked>Barbell/Dumbbell Bench Press</Checkbox>
                  <br /><br />
                  <Checkbox defaultChecked>Incline Barbell/Dumbbell Bench Press</Checkbox>
                  <br /><br />
                  <Checkbox defaultChecked>Tricep Extensions/Pushdowns</Checkbox>
                  <br /><br />
                  <Checkbox defaultChecked>Dips</Checkbox>
                  <br /><br />
                  <Checkbox defaultChecked>Push Up</Checkbox>
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

        {/*Pull*/}
        <Card maxW="sm" height={500}>
          <CardBody textAlign="center">
            <Stack my="6" spacing="2">
              <Heading size="md" textAlign="center">
                Pull
              </Heading>
              <Text textAlign="center">
                Pull exercises are a type of strength training that involve pulling resistance towards the body,
                typically using the muscles of the back, biceps, and forearms. These exercises target the muscles
                used for pulling or rowing movements, such as the latissimus dorsi, rhomboids, and posterior deltoids.
                Common examples of pull exercises include pull-ups, rows, and curls.
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
                <Text py="5">
                <Checkbox defaultChecked>Deadlift</Checkbox>
                <br /><br />
                  <Checkbox defaultChecked>Pull/Chin Ups</Checkbox>
                  <br /><br />
                  <Checkbox defaultChecked>Lat-Pull Down</Checkbox>
                  <br /><br />
                  <Checkbox defaultChecked>Rows</Checkbox>
                  <br /><br />
                  <Checkbox defaultChecked>Bicep Curl</Checkbox>
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

        {/*Legs*/}
        <Card maxW="sm" height={500}>
          <CardBody textAlign="center">
            <Stack my="6" spacing="2">
              <Heading textAlign="center" size="md">
                Legs
              </Heading>
              <Text textAlign="center">
              Leg exercises are a type of strength training that focus on the muscles of the
              lower body, including the quadriceps, hamstrings, glutes, and calves. These
              exercises can be classified into two main categories: compound exercises, which
              involve multiple joints and muscle groups, and isolation exercises, which target
              specific muscles. Some common leg exercises include squats, lunges, deadlifts,
              leg press, and calf raises.

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
               <Text py="5">
                  <Checkbox defaultChecked>Barbell/Hack Squat </Checkbox>
                  <br /><br />
                    <Checkbox defaultChecked>Leg Press</Checkbox>
                    <br /><br />
                    <Checkbox defaultChecked>Leg Curl</Checkbox>
                    <br /><br />
                    <Checkbox defaultChecked>Leg Extension</Checkbox>
                    <br /><br />
                    <Checkbox defaultChecked>Calf Raises</Checkbox>
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
