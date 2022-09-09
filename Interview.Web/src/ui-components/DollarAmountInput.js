import InputAdornment from "@mui/material/InputAdornment"
import TextField from "@mui/material/TextField"
import NumberFormat from "react-number-format"

/**
 * React controlled input component for dollar amount
 */
export default function DollarAmountInput({ symbol, value, setValue }) {

	// Set value when input field changes
	function handleValueChange(value) {
		setValue(value.formattedValue)
	}

	return (
		<NumberFormat
			customInput={TextField}
			id="amount"
			label="Amount"
			fullWidth
			InputProps={{
				startAdornment: <InputAdornment position="start">{symbol}</InputAdornment>
			}}
			value={value}
			isNumericString={true}
			fixedDecimalScale={2}
			decimalScale={2}
			inputMode="numeric"
			onValueChange={handleValueChange}
		/>
	)
}