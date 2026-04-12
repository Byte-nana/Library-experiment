# 📚 React Query Study Log

## 1. Problem of Using React Hooks for Data Fetching

When I used basic React hooks like `useEffect` and `custom hooks` for data fetching, I faced several limitations:

### ❌ 1. No Caching

- Every time the component re-renders or remounts, the data is fetched again
- Leads to unnecessary network requests
- Difficult to reuse previously fetched data

### ❌ 2. No Retry Mechanism

- If an error occurs during fetching, it fails immediately
- I need to manually implement retry logic
- Makes the code more complex and harder to maintain

---

## 🧠 Conclusion

To solve these problems, I decided to use **Tanstack react query**.

### ✅ Benefits

- Built-in caching
- Automatic retries on failure
- Simplified data fetching logic
- Better state management for server data
