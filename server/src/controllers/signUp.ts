import db from '../database/connection'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { generateJwt, generateRefreshJwt } from '../helpers/jwt'

const saltRounds = 10

class SignUp {
  async store(req: Request, res: Response) {
    const { name, email, password, passwordConfirmation } = req.body

    if (password !== passwordConfirmation) {
      return res
        .status(400)
        .json({ message: 'Password confirmation and password don`t match.' })
    }

    const accountExists = await db('users')
      .where('name', name)
      .orWhere('email', email)
      .first()

    if (accountExists) {
      return res.status(400).json({ message: 'Account already exists' })
    }

    const hash = bcrypt.hashSync(password, saltRounds)

    const Account = {
      name,
      email,
      password: hash,
    }

    const trx = await db.transaction()

    try {
      const insertedIds = await trx('users').insert(Account)

      const AccountId = insertedIds[0]

      const token = generateJwt({ id: AccountId })
      const refreshToken = generateRefreshJwt({ id: AccountId })

      await trx.commit()

      delete Account.password

      return res.status(201).json({
        message: 'Account created',
        ...Account,
        token,
        refreshToken,
      })
    } catch (err) {
      trx.rollback()

      return res
        .status(500)
        .json({ message: 'Internal error. Sorry for that.' })
    }
  }
}

export default SignUp
