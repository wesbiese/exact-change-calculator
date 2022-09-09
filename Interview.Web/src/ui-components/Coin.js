import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

/**
 * React component for a round coin
 */
export default function Coin({ children, sx }) {

	const coinStyles = {
		alignItems: "center",
		border: "4px solid #aaa",
		background: "#ccc",
		borderRadius: "50%",
		display: "flex",
		height: 42,
		justifyContent: "space-around",
		width: 42,
	}

	return (
		<Box sx={{ display: "inline-block", ...sx }}>
			<Box sx={coinStyles}>
				<Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>{children}</Typography>
			</Box>
		</Box>
	)
}