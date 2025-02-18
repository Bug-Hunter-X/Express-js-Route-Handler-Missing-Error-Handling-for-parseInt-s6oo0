# Express.js Route Handler Missing Error Handling for parseInt

This repository demonstrates a common error in Express.js route handlers: missing error handling when converting parameters to numbers using `parseInt`.  The code attempts to find a user by ID, but lacks proper validation and error handling for non-numeric IDs, potentially leading to unexpected behavior or crashes.

## Bug
The `bug.js` file contains the problematic code.  It uses `parseInt` to convert the user ID from a string to a number but doesn't handle cases where the ID is not a valid integer.  This can lead to silent failures or crashes, depending on the implementation of the `users` array and subsequent processing of `user` variable.

## Solution
The `bugSolution.js` file provides a corrected version.  It explicitly checks if `parseInt(userId)` is `NaN` (Not a Number) and handles this case gracefully by returning an appropriate error response.  It also demonstrates more robust error handling that could be extended to other potential issues (e.g., database errors).