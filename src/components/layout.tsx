import type { FC, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import Metadata from "./metadata";
import Header from "./header";

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({ title, children }) => {
	return (
		<>
			<Metadata title={title} />
			<Header />
			<Box mt={18} px={{ base: 6, sm: 18 }} pb={10}>
				{children}
			</Box>
		</>
	);
};

export default Layout;
