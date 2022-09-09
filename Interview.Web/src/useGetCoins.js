import { useEffect, useState } from "react"

import { API_URL } from "./constants"

/**
 * React hook to fetch coins from remote API
 * 
 * @returns list of coins
 */
export default function useGetCoins() {

	// React state variable, useState() preserves value between renders, {} is initial value
	const [coins, setCoins] = useState({})

	// React useEffect lifecycle function which runs when dependencies change
	useEffect(function() {
		fetch(`${API_URL}/coins`)
			.then(function(response) {
				return response.json()
			})
			.then(function(data) {

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
			})
	// Dependency list for this hook, if array is empty it only runs once
	}, [])

	return coins
}
