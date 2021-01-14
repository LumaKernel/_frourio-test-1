import dotenv from 'dotenv'

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET ?? ''
const USER_ID = process.env.USER_ID ?? ''
const USER_PASS = process.env.USER_PASS ?? ''
const SERVER_PORT = +(process.env.SERVER_PORT ?? '8080')
const BASE_PATH = process.env.BASE_PATH ?? ''
const API_ORIGIN = process.env.API_ORIGIN ?? ''
const FAIL_PASS = process.env.FAIL_PASS || null
const USER_STATIC_DIR = process.env.USER_STATIC_DIR ?? ''

export {
  JWT_SECRET,
  USER_ID,
  USER_PASS,
  SERVER_PORT,
  BASE_PATH,
  API_ORIGIN,
  USER_STATIC_DIR,
  // このお試しプロジェクト専用
  FAIL_PASS
}
