import 'dot-env'

export const config = () => {
  return {
    webhookProxyUrl: process.env.WEBHOOK_PROXY_URL,
    appId: process.env.APP_ID,
    privateKey: process.env.PRIVATE_KEY,
    webhookSecret: process.env.WEBHOOK_SECRET,
    port: process.env.PORT,
    host: process.env.HOST,
    appName: process.env.APP_NAME,
    isDev: process.env.NODE_ENV === 'development' || 'dev',
    isProd: process.env.NODE_ENV === 'production' || 'prod',
    isTest: process.env.NODE_ENV === 'test' || 'test',
  }
}
