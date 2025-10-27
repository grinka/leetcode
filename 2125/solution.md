# 2125. Number of Laser Beams in a Bank
<a name="top"></a>

- [Problem](index)
- [Javascript Solution](#javascript-solution)
- [C# Solution](#c-solution)

## Approach
We need to calculate how many lasers can be set between two consequtive rows with beams only.
If there are any "empty" rows between them, they don't affect the number of lasers. If we have beams in rows 1, 2 and 3, we need to count lasers between rows 1 and 2, and lasers between 2 and 3. Lasers between 1 and 3 could not exist because of the second constraint of the problem.

If lasers are set between all possible beams, then their quantity between two rows equals to a product of sum of the beams in first row and sum of the beams in second row.


## Javascript Solution | 
- [top](#top)

```javascript
/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let res = 0, prev = 0;
    for(const row of bank) {
        const devices = [...row].reduce((s, c) => s + (+c), 0);
        if(devices > 0) {
            if(prev > 0) {
                res += devices * prev;
            }
            prev = devices;
        }
    }
    return res;
};
```

## C# Solution
- [top](#top)

### Solution 1

This solution looks "fancy" and uses `LINQ`. It even can be considered a one-lines (split on several lines for better readability). But it's slower.

```csharp
public class Solution {
    public int NumberOfBeams(string[] bank) {
        return bank
            .Select((row) => row.Count((c) => c == '1'))
            .Where(d => d > 0)
            .Aggregate((sum: 0, prev: 0),
                (acc, d) => (sum: acc.sum + acc.prev * d, prev: d))
            .sum;
    }
}
```

### Solution 2

This solution has same idea, but uses implicit loops instead of `LINQ`.

```csharp
public class Solution {
    public int NumberOfBeams(string[] bank) {
        var (result, prev) = (0, 0);
        foreach(var row in bank) {
            var devices = 0;
            foreach(var c in row) {
                if(c == '1') {
                    devices++;
                }
            }
            if(devices > 0) {
                result += devices * prev;
                prev = devices;
            }
        }

        return result;
    }
}
```