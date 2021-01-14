// XXX(sample): なるべく sync は使わないほうがいい、処理をブロックするので
import fs from 'fs'
import path from 'path'
import { Multipart } from 'fastify-multipart'
import { API_ORIGIN, USER_ID, USER_PASS, STATIC_DIR } from './envValues'

const iconsDir = STATIC_DIR && path.resolve(STATIC_DIR, 'icons')

// XXX(sample): basepath は省いた、若干自然かなって思ったけど、うーん
const createIconURL = (name: string) => `${API_ORIGIN}/icons/${name}`

export const getUserInfo = (id: string) => {
  const iconName = getUserIconName(id)
  return {
    name: 'sample user',
    icon:
      iconsDir && fs.existsSync(path.resolve(iconsDir, iconName))
        ? createIconURL(iconName)
        : createIconURL('dummy.svg')
  }
}

export const validateUser = (id: string, pass: string) =>
  id === USER_ID && pass === USER_PASS

export const getUserInfoById = (id: string) => ({
  id,
  ...getUserInfo(id)
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getUserIconName = (_id: string) => {
  // XXX(sample): 容量減らすためにファイル名固定
  return `user-icon`
}

export const changeIcon = async (id: string, iconFile: Multipart) => {
  const iconName = getUserIconName(id)

  if (!iconsDir) {
    throw new Error('STATIC_DIR is not configured.')
  }

  await fs.promises.mkdir(iconsDir, { recursive: true })

  await fs.promises.writeFile(
    path.resolve(iconsDir, iconName),
    await iconFile.toBuffer()
  )

  return {
    id,
    ...getUserInfo(id)
  }
}
