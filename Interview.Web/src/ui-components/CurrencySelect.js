import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"

export default function CurrencySelect({ children, value, setValue }) {

	function handleChangeCurrency(event) {
		setValue(event.target.value)
	}

	return (
		<FormControl fullWidth sx={{ marginBottom: 2, marginTop: 1 }}>
			<InputLabel id="currency-select-label">Currency</InputLabel>
			<Select
				labelId="currency-select-label"
				defaultValue = ""
				value={value}
				label="Currency"
				onChange={handleChangeCurrency}
			>
				{children}
			</Select>
		</FormControl>
	)
}