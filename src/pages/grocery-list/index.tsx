import type { NextPage } from "next";
import Layout from "@/components/layout";
import { useState } from "react";
import { Text, Flex, Button, Checkbox, CheckboxGroup, Input } from "@chakra-ui/react";

const GroceryList: NextPage = () => {
	const [items, setItems] = useState(new Array());

	const handleAddItem = (): void => {
		const newItem = (document.getElementById("newItemInput") as HTMLInputElement).value;
		if (newItem) {
			setItems((prevItems) => [...prevItems, newItem]);
			(document.getElementById("newItemInput") as HTMLInputElement).value = "";
		}
	};

	const handleClearList = () => {
		setItems([]);
	};

	return (
		<Layout title="Grocery List">
			<Flex flexDir="column" align="center" justify="center" px={{ base: 6, sm: 10 }}>
				<Text mx={10} my={10} fontSize="50">
					Grocery List
				</Text>
				<Flex flexDir="column" minW={{ base: "xs", md: "lg" }} gap={5}>
					<Input id="newItemInput" placeholder="Type item here" />
					<Flex flexDir="row" align="center" justify="center" gap={10}>
						<Button onClick={handleAddItem}>Add item</Button>
						<Button onClick={handleClearList}>Clear List</Button>
					</Flex>
					<CheckboxGroup>
						{items.map((item, index) => (
							<Checkbox key={index} value={item}>
								{item}
							</Checkbox>
						))}
					</CheckboxGroup>
				</Flex>
			</Flex>
		</Layout>
	);
};

export default GroceryList;
