import axios, { AxiosInstance } from 'axios'

export type Config = {
  base_url: string
}

export abstract class Base {
  public static config: Config
  public static axiosInstance: AxiosInstance

  constructor(config: Config) {
    Base.config = config
    console.log({config});
    
    Base.axiosInstance = axios.create({ baseURL: config.base_url })
  }

  private getAxiosInstance(): AxiosInstance {
    return Base.axiosInstance
  }
  protected async request<T>(endpoint: string, options?: any): Promise<T> {
    const baseHeaders = {
      'Content-Type': 'application/json'
    }
    const headers = options.headers
      ? { ...baseHeaders, ...options.headers }
      : { ...baseHeaders }

    const config = {
      ...options,
      headers,
      url: endpoint
    }

    try {
      const response = await this.getAxiosInstance().request<T>(config)
      return response.data
    } catch (error) {
      console.error('Request error: ', error)
      throw error
    }
  }
}
