import { Client, Databases } from 'appwrite'

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Set your Appwrite endpoint
  .setProject("675b806a0009c79f1598") // Set your project ID

export const databases = new Databases(client)
