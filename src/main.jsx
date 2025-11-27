/**
 * Main Entry Point
 * 
 * Application entry point that initializes and renders the React application.
 * This file is the first JavaScript file executed when the app loads.
 * 
 * @module main
 * 
 * Configuration:
 * - Uses React 19's createRoot API for concurrent rendering
 * - Wraps app in StrictMode for development checks
 * - Imports global styles from index.css
 * 
 * React.StrictMode:
 * - Activates additional checks and warnings in development
 * - Helps identify potential problems in the application
 * - Does not render any visible UI
 * - Only runs in development mode (removed in production)
 * 
 * Benefits of StrictMode:
 * - Identifies components with unsafe lifecycles
 * - Warns about legacy string ref API usage
 * - Warns about deprecated findDOMNode usage
 * - Detects unexpected side effects
 * - Ensures reusable state
 * 
 * DOM Mounting:
 * - Targets the #root element in index.html
 * - Uses createRoot for React 18+ concurrent features
 * 
 * @see {@link https://react.dev/reference/react/StrictMode}
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
