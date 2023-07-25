import * as mongodbURI from 'mongodb-uri'
import { BaseProber, type ProbeResult } from '..'
import type { Mongo } from '../../../../interfaces/probe'
import { mongoRequest } from './request'

export class MongoProber extends BaseProber {
  async probe(): Promise<void> {
    if (!this.probeConfig.mongo) {
      throw new Error(
        `Mongo configuration is empty. Probe ID: ${this.probeConfig.id}`
      )
    }

    const result = await probeMongo({
      id: this.probeConfig.id,
      checkOrder: this.counter,
      mongo: this.probeConfig.mongo,
    })

    this.processProbeResults(result)
  }
}

type ProbeMongoParams = {
  id: string
  checkOrder: number
  mongo: Mongo[]
}

export async function probeMongo({
  id,
  checkOrder,
  mongo,
}: ProbeMongoParams): Promise<ProbeResult[]> {
  const probeResults: ProbeResult[] = []

  for await (const mongoDB of mongo) {
    const { host, password, port, uri, username } =
      getMongoConnectionDetails(mongoDB)
    const requestResponse = await mongoRequest({
      uri,
      host,
      port,
      username,
      password,
    })
    const { body, responseTime, status } = requestResponse
    const isAlertTriggered = status !== 200
    const timeNow = new Date().toISOString()
    const logMessage = `${timeNow} ${checkOrder} id:${id} mongo:${host}:${port} ${responseTime}ms msg:${body}`

    probeResults.push({ isAlertTriggered, logMessage, requestResponse })
  }

  return probeResults
}

function getMongoConnectionDetails({
  host,
  password,
  port,
  uri,
  username,
}: Mongo): Mongo {
  if (!uri) {
    return { host, password, port, uri, username }
  }

  const parsed = mongodbURI.parse(uri)
  const { hosts, password: parsedPassword, username: parsedUsername } = parsed

  return {
    host: hosts[0].host,
    password: parsedPassword,
    port: hosts[0].port,
    uri,
    username: parsedUsername,
  }
}