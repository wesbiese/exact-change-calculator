import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

/**
 * React component wrapping a form
 */
export default function Form({ children }) {
	return (
		<Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
			<Card sx={{ width: 500, minWidth: 275, marginTop: 3 }} elevation={10}>
				<CardContent>
					<Box component="form" noValidate autoComplete="off">
						{children}
					</Box>
				</CardContent>
			</Card>
		</Box>
	)
}