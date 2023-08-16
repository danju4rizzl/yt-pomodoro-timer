import { IconButton } from "@chakra-ui/react"
import { RxReset } from "react-icons/rx"

export default function ResetButton({ handleOnClick }) {
	return (
		<IconButton
			title="Reset timer"
			icon={<RxReset />}
			colorScheme="blackAlpha"
			onClick={handleOnClick}
		/>
	)
}
