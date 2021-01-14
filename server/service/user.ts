// XXX(sample): なるべく sync は使わないほうがいい、処理をブロックするので
import fs from 'fs'
import path from 'path'
import { Multipart } from 'fastify-multipart'
import { API_ORIGIN, USER_ID, USER_PASS, USER_STATIC_DIR } from './envValues'

const iconsDir = USER_STATIC_DIR && path.resolve(USER_STATIC_DIR, 'icons')

// XXX(sample): basepath は省いた、若干自然かなって思ったけど、うーん
// XXX(sample): fastify static のパスをわけなければいけない事情もあってだいぶめんどくさくなってきた
const createIconURL = (dir: string, name: string) =>
  `${API_ORIGIN}/${dir}icons/${name}`

export const getUserInfo = (id: string) => {
  const iconName = getUserIconName(id)
  return {
    name: 'sample user',
    icon:
      iconsDir && fs.existsSync(path.resolve(iconsDir, iconName))
        ? createIconURL('data/', iconName)
        : createIconURL('static/', `dummy.svg`)
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
    throw new Error('USER_STATIC_DIR is not configured.')
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
