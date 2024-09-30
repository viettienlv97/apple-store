import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/user.model.ts'
import {
  responseSuccess,
  responseFail,
  HTTP_STATUS_CODE
} from '../utils/response.ts'

const saltRounds = 10

const login = (req: Request, res: Response) => {
  const { user, password } = req.body
  !user || !password
    ? responseFail(res, HTTP_STATUS_CODE.BAD_REQUEST, 'Missing params')
    : User.findOne({
        $or: [{ email: user }, { phoneNumber: user }]
      }).then((user) => {
        if (!user)
          return responseFail(res, HTTP_STATUS_CODE.NOT_FOUND, 'User not found')

        if (!bcrypt.compareSync(password, user.password ?? ''))
          return responseFail(
            res,
            HTTP_STATUS_CODE.BAD_REQUEST,
            'Password not correct'
          )

        return responseSuccess(res, {
          fullName: user.fullName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: ''
        })
      })
}

const register = async (req: Request, res: Response) => {
  const { email, phoneNumber, fullName, password } = req.body

  if (!email || !phoneNumber || !fullName || !password) {
    responseFail(res, HTTP_STATUS_CODE.BAD_REQUEST, 'Missing param')
    return
  }
  try {
    const user = await User.findOne({
      $or: [{ email }, { phoneNumber }]
    })
    if (user) {
      responseFail(res, HTTP_STATUS_CODE.BAD_REQUEST, 'User already existed')
      return
    }
    const bPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds))

    const newUser = new User({
      email,
      fullName,
      password: bPassword,
      phoneNumber,
      isAdmin: false
    })
    await newUser.save()
    responseSuccess(res, { fullName, phoneNumber, email, role: '' })
  } catch (error) {
    responseFail(res, HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, 'Server error')
  }
}

export default {
  login,
  register
}
