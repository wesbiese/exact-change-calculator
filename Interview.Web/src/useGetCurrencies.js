import { useEffect, useState } from "react"

import { API_URL } from "./constants"

/**
 * React hook to fetch currencies from remote API
 * 
 * @returns list of currencies
 */
export default function useGetCurrencies() {

	// React state variable, useState() preserves value between renders, {} is initial value
	const [currencies, setCurrencies] = useState([])

	// React useEffect lifecycle function which runs when dependencies change
	useEffect(function() {
		fetch(`${API_URL}/currencies`)
			.then(function(response) {
				return response.json()
			})
			.then(function(data) {
				setCurrencies(data)
			})
	// Dependency list for this hook, if array is empty it only runs once
	}, [])

	return currencies
}
