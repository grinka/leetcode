# 122. Best Time to Buy and Sell Stock II

- [Original Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the i<sup>th</sup> day.

On each day, you may decide to buy and/or sell the stock. You can only hold **at most one** share of the stock at any time. However, you can sell and buy the stock multiple times on the same day, ensuring you never hold more than one share of the stock.

Find and return *the maximum profit you can achieve*.

### Example 1:
> **Input:** prices = [7,1,5,3,6,4]\
> **Output:** 7\
> **Explanation:** Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.\
> Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.\
> Total profit is 4 + 3 = 7.

### Example 2:
> **Input:** prices = [1,2,3,4,5]\
> **Output:** 4\
> **Explanation:** Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.\
> Total profit is 4.

### Example 3:
> **Input:** prices = [7,6,4,3,1]\
> **Output:** 0\
> **Explanation:** There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

### Constraints:
- 1 <= prices.length <= 3 * 10<sup>4</sup>
- 0 <= prices[i] <= 10<sup>4</sup>

## Solution

### Javascript

[Top](#122-best-time-to-buy-and-sell-stock-ii) |
[Problem](#problem) |
[Solution](#solution) (<small>Javascript</small>)

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let sellPrice = buyPrice;
    let sum = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > sellPrice) {
            sellPrice = prices[i];
        } else {
            if(sellPrice > buyPrice) {
                sum += sellPrice - buyPrice;
            }
            sellPrice = buyPrice = prices[i];
        }
    }
    if(sellPrice > buyPrice) {
        sum += sellPrice - buyPrice;
    }
    return sum;
};
```
