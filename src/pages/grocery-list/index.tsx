import type { NextPage } from "next";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import {
	Text,
	Flex,
	Button,
	Checkbox,
	CheckboxGroup,
	Input,
	textDecoration
} from "@chakra-ui/react";

const GroceryList: NextPage = () => {
	const [groceries, setGroceries] = useState<string[]>(new Array());

	useEffect(() => {
		const g = localStorage.getItem("groceries");
		if (g) {
			const items = JSON.parse(g);
			if (items) {
				setGroceries(items);
			}
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("groceries", JSON.stringify(groceries));
	}, [groceries]);

	const handleAddItem = (): void => {
		const newItem = (document.getElementById("newItemInput") as HTMLInputElement).value;
		if (newItem) {
			setGroceries((prevItems: any) => [...prevItems, newItem]);
			(document.getElementById("newItemInput") as HTMLInputElement).value = "";
		}
	};

	const handleClearList = () => {
		setGroceries([]);
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
						<Button onClick={handleAddItem}>Add Item</Button>
						<Button onClick={handleClearList}>Clear List</Button>
					</Flex>
					<CheckboxGroup>
						{groceries.map((grocery, index) => (
							<Checkbox key={index}>{grocery}</Checkbox>
						))}
					</CheckboxGroup>
				</Flex>
			</Flex>
		</Layout>
	);
};

export default GroceryList;
