import Box from "@mui/material/Box"
import Coin from "./Coin"
import Typography from "@mui/material/Typography"

export default function ExactChangeList({ coinValueMap, exactChange }) {

	if(!exactChange || Object.entries(exactChange).length < 1) {
		return null
	}

	return (
		<Box sx={{ marginTop: 2, marginBottom: -1 }}>
			<Typography variant="caption" sx={{ color: "rgba(0, 0, 0, 0.6)" }}>Exact Change</Typography>
			<Box sx={{ marginTop: 1 }}>
				{Object.entries(exactChange).map(function([ coinValue, count ], i) {
					return (
						<Box key={coinValue} sx={{ display: "inline-block", marginBottom: 1, width: "25%" }}>
							<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
								<Coin>{coinValueMap.get(parseInt(coinValue))}</Coin>
								<Typography variant="caption" sx={{ color: "rgba(0, 0, 0, 0.6)", paddingLeft: 1 }}>x{count}</Typography>
							</Box>
						</Box>
					)
				})}
			</Box>
		</Box>
	)
}
