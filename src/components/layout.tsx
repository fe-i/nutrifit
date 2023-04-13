import type { FC, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import Metadata from "./metadata";
import Header from "./header";

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({ title, children }) => {
	return (
		<>
			<Metadata title={title} />
			<Header />
			<Box mt={32} px={{ base: 8, sm: 20 }} py={14}>
				{children}
			</Box>
		</>
	);
};

export default Layout;
