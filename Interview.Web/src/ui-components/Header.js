import AppBar from "@mui/material/AppBar"
import Typography from "@mui/material/Typography"

/**
 * React component for app header
 */
export default function Header({ children }) {
	return (
		<AppBar position="static">
			<Typography variant="h6" sx={{ padding: 1 }}>{children}</Typography>
		</AppBar>
		)
}