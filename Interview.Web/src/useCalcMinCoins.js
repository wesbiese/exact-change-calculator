import { useEffect, useState } from "react"

import { API_URL } from "./constants"

/**
 * React hook to fetch minimum coins from remote API
 * 
 * @returns list of coins
 */
export default function useCalcMinCoins(amount) {

	// React state variable, useState() preserves value between renders, {} is initial value
	const [minCoins, setMinCoins] = useState({})

	// React useEffect lifecycle function which runs when dependencies change
	useEffect(function() {
		fetch(`${API_URL}/calc-min-coins?amount=${amount}`)
			.then(function(response) {
				return response.json()
			})
			.then(function(data) {
				setMinCoins(data)
			})
	// Dependency list for this hook, if array is empty it only runs once
	}, [amount])

	return minCoins
}
