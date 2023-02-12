export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      JWT_SECRET_KEY: string
      DISCORD_CLIENT_ID: string
      DISCORD_CLIENT_SECRET: string
    }
  }
}
