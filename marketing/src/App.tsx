import { MessageSquare, Search, Calculator, Smartphone } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-6 text-gray-900 dark:text-white">Sage</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">Your AI Chat Companion</p>
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-12">Experience the power of AI chat on macOS and iOS</p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 text-lg font-semibold text-gray-700 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg transition-colors">
            View Documentation
          </button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="mb-4">
              <MessageSquare className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">AI-Powered Chat</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Engage in natural conversations with Anthropic's powerful language model
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="mb-4">
              <Search className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Smart Search</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access web search directly in your chat for real-time information
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="mb-4">
              <Calculator className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Built-in Calculator</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Perform calculations without leaving your conversation
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="mb-4">
              <Smartphone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Cross-Platform</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Available on macOS and iOS with seamless sync
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ready to get started?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Download Sage today and experience the future of AI chat.
        </p>
        <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          Download Now
        </button>
      </section>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-500">
        © 2024 Sage. All rights reserved.
      </footer>
    </div>
  )
}

export default App
