import { useEffect, useState } from "react"

import { API_URL, CURRENCIES } from "./constants"

/**
 * React hook to fetch coins from remote API
 * 
 * @param {String} selected currency
 * @returns list of coins
 */
export default function useGetCoins(currency) {

	// React state variable, useState() preserves value between renders, {} is initial value
	const [coins, setCoins] = useState({})

	// React useEffect lifecycle function which runs when dependencies change
	useEffect(function() {

		const data = CURRENCIES.filter(function(c) {
			return c.currency.toLowerCase() === currency.toLowerCase()
		}).shift()

		if(data) {

			// Create array of just coin values
			data.coinValues = data.denominations.map(function(d) {
				return d.value
			})

			// Create map of coin values to their label
			data.coinValueMap = new Map(
				data.denominations.map(function(d) {
					return [d.value, d.label]
				})
			)
			setCoins(data)
		}
	// Dependency list for this hook, if array is empty it only runs once
	}, [currency])

	return coins
}
