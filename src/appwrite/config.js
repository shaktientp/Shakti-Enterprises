import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getProduct(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id
      );
    } catch (error) {
      console.log("Appwrite serive :: getProduct :: error", error);
      return false;
    }
  }

  async getProducts() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId
      );
    } catch (error) {
      console.log("Appwrite serive :: getProducts :: error", error);
      return false;
    }
  }

  async getService(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionIdServices,
        id
      );
    } catch (error) {
      console.log("Appwrite serive :: getService :: error", error);
      return false;
    }
  }

  async getServices() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionIdServices
      );
    } catch (error) {
      console.log("Appwrite serive :: getServices :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }

  async createRetailer({ name, contact, email, pincode, shopName }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionIdRetailers,
        ID.unique(),
        {
          name,
          contact,
          email,
          pincode,
          shopName,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createRetailer :: error", error);
    }
  }
}

const service = new Service();
export default service;
