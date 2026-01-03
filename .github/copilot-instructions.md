# LeetCode Solutions Repository - AI Agent Instructions

## Repository Overview
This is a personal LeetCode solutions repository with problems organized by number ranges. Solutions are implemented in **JavaScript** and **C#**. Each problem has its own `index.md` file with problem description, examples, constraints, and solution code. 

## Directory Structure
- Problems are organized in range-based folders: `1-50/`, `51-100/`, `451-500/`, `1001-1050/`, etc.
- Individual problems: `{range}/{problem-number}/index.md` (e.g., `51-100/64/index.md`)
- Standalone problems outside ranges stored directly: `{number}/index.md` (e.g., `3190/index.md`)
- The `problems.js` file contains the master list of all problems with metadata (number, title, path, complexity level, runtime, beats %)

## Problem Document Format
Follow this exact structure when creating new problem files (see `3190/index.md` or `51-100/70/index.md` as reference):

```markdown
# {number}. {Problem Title}

- [Original Problem]({leetcode-url})
- [Solution](#solution)
  - [Javascript](#javascript)
  - [C#](#c)

## Problem
**Complexity: {Easy|Medium|Hard}**

{Problem description with markdown formatting}

### Example 1:
> **Input:** {input}\
> **Output:** {output}\
> **Explanation:** {explanation}

### Constraints:
- {constraint list}

## Solution

{Solution description, if any}

### Intuition
{Intuition description, if any}

### Approach
{Approach description, if any}

### {Language}
**Runtime: {runtime, if any}, Beats: {beats %, if any}**

[Top](#{anchor}) |
[Problem](#problem) |
[Solution](#solution) (<small>
    {Current Language} |
    [{Other Language}](#{anchor})
</small>)

\`\`\`{language}
{solution code}
\`\`\`
```

### Critical Format Rules:
1. **Navigation links**: Each solution section must have cross-reference links to Top, Problem, and other language solutions
2. **Anchor format**: Use lowercase with hyphens (e.g., `#70-climbing-stairs`, `#c`, `#javascript`)
3. **Language headers**: Match case exactly: "Javascript" (not JavaScript), "C#"
4. **Images**: Download example images to problem folder as `image.png`, `image-1.png` with `![Example 1](image.png)`
5. **Code blocks**: Include JSDoc/XML doc comments in solution code
6. If part of the code has HTML tags <sup> or similar, ensure they are preserved in markdown (do not put in code blocks). For example construction like this `1 <= nums.length <= 10<sup>4</sup>` should not be inside a code block. Use 1 <= nums.length <= 10<sup>4</sup> without backticks.

## Workflow for Adding New Problems

1. **Fetch description**: Use the LeetCode problem URL to extract full problem details
2. **Determine folder**: 
   - Problems 1-50 → `1-50/{number}/`
   - Problems 51-100 → `51-100/{number}/`
   - Problems 101-150 → `101-150/{number}/`
   - Problems 151-200 → `151-200/{number}/`
   - Problems 201-250 → `201-250/{number}/`
   - Problems 251-300 → `251-300/{number}/`
   - Problems 301-350 → `301-350/{number}/`
3. **Download images FIRST**: Check the fetched webpage for example images and download them immediately using `curl` before creating the file. LeetCode images are typically at `https://assets.leetcode.com/uploads/...`. Name them `image.png`, `image-1.png`, etc. **This step is critical and must not be skipped.**
4. **Create `index.md`**: Follow exact format above with proper navigation links and image references
5. **Update problems.js**: Add entry to `problems.js` in sorted position by problem number
6. **Commit changes**: Ensure all new files and the updated `problems.js` are committed together. Commit message should reference the problem number and title.

### Problems.js Entry Format:
```javascript
{ number: {number}, title: "{Problem Title}", path: "{range}/{number}/index", level: "{Easy|Medium|Hard}", runtime: {runtime}, beats: {beats} }
```
- Path format: `51-100/64/index` (do not include `.md`)
- Runtime: Integer number in milliseconds (e.g., `4`, `152`) or `null` if not available
- Beats: Decimal number (e.g., `53.48`, `100`) or `null` if not available
- Array should remain sorted by problem number

## Common Operations

### Download LeetCode Images:
```powershell
curl -o "c:\user\leetcode\{range}\{number}\image.png" "{leetcode-cdn-url}"
```

## Key Conventions
- Problem numbers are **not** sequential (gaps are normal)
- Links use `index` not `index.md` in markdown
- Backslashes `\` for line continuation in blockquotes
- Inline math with `<sup>` tags (e.g., `10<sup>9</sup>`)
- Solution sections can include optional **Intuition**, **Approach**, and **Complexity** subsections (see `3190/index.md`)
- Multiple solutions per language are allowed, numbered sequentially

## Don't
- Don't add problems that aren't explicitly provided by the user
- Don't modify the complexity level (use exact LeetCode classification)
- Don't reformat existing files unless specifically requested
- Don't create summary documents or changelogs
