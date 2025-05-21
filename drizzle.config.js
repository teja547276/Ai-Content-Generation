/** @type {import ("drizzle-kit").Config} */
export default {
    schema:"./utils/schema.tsx",
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:npg_1XnrBbHpF6wQ@ep-white-surf-a4oyjfcd-pooler.us-east-1.aws.neon.tech/Plutodb?sslmode=require'
    }
}