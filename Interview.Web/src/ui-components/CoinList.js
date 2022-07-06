import Box from "@mui/material/Box"
import Coin from "./Coin"
import Typography from "@mui/material/Typography"

/**
 * React component displaying a list of coins
 */
export default function CoinList({ label, denominations }) {
	if (!denominations || denominations.length === 0) {
		return null
	}
	return (
		<Box sx={{ marginBottom: 3 }}>
			<Typography variant="caption" sx={{ color: "rgba(0, 0, 0, 0.6)" }}>{label}</Typography>
			<Box sx={{ marginTop: 1 }}>
				{denominations.map(function(d) {
					return <Coin key={d.value} sx={{ marginRight: 1 }}>{d.label}</Coin>
				})}
			</Box>
		</Box>
	)
}