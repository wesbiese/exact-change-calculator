﻿using Microsoft.AspNetCore.Mvc;

namespace Coins.Service.Controllers
{
	[Route("api")]
	[ApiController]
	public class CoinsController : ControllerBase
	{
		[HttpGet("coins")]
		public IActionResult GetCoins()
		{
			return Ok(new CoinResult
			{
				Currency = "USD",
				Symbol = "$",
				Denominations = new List<Coin>
				{
					new Coin("1¢", 1),
					new Coin("5¢", 5),
					new Coin("10¢", 10),
					new Coin("25¢", 25),
				}
			});
		}
	}

	public class Coin
	{
		public String? Label { get; set; }
		public int Value { get; set; }
		public Coin(string label, int value)
		{
			this.Label = label;
			this.Value = value;
		}
	}

	public class CoinResult
	{
		public String? Currency { get; set; }
		public String? Symbol { get; set; }
		public IEnumerable<Coin>? Denominations { get; set; }
	}
}