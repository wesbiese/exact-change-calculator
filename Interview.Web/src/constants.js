export const API_URL = "http://localhost:5063/api"

export const CURRENCIES = [{
		currency: "USD",
		symbol: "$",
		denominations: [
			{ label: "1¢", value: 1 },
			{ label: "5¢", value: 5 },
			{ label: "10¢", value: 10 },
			{ label: "25¢", value: 25 }
		]
	}, {
		currency: "Euro",
		symbol: "€",
		denominations: [
			{ label: "1c", value: 1 },
			{ label: "2c", value: 2 },
			{ label: "5c", value: 5 },
			{ label: "10c", value: 10 },
			{ label: "20c", value: 20 },
			{ label: "50c", value: 50 },
			{ label: "1€", value: 100 },
			{ label: "2€", value: 200 }
		]
	}
]
