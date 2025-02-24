import './app.css'
import App from './App.svelte'; // Import your App.svelte component

const app = new App({
  target: document.body, // Mount the component to the <body> element
  props: {
    // You can pass initial props to your App component here
    // For example, if you need to pass an initial URL:
    url: window.location.pathname + window.location.search, // Get the initial URL from the browser
  },
});

export default app; // Export the app instance (optional)