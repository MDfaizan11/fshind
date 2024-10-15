import { Client, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("66f1567a0004216da07b"); // Your project ID

const databases = new Databases(client);

export { databases };
