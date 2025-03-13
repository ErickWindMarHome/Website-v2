import React from 'react'
import App from './App.jsx'
import ReactGA from 'react-ga4'
import ReactDOM from 'react-dom/client'
import TagManager from 'react-gtm-module'

import { store } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PostHogProvider } from 'posthog-js/react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'

const queryClient = new QueryClient()
const TRACKING_ID = 'G-056VTGNNRW'
ReactGA.initialize(TRACKING_ID)
const tagManagerArgs = {
  gtmId: 'GTM-P55HQQQ',
}
TagManager.initialize(tagManagerArgs)
const hostPost_hog = import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_HOST
const keyPost_hog = import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_KEY
const options = {
  api_host: hostPost_hog,
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <BrowserRouter>
          <PostHogProvider apiKey={keyPost_hog} options={options}>
            <App />
          </PostHogProvider>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
