
import { useState } from 'react';
import './App.css';

// Import your components here

import Button from './components/Button';
import Navbar from './components/Navbar';
 import Footer from './components/Footer';
 import TaskManager from './components/TaskManager';
 import Card from './components/Card';
 import TaskList from './components/TaskList';




export default function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    const nextMode = !darkMode;
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !nextMode);
  }

  return (
   <div className="min-h-screen bg-gray-300 dark:bg-yellow-500 text-black-300 dark:text-black-900 transition-colors">
      {/* Navbar */}
      <Navbar
        title="PLP Task Manager"
        navItems={[
          { text: 'Home', href: '#', active: true },
          { text: 'Tasks', href: '#tasks' },
          { text: 'About', href: '#about' }
        ]}
        isDarkMode={darkMode}
        onThemeToggle={handleThemeToggle}
        sticky
      />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Card>
          <div className="flex flex-col items-center justify-center">
           <h2 className="text-xl font-bold mb-4">Welcome to PLP Task Manager</h2>
           {/* <p className="text-lg mb-2 text-gray-600 dark:text-gray-400">
             Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR.
          </p> */}
         
            <div className="flex items-center gap-4 my-4">
              <button
                onClick={() => setCount((count) => count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-bold">{count}</span>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                +
              </button>
              <Button/>
            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-4">
            </p>
            <TaskManager/>
          </div>
        </Card>
        
        
        <div className="mt-8 bg-gray-200 dark:bg-gray-100 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>

          <p className="text-black-500 dark:text-white-300 mb-4">
            Fetch and display data from an API here with a list from tasklist
          </p>
          <TaskList/>

        
        </div>
        
      </main>

      
      <footer className="bg-white dark:bg-gray-800 shadow-sm mt-16 transition-colors duration-300">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
              </p>
              <Footer />
            </div>
          </div>
        </footer>
        
      </div>
  );
}