# 3433. Count Mentions Per User

- [Original Problem](https://leetcode.com/problems/count-mentions-per-user/description/)
- [Solution](#solution)
  - [Javascript](#javascript)

## Problem
**Complexity: Medium**

You are given an integer `numberOfUsers` representing the total number of users and an array `events` of size `n x 3`.

Each `events[i]` can be either of the following two types:

1. **Message Event:** `["MESSAGE", "timestamp_i", "mentions_string_i"]`
   - This event indicates that a set of users was mentioned in a message at `timestamp_i`.
   - The `mentions_string_i` string can contain one of the following tokens:
     - `id<number>`: where `<number>` is an integer in range `[0, numberOfUsers - 1]`. There can be multiple ids separated by a single whitespace and may contain duplicates. This can mention even the offline users.
     - `ALL`: mentions all users.
     - `HERE`: mentions all online users.

2. **Offline Event:** `["OFFLINE", "timestamp_i", "id_i"]`
   - This event indicates that the user `id_i` had become offline at `timestamp_i` for 60 time units. The user will automatically be online again at time `timestamp_i + 60`.

Return an array `mentions` where `mentions[i]` represents the number of mentions the user with id `i` has across all `MESSAGE` events.

All users are initially online, and if a user goes offline or comes back online, their status change is processed before handling any message event that occurs at the same timestamp.

**Note** that a user can be mentioned multiple times in a single message event, and each mention should be counted separately.

### Example 1:
> **Input:** numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","71","HERE"]]\
> **Output:** [2,2]\
> **Explanation:**
> - Initially, all users are online.
> - At timestamp 10, `id1` and `id0` are mentioned. `mentions = [1,1]`
> - At timestamp 11, `id0` goes offline.
> - At timestamp 71, `id0` comes back online and `"HERE"` is mentioned. `mentions = [2,2]`

### Example 2:
> **Input:** numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","12","ALL"]]\
> **Output:** [2,2]\
> **Explanation:**
> - Initially, all users are online.
> - At timestamp 10, `id1` and `id0` are mentioned. `mentions = [1,1]`
> - At timestamp 11, `id0` goes offline.
> - At timestamp 12, `"ALL"` is mentioned. This includes offline users, so both `id0` and `id1` are mentioned. `mentions = [2,2]`

### Example 3:
> **Input:** numberOfUsers = 2, events = [["OFFLINE","10","0"],["MESSAGE","12","HERE"]]\
> **Output:** [0,1]\
> **Explanation:**
> - Initially, all users are online.
> - At timestamp 10, `id0` goes offline.
> - At timestamp 12, `"HERE"` is mentioned. Because `id0` is still offline, they will not be mentioned. `mentions = [0,1]`

### Constraints:
- `1 <= numberOfUsers <= 100`
- `1 <= events.length <= 100`
- `events[i].length == 3`
- `events[i][0]` will be one of `MESSAGE` or `OFFLINE`.
- 1 <= int(events[i][1]) <= 10<sup>5</sup>
- The number of `id<number>` mentions in any `"MESSAGE"` event is between `1` and `100`.
- `0 <= <number> <= numberOfUsers - 1`
- It is guaranteed that the user id referenced in the `OFFLINE` event is online at the time the event occurs.

## Solution

### Intuition

There are 3 kinds of messages:

1. **Direct message by ID.** Increase the counter for every listed Id
2. **Message to ALL.** Increase counters for all users.
3. **Message HERE.** Increase counters for only online users.

So at any moment when we receive the HERE message, we need to know which users are online and which are offline. To do so it's enough to:

- Sort all messages by timestamp in ascending order. To guarantee that offline operation will be registered before the MESSAGE command, use additional condition in sorting
- When OFFLINE command received, store the nextOnline time for the user. It equals to the command timestamp + 60
- When HERE message received, check all users in the list and see:
  - if nextOnline time for the given user is less or equal to the current (command) timestamp, it means that user never went offline or went offline and then came back online already. Increment messages counter for this user.
  - if it's greater, it means, that user went offline and not back online yet. Do not increment the counter.

### Approach

1. Create new copy of the events array, converting timestamp to the number. It allows to avoid string comparing issue when string 2 is greater than string 10
2. Sort this array in ascending order by timestamp. If timestamp is the same, OFFLINE command should go first
3. Initialize nextOnline and result arrays with 0
4. Loop over all items in the sorted events array:
   - If command is OFFLINE, update the nextOnline value for the user
   - Else - command is MESSAGE. Check the mentions values:
     - If it's ALL or HERE - go through all users. For every user increment counter if:
       - mentions is ALL (all users should be updated) or
       - nextOnline value for the user is less or equal to the command timestamp
     - Else - split the list of IDs and update every user with given Id

### Complexity

- **Time complexity:** O(n*log(n)) - where n is length of the events array
- **Space complexity:** O(numberOfUsers)

### Javascript

[Top](#3433-count-mentions-per-user) |
[Problem](#problem) |
[Solution](#solution) (<small>Javascript</small>)

```javascript
/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function(numberOfUsers, events) {
    const lined = events.map((x) => [x[0], Number(x[1]), x[2]]).sort((a, b) => 
        (
            a[1] > b[1] || 
            (a[1] === b[1] && a[0] === 'MESSAGE' && b[0] === 'OFFLINE')
        ) ? 1 : -1);

    const nextOnline = Array(numberOfUsers).fill(0);
    const result = Array(numberOfUsers).fill(0);

    for(let [ev, t, mentions] of lined) {
        if(ev === 'OFFLINE') {
            nextOnline[Number(mentions)] = 60 + Number(t);
        } else {
            if(mentions === 'ALL' || mentions === 'HERE') {
                for(let i = 0; i < numberOfUsers; i++) {
                    if(nextOnline[i] <= Number(t) || mentions === 'ALL') {
                        result[i]++;
                    }
                }
            } else {
                for(let id of mentions.split(' ')) {
                    const idIdx = Number(id.trim().substring(2));
                    result[idIdx]++;
                }
            }
        }
    }

    return result;

};
```
