interface IEncryptPassword {
  encryptPassword(password: string): Promise<string>
}

export { IEncryptPassword }