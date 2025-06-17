export interface AuthAdapter {
  verify(token: string): Promise<{
    userId: string
    email: string
    roles: string[]
    organizationId: string
  }>
}
