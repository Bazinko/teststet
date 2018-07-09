import fetch from 'node-fetch'
import config from './../../config'

export default async({ payload, emitAction, db, sessionData }) => {
  console.log("GCF RAN!")
  let { cfName, body } = payload
  const {GCF_BASE_URL} = config
  let url = `${GCF_BASE_URL}${cfName}`
  console.log('url: ', url)
  let result
  await fetch(url,{
    method: 'POST',
    body: body
  })
    .then(res => {
      return res.text()
    })
    .catch(err => emitAction('SNACK', { message: err.toString() }))
    .then(body => {
      result = body
    })
  let responce = Object.assign({}, payload)
  responce.result = result
  emitAction('GCF_RES', responce)
}
