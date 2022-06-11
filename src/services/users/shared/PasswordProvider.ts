import { hash, compare } from 'bcryptjs'

class PasswordProvider {
  async encryptPassword(password: string): Promise<string> {
    const passwordHash = await hash(password, 8)

    return passwordHash
  }

  async compareHashWithPassword(password: string, hash: string): Promise<boolean> {

    const match = await compare(password, hash)

    return match

  }

}

export { PasswordProvider }