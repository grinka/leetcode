# 121. Best Time to Buy and Sell Stock

- [Original Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)
- [Solution](#solution)
  - [Javascript](#javascript)
  - [C#](#c)

## Problem
**Complexity: Easy**

You are given an array `prices` where `prices[i]` is the price of a given stock on the i<sup>th</sup> day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

### Example 1:
> **Input:** prices = [7,1,5,3,6,4]\
> **Output:** 5\
> **Explanation:** Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.\
> Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

### Example 2:
> **Input:** prices = [7,6,4,3,1]\
> **Output:** 0\
> **Explanation:** In this case, no transactions are done and the max profit = 0.

### Constraints:
- 1 <= prices.length <= 10<sup>5</sup>
- 0 <= prices[i] <= 10<sup>4</sup>

## Solution

### Javascript

[Top](#121-best-time-to-buy-and-sell-stock) |
[Problem](#problem) |
[Solution](#solution) (<small>
    Javascript |
    [C#](#c)
</small>)

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const maxes = [];
    maxes[prices.length - 1] = prices[prices.length - 1];
    for(let i = prices.length - 2; i >= 0; i--) {
        maxes[i] = Math.max(maxes[i+1], prices[i]);
    }
    let min = prices[0];
    let profit = 0;
    for(let i = 0; i < prices.length - 1; i++) {
        min = Math.min(min, prices[i]);
        profit = Math.max(profit, maxes[i] - min);
    }
    return profit;
};
```

### C#

[Top](#121-best-time-to-buy-and-sell-stock) |
[Problem](#problem) |
[Solution](#solution) (<small>
    [Javascript](#javascript) |
    C#
</small>)

```csharp
public class Solution {
    public int MaxProfit(int[] prices) {
        if(prices.Length < 2) {
            return 0;
        }
        var l = prices.Length;
        var maxPrices = new int[l];
        var minPrices = new int[l];

        minPrices[0] = prices[0];
        maxPrices[l - 1] = prices[l - 1];
        for(var i = 1; i < l;i++) {
            if(prices[i] < minPrices[i-1]) {
                minPrices[i] = prices[i];
            } else {
                minPrices[i] = minPrices[i-1];
            }
            if(prices[l-i-1] > maxPrices[l-i]) {
                maxPrices[l-i-1] = prices[l-i-1];
            } else {
                maxPrices[l-i-1] = maxPrices[l-i];
            }
        }
        
        var max = maxPrices[1] - minPrices[0];
        for(var j = 1; j < l - 1; j++) {
            if(max < (maxPrices[j+1] - minPrices[j]))
                max = maxPrices[j+1] - minPrices[j];
        }
        
        return max < 0 ? 0 : max;
    }
}
```
