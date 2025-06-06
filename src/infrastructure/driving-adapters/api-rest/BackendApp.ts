import { Server } from './Server'

export class BackendApp {
  server?: Server

  async start (): Promise<void> {
    const port: string = process.env.PORT ?? '2426'
    this.server = new Server(port)
    await this.server.listen()
  }

  async stop (): Promise<void> {
    await this.server?.stop()
  }
}
