/**
 * App Component
 * 
 * Root component of the ecommerce presentation application.
 * Serves as the main entry point and renders the Presentation component.
 * 
 * @component
 * @example
 * ```jsx
 * import App from './App';
 * 
 * // Rendered in main.jsx
 * <App />
 * ```
 * 
 * Architecture:
 * - Simple wrapper component
 * - No state management at this level
 * - Delegates all functionality to Presentation
 * 
 * Purpose:
 * - Acts as the application root
 * - Could be extended for routing in the future
 * - Provides clean separation of concerns
 * 
 * @returns {JSX.Element} The main application interface
 */
import React from 'react';
import Presentation from './components/Presentation';

function App() {
  return (
    <div className="App">
      <Presentation />
    </div>
  );
}

export default App;
