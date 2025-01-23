import 'virtual:uno.css'
import { type APIOptions, PrimeReactProvider } from 'primereact/api'
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from 'react-router'

export const Layout = ({
  children,
}: {
  readonly children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf8" />
        <meta
          content="width=device-width, initial-scale=1.0"
          name="viewport"
        />
        <title>My App</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    )
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    )
  } else {
    return <h1>Unknown Error</h1>
  }
}

export function HydrateFallback() {
  return <p>Loading Template...</p>
}

export function links() {
  return [
    {
      href: '/vite.svg',
      rel: 'icon',
    },
    {
      href: '/themes/lara-light-blue/theme.css',
      rel: 'stylesheet',
    },
  ]
}

export function meta() {
  return [
    { title: 'Template' },
    // {
    //   content: 'Very cool app',
    //   property: 'og:title',
    // },
    // {
    //   content: 'This app is the best',
    //   name: 'description',
    // },
  ]
}

const value: Partial<APIOptions> = {
  appendTo: 'self',
  ripple: true,
}

export default function Root() {
  return (
    <PrimeReactProvider value={value}>
      <Outlet />
    </PrimeReactProvider>
  )
}
