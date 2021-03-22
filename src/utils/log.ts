import fs from 'fs'
import path from 'path'
import pino, { LoggerOptions, PrettyOptions } from 'pino'

const project = path.join(__dirname, '../../tsconfig.json')
const dev = fs.existsSync(project)

const transport: LoggerOptions = dev
  ? {
      prettyPrint: {
        colorize: true,
        translateTime: true,
        ignore: 'pid,hostname',
      } as PrettyOptions,
    }
  : {}

export const log = pino(transport)
