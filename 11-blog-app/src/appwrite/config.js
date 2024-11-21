import { Client, Databases, Query } from "appwrite";
import Conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(Conf.appwriteURL)
        .setProject(Conf.appwriteProjectID)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        Conf.appwriteDatabaseID,
        Conf.appwriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost() :: ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        Conf.appwriteDatabaseID,
        Conf.appwriteCollectionID,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts() :: ", error);
      return false;
    }
  }

  async createPost({ tittle, content, featureimage, status, userID }) {
    try {
      return await this.databases.createDocument(
        Conf.appwriteDatabaseID,
        Conf.appwriteCollectionID,
        slug,
        {
          tittle,
          content,
          featureimage,
          status,
          userID,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost() :: ", error);
      return false;
    }
  }

  async updatePost(slug, { tittle, content, featureimage, status }) {
    try {
      return await this.databases.updateDocument(
        Conf.appwriteDatabaseID,
        Conf.appwriteCollectionID,
        slug,
        {
          tittle,
          content,
          featureimage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost() :: ", error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        Conf.appwriteDatabaseID,
        Conf.appwriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost() :: ", error);
      return false;
    }
  }

  // Storage service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        Conf.appwriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile() :: ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(Conf.appwriteBucketID, fileId);
    } catch (error) {
      console.log("Appwrite service :: deleteFile() :: ", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(Conf.appwriteBucketID, fileId).href;
  }
}

const service = new Service();

export default service;
