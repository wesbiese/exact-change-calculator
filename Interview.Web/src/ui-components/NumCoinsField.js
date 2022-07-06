import TextField from "@mui/material/TextField"

/**
 * React component for minimum coin count
 */
export default function NumCoinsField({ value }) {
	return (
		<TextField
			label="Number of Coins"
			fullWidth
			readOnly={true}
			sx={{ marginTop: 3 }}
			value={value}
		/>
	)
}