import { Response } from 'express'

export const responseSuccess = (res: Response, data: any) =>
  res.status(HTTP_STATUS_CODE.OK).send({
    success: true,
    data
  })

export const responseFail = (res: Response, status: number, message: string) =>
  res.status(status).send({
    success: false,
    message
  })

export const HTTP_STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}
