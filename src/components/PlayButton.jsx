import { IconButton } from "@chakra-ui/react"
import { RxPause, RxPlay, RxStop } from "react-icons/rx"

function PlayButton({ isStarted, currentTime, handleClick }) {
	return (
		<IconButton
			title="Play or Pause timer"
			colorScheme="blackAlpha"
			icon={
				!isStarted ? <RxPlay /> : currentTime === 0 ? <RxStop /> : <RxPause />
			}
			onClick={handleClick}
		/>
	)
}

export default PlayButton
