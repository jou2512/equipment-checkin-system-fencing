import { Client, Databases } from 'appwrite'

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Set your Appwrite endpoint
  .setProject("675b806a0009c79f1598") // Set your project ID

export const databases = new Databases(client)


export const DATABASE_ID = "675b83ef00172e714622"

export const COLLECTION_IDS = {
  tournaments: 'tournaments',
  checkableItems: 'checkableItems',
  checkIns: 'checkIns',
  equipmentTypes: 'equipmentTypes',
  equipmentParts: 'equipmentParts',
  equipmentPartDefects: 'equipmentPartDefects',
} as const
