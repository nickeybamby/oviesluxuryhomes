import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { storyblokInit, apiPlugin } from '@storyblok/react'

storyblokInit({
  accessToken: "2ZdIqevX4rBv8YiFJdBKyQtt",
  use: [apiPlugin],
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
