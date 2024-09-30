import { Config } from './base.ts'
import { Auth } from './auth.ts'

class ClientSDK extends Auth {
  constructor(config: Config) {
    super(config)
  }

  private static _instance: ClientSDK | null = null

  public static getInstance(): ClientSDK {
    if (!ClientSDK._instance) {
      throw new Error('ClientSDK has not been initialized!')
    }
    return ClientSDK._instance
  }

  public static init(config: Config): ClientSDK {
    if(!ClientSDK._instance) {
      ClientSDK._instance = new ClientSDK(config)
    }
    return ClientSDK._instance
  }
}

interface ClientSDK extends Auth {}
export default ClientSDK