import { hash } from 'bcryptjs'
import { IEncryptPassword } from "../IEncryptPassword";

class Bcryptjs implements IEncryptPassword {
  async encryptPassword(password: string): Promise<string> {
    const passwordHash = await hash(password, 8)

    return passwordHash
  }

}

export { Bcryptjs }