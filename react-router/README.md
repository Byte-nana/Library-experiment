# 📚 React Router Study Log

## Without React Router

- Each page request loads a new HTML document
- Full page reload occurs
- Not a SPA(Single Page Application)

## Solution

**React Router** allows us to navigate between different views in a React application **without reloading the page**.

👉 It helps us build a **multi-page-like experience while keeping a SPA (Single Page Application)**.

---

## Routing Concepts

### What is Routing?

- When a new URL is requested, the browser fetches data corresponding to that URL.
- It loads a new HTML document and updates the entire page.

---

### What is CSR (Client-Side Routing)?

- When a new URL is requested, instead of fetching a new page from the server, only the necessary parts of the application are updated.
- Only required data is fetched dynamically (usually in JSON format)
- Instead of reloading the whole page, only parts of the UI are updated

---

## Benefits of CSR

- Maintains SPA (Single Page Application) while providing a multi-page experience
- Different URLs allow the use of browser history (back/forward navigation)
- Users can directly access a specific page via URL  
  → No need to go through the home page first
