/**
 * Calculates minimum coins needed to make change for a given dollar amount
 * 
 * @param {Array<Number>} coinValues List of coin values
 * @param {Number} amount Decimal dollar amount
 * @param {Number} scale Number of cents per dollar, defaults to 100
 * @returns Returns object with minimum coin count and exact change
 */
export default function calcMinCoins(coinValues, amount, scale = 100) {

	coinValues.sort((a, b) => a - b)
	amount = Math.floor(Number(amount) * scale)

	// Default response values
	let coinCount = 0
	let exactChange = {}

	// If amount not possible, set coin count to -1
	if ((amount !== 0 && coinValues[0] > amount) || coinValues.length < 1) {
		coinCount = -1
	}
	// If amount > 0, calculate the coins necessary to make change
	else if(amount > 0) {
		let mins = new Array(amount + 1)
		mins[0] = 0
		let coins = new Array(amount + 1)
		coins[0] = 0

		// Calculate minimum coin count using dynamic programming
		for(let j = 1; j <= amount; j++) {
			let minimum = Number.MAX_SAFE_INTEGER
			let coin = 0
			for(let i = 0; i < coinValues.length; i++) {
				if(j >= coinValues[i]) {
					if (1 + mins[j - coinValues[i]] < minimum) {
						minimum = 1 + mins[j - coinValues[i]]
						coin = i
					}
				}
			}
			mins[j] = minimum
			coins[j] = coin
		}
		// Check if exact change was possible
		if(mins[amount] < Number.MAX_SAFE_INTEGER) {
			coinCount = mins[amount]
			// Compute the exact change to match the minimum coin count
			let sum = amount
			while (sum > 0) {
				const coinValue = coinValues[coins[sum]]
				if(exactChange.hasOwnProperty(coinValue)) {
					exactChange[coinValue]++
				}
				else {
					exactChange[coinValue] = 1
				}
				sum = sum - coinValue
			}
		}
		// If amount not possible, set coin count to -1
		else {
			coinCount = -1
		}
	}

	return {
		coinCount,
		exactChange
	}
}