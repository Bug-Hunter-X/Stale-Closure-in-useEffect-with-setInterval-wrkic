# Stale Closure in useEffect with setInterval

This repository demonstrates a common issue in React applications involving stale closures within `useEffect` hooks when using `setInterval`.  The problem arises when a callback function within `setInterval` uses a variable from the component's scope that has been updated between intervals. This leads to the callback operating on an outdated value, resulting in unexpected behavior.

The `bug.js` file illustrates the incorrect implementation.  The `bugSolution.js` file presents the corrected version, ensuring that the count updates correctly.