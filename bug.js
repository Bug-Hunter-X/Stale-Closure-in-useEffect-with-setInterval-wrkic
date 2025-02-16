```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a closure to update the count in an interval
    const intervalId = setInterval(() => {
      setCount(count + 1); // This will not update correctly because count is a stale closure
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```