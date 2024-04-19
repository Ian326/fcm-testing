import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {getAuth, signInAnonymously} from 'firebase/auth'
import {getToken} from 'firebase/messaging'
import {messaging} from './firebase'

function App() {
  const [count, setCount] = useState(0)

  const handleSignIn = () => {
    signInAnonymously(getAuth())
      .then((user) => {
        console.log('Successfully signed in')
        console.log('User:', user)
      })
      .catch((error) => {
        console.error('Error signing in:', error)
      })
  }

  const handleGetToken = async () => {
    try {
      const token = await getToken(messaging, {vapidKey: import.meta.env.VITE_VAPID_KEY})
      console.log('Token:', token)
    } catch (error) {
      console.error('Error getting token:', error)
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleSignIn}>
          LogIn
        </button>
        <button onClick={handleGetToken}>
          getToken
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
