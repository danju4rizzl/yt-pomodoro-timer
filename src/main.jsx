import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import Fonts from "./Fonts.jsx"

const theme = extendTheme({
	fonts: {
		heading: "Montserrat",
		body: "Raleway"
	}
})

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<Fonts />
			<App />
		</ChakraProvider>
	</React.StrictMode>
)
