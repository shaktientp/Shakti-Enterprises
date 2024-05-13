const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(
    import.meta.env.VITE_APPWRITE_COLLECTION_PRODUCTS_ID
  ),
  appwriteCollectionIdServices: String(
    import.meta.env.VITE_APPWRITE_COLLECTION_SERVICES_ID
  ),
  appwriteCollectionIdRetailers: String(
    import.meta.env.VITE_APPWRITE_COLLECTION_RETAILERS_ID
  ),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
