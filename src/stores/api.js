import api from 'forrestjs'

const API = api({ host: 'localhost', port: '36773' })
const type = API.db('type')
const sug = API.db('sug', { type: 'type' })
const req = API.db('req', { type: 'type', tn: ['upd', 'name', 'type'] })

window.API = API
const busy = API.busy
window.type = type
window.sug = sug
window.req = req

export {
  API,
  busy,
  type,
  sug,
  req
}
