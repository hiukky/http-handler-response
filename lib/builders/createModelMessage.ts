import { HTTP_CODES } from '../types/httpCodes'
import { ICreateModelMessage, IResponse, IError } from '../types/builders'

/**
 * @function createModelMessage
 *
 * Assemble the default message header.
 *
 * @param code - HTTP status code 1xx to 5xx
 * @param title - Short and descriptive information
 */
const createModelMessage = ({
  code,
  title,
}: ICreateModelMessage): IResponse | IError => {
  var model = { title: '', status: 0 }

  Object.entries(HTTP_CODES).filter(([_code, _title]) => {
    if (Number(_code) === code) {
      return (model = {
        status: Number(_code),
        title: title ?? _title.split(' - ')[1],
      })
    }

    return
  })

  return model
}

export default createModelMessage
