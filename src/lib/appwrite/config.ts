import { Account, Client, Databases, Teams } from 'appwrite'
import * as sdk from "node-appwrite"


const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Set your Appwrite endpoint
  .setProject("675b806a0009c79f1598") // Set your project ID
  

export const databases = new Databases(client)
export const account = new Account(client);

// const sdkclient = new sdk.Client()
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("675b806a0009c79f1598")
//   .setKey("standard_3a5a3209dfec1a7231142979b75c6cd4d6ea7308d87351465a5a21b6da3e0019c8304afb20dd1b3fcaa753146e1747fbf628364aa3a7c60f6c84ea2402ab56cf22a8230129dd30002ff99822f0f8c839d97fd68e5ca8f25ce131bd6f0796f9c57531a2303f937705211f2ba2fde4dea27ba10d74991bfc1ba651b33910859edc")

// export const users = new sdk.Users(sdkclient)
// export const teams = new sdk.Teams(sdkclient)
// const account_sdk = new sdk.Account(sdkclient)