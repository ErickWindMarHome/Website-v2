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
import * as Sentry from '@sentry/react'

import './index.css'

Sentry.init({
  dsn: 'https://81af6c7b49ed84f4bfc905861445736e@o4508971389943808.ingest.us.sentry.io/4508971544412160',
  integrations: [Sentry.browserTracingIntegration(), Sentry.browserProfilingIntegration(), Sentry.replayIntegration()],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/web\.windmar\.com/],
  // Set profilesSampleRate to 1.0 to profile every transaction.
  // Since profilesSampleRate is relative to tracesSampleRate,
  // the final profiling rate can be computed as tracesSampleRate * profilesSampleRate
  // For example, a tracesSampleRate of 0.5 and profilesSampleRate of 0.5 would
  // results in 25% of transactions being profiled (0.5*0.5=0.25)
  profilesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

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
