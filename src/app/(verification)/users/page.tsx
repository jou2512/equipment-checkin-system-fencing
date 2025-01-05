// app/users/page.tsx
'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function UsersPage() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('/api/users', {
        headers: {
          'Authorization': 'Bearer honoiscool'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      return response.json();
    }
  });

  const updateRole = useMutation({
    mutationFn: async ({ userId, isAdmin }: { userId: string, isAdmin: boolean }) => {
      const response = await fetch('/api/users/role', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer honoiscool',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, isAdmin })
      });

      if (!response.ok) {
        throw new Error('Failed to update role');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success('User role updated successfully');
    },
    onError: () => {
      toast.error('Failed to update user role');
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="p-4 space-y-4">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen p-4">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <h2 className="text-red-800 font-semibold mb-2">Error loading users</h2>
          <p className="text-red-600">
            {error instanceof Error ? error.message : 'Unknown error occurred'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Users ({data?.total || 0})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.users?.map((user) => (
          <Card key={user.$id} className="p-4 hover:shadow-lg transition-shadow">
            <div className="space-y-2">
              <h2 className="font-semibold">{user.name || 'Unnamed User'}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <div className="flex items-center justify-between gap-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  user.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {user.status || 'unknown'}
                </span>
                <Button
                  variant={user.labels?.includes('admin') ? "destructive" : "default"}
                  size="sm"
                  onClick={() => updateRole.mutate({
                    userId: user.$id,
                    isAdmin: !user.labels?.includes('admin')
                  })}
                  disabled={updateRole.isPending}
                >
                  {user.labels?.includes('admin') ? 'Remove Admin' : 'Make Admin'}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}