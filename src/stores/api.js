import api from 'forrestjs'

const API = api({ host: 'localhost', port: '36773' })
const type = API.db('type')

window.API = API
const busy = API.busy
window.type = type

export {
  API,
  busy,
  type
}
