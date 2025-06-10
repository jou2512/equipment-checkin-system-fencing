import { Client, Account } from 'node-appwrite'

const APPWRITE_ENDPOINT = process.env.APPWRITE_API_ENDPOINT!
const APPWRITE_PROJECT_ID = process.env.APPWRITE_PROJECT_ID!

export async function getUserFromToken(token: string) {
  const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID)
    .setJWT(token)

  const account = new Account(client)
  return await account.get()
}
