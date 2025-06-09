import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

// NOTE This Page is done
export default function UnauthorizedPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-lg rounded-lg text-center">
        <Shield className="mx-auto h-16 w-16 text-red-500 mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Unauthorized Access</h1>
        <p className="text-gray-600 mb-6">
          Sorry, you don't have permission to access this page. Please contact the administrator if you believe this is an error.
        </p>
        <div className="flex justify-center">
          <Button asChild>
            <Link href="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
