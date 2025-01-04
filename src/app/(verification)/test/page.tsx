// app/test/page.tsx
'use client'

import { useQuery } from '@tanstack/react-query'
import { client } from '@/lib/hono/hono-client'
import { useState } from 'react'

export default function TestPage() {
  const [lastError, setLastError] = useState<string>('')
  const [lastResponse, setLastResponse] = useState<string>('')

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['test'],
    queryFn: async () => {
      try {
        console.log('Making test request...')
        setLastError('')

        // Try with Hono client
        const response = await client.api.test.$get({
          headers: {
            Authorization: 'Bearer honoiscool'
          }
        })

        console.log('Response status:', response.status)
        console.log('Response headers:', Object.fromEntries(response.headers.entries()))

        const data = await response.json()
        console.log('Response data:', data)
        setLastResponse(JSON.stringify(data, null, 2))
        return data

      } catch (err) {
        console.error('Request failed:', err)
        setLastError(err instanceof Error ? err.message : 'Unknown error')
        throw err
      }
    },
    retry: false, // Disable retry for testing
    enabled: false // Don't run automatically
  })

  // Function to test with regular fetch
  const testWithFetch = async () => {
    try {
      console.log('Testing with regular fetch...')
      setLastError('')

      const response = await fetch('/api/test', {
        headers: {
          Authorization: 'Bearer honoiscool'
        }
      })

      console.log('Fetch status:', response.status)
      const data = await response.json()
      console.log('Fetch data:', data)
      setLastResponse(JSON.stringify(data, null, 2))

    } catch (err) {
      console.error('Fetch failed:', err)
      setLastError(err instanceof Error ? err.message : 'Unknown error')
    }
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">API Test Page</h1>

      <div className="space-y-4">
        <div className="flex gap-4">
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Test with Hono Client
          </button>

          <button
            onClick={testWithFetch}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Test with Fetch
          </button>
        </div>

        {isLoading && (
          <div className="text-gray-600">Loading...</div>
        )}

        {lastError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-md">
            <h2 className="text-red-800 font-semibold mb-2">Error</h2>
            <pre className="text-red-600 text-sm whitespace-pre-wrap">
              {lastError}
            </pre>
          </div>
        )}

        {lastResponse && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <h2 className="text-green-800 font-semibold mb-2">Last Successful Response</h2>
            <pre className="text-green-600 text-sm whitespace-pre-wrap">
              {lastResponse}
            </pre>
          </div>
        )}

        <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-md">
          <h2 className="font-semibold mb-2">Debug Information</h2>
          <pre className="text-sm text-gray-600 whitespace-pre-wrap">
            {`Current Path: ${typeof window !== 'undefined' ? window.location.pathname : ''}\n`}
            {`Origin: ${typeof window !== 'undefined' ? window.location.origin : ''}\n`}
          </pre>
        </div>
      </div>
    </div>
  )
}