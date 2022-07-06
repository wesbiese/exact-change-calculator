import { useState } from "react"

// UI Components
import Header from "./ui-components/Header"
import Box from "@mui/material/Box"
import DollarAmountInput from "./ui-components/DollarAmountInput"
import ExactChangeList from "./ui-components/ExactChangeList"
import Form from "./ui-components/Form"
import NumCoinsField from "./ui-components/NumCoinsField"

import useCalcMinCoins from "./useCalcMinCoins"
import useGetCoins from "./useGetCoins"

/**
 * Main application
 */
export default function App() {

	// React state variable, useState() preserves value between renders, 20.22 is initial value
	const [amount, setAmount] = useState(20.22)

	// React hook to get 'coins' object on page load
	const coins = useGetCoins()
	const coinValues = coins.coinValues || []
	const coinValueMap = coins.coinValueMap
	const symbol = coins.symbol

	// Calculate the minimum coins for a given lists of coin values and dollar amount
	const minCoins = useCalcMinCoins(amount)
	const coinCount = minCoins.coinCount
	const exactChange = minCoins.exactChange

	return (
		<Box>
			<Header>Exact Change Calculator</Header>
			<Form>
				<DollarAmountInput value={amount} setValue={setAmount} symbol={symbol} />
				{coinCount &&
					<NumCoinsField value={coinCount} />
				}
				<ExactChangeList exactChange={exactChange} coinValueMap={coinValueMap} />
			</Form>
		</Box>
	)
}