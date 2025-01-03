import { Account, Client, Databases, Teams } from 'appwrite'
import * as sdk from "node-appwrite"

if (!process.env.APPWRITE_API_KEY) throw("You need an API Key from Apwrite") 


const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Set your Appwrite endpoint
  .setProject("675b806a0009c79f1598") // Set your project ID
  

export const databases = new Databases(client)
export const account = new Account(client);



const sdkclient = new sdk.Client()
.setEndpoint("https://cloud.appwrite.io/v1") // Set your Appwrite endpoint
.setProject("675b806a0009c79f1598") // Set your project ID
.setKey(process.env.APPWRITE_API_KEY); // Your secret API key


export const users = new sdk.Users(sdkclient)
export const teams = new sdk.Teams(sdkclient);
export const account_sdk = new Account(client);
