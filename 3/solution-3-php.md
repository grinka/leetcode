# 3. Longest Substring Without Repeating Characters

- [Problem](index)
- [Solution 1. Javascript](solution-1-javascript)
- [Solution 2. C#](solution-2-csharp)

## PHP Solution

```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring($s) {
        if(strlen($s) === 0) {
            return 0;
        }
        $maxLength = 0;
        $maxbegin = 0;
        for($i = 0; $i < strlen($s); $i++) {
            $p = strpos($s, $s[$i], $maxbegin);
            if($p == $i) {
                if($i - $maxbegin > $maxLength) {
                    $maxLength = $i - $maxbegin;
                }
            } else {
                $maxbegin = $p + 1;
            }
        }
        
        return $maxLength + 1;
    }
}
```