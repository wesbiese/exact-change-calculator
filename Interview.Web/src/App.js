import { useState } from "react"

// UI Components
import Header from "./ui-components/Header"
import Box from "@mui/material/Box"
import CoinList from "./ui-components/CoinList"
import CurrencySelect from "./ui-components/CurrencySelect"
import DollarAmountInput from "./ui-components/DollarAmountInput"
import ExactChangeList from "./ui-components/ExactChangeList"
import Form from "./ui-components/Form"
import MenuItem from "@mui/material/MenuItem"
import NumCoinsField from "./ui-components/NumCoinsField"

import calcMinCoins from "./calcMinCoins"
import useGetCoins from "./useGetCoins"

/**
 * Main application
 */
export default function App() {

	// React state variable, useState() preserves value between renders, 20.22 is initial value
	const [amount, setAmount] = useState(20.22)

	const [currency, setCurrency] = useState("")
	
	// React hook to get 'coins' object on page load and as the currency selection changes
	const coins = useGetCoins(currency)
	const coinValues = coins.coinValues || []
	const coinValueMap = coins.coinValueMap
	const denominations = coins.denominations
	const symbol = coins.symbol

	// Calculate the minimum coins for a given lists of coin values and dollar amount
	const minCoins = calcMinCoins(coinValues, amount)
	const coinCount = minCoins.coinCount
	const exactChange = minCoins.exactChange

	return (
		<Box>
			<Header>Exact Change Calculator</Header>
			<Form>
				<CurrencySelect value={currency} setValue={setCurrency}>
					<MenuItem value="USD">USD ($)</MenuItem>
					<MenuItem value="Euro">Euro (€)</MenuItem>
					<MenuItem value="CAD">CAD ($)</MenuItem>
				</CurrencySelect>
				<CoinList label="Available Coins" denominations={denominations} />
				<DollarAmountInput value={amount} setValue={setAmount} symbol={symbol} />
				{coinCount &&
					<NumCoinsField value={coinCount} />
				}
				<ExactChangeList exactChange={exactChange} coinValueMap={coinValueMap} />
			</Form>
		</Box>
	)
}