import axios from 'axios'

// import jwtDecode from 'jwt-decode'
import uuidv4 from 'uuid/v4'

const client = axios.create({
  baseURL: process.env.GATOR_PAL_API_URL,
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json',
    'correlationid': uuidv4()
  }
})

// client.interceptors.request.use(
//   async (request) => {
//     // const keepAliveWithinMs = 10 * 60 * 1000 // 10 minutes
//     // const isExpiringSoon = store.getters['ite/expiresAt'] - keepAliveWithinMs <= Date.now()

//     // return (isExpiringSoon ? store.dispatch('ite/refreshToken') : Promise.resolve())
//     //   .then(() => {
//     //     request.headers['authorization'] = store.getters['auth/token']
//     //     return request
//     //   })

//     request.headers['Authorization'] = `Bearer ${store.getters['auth/token']}`
//     return request
//   }
// )

export default {
  getSignedUrls (files) {
    let params = files.map(file => ({ name: file.name, size: file.size }))
    return client.post('/files/signed-urls', params)
      .then((response) => {
        Logger.info(`POST /files/signed-urls with status ${response.status}. Files:`, params.map(param => param.name).join(','))
        return response
      })
  },
  renameFile (payload) {
    let params = {
      id: payload.file.id,
      newName: payload.newName
    }
    return client.patch(`/files/${params.id}`, params)
      .then(response => {
        console.log(response)
        Logger.info(`PATCH /files with status ${response.status}. ID renamed:`, params.id)
        return response
      })
  },
  fileHeaders (file) {
    // encryption is something we will want to hide behind a ENV variable
    return {
      'content-disposition': `attachment;filename="${escape(file.name)}"`,
      'x-amz-server-side-encryption': 'AES256'
    }
  },
  async getFiles () {
    return client.get('/files')
      .then((res) => {
        Logger.info(`Get /files with status ${res.status}`)
        console.log('DEBUG RESPONSE GET FILES')
        console.log(res)
        return res
      })
  },
  getFile (id) {
    // return client.get(`/files/${id}`)
    //   .then ((res) => {
    //     // Logger stuff
    //     return res
    //   })
  },
  deleteFiles (files) {
    let params = files.map(file => ({ id: file.id, operation: 'DELETE' }))
    return client.patch('/files', params)
      .then((res) => {
        Logger.info(`PATCH /files with status ${res.status}. IDs deleted:`, params.map(param => param.id).join(','))
        return res
      })
  },
  restoreFiles (files) {
    let params = files.map(file => ({ id: file.id, operation: 'RESTORE' }))
    return client.patch('/files', params)
      .then((res) => {
        return res
      })
  },
  permDelete (files) {
    let params = files.map(file => ({ id: file.id, operation: 'PERMDELETE' }))
    return client.patch('/files', params)
      .then((res) => {
        return res
      })
  },
  async downloadFile (files, collectionId) {
    return client.post(`/download-urls/${collectionId}`, {
      params: {
        'collection_id': collectionId
      },
      data: files,
      responseType: 'json'
    })
      .then(res => {
        Logger.info(`POST /download-urls/${collectionId} with status ${res.status}`)
        return res
      })
  },
  getIotCredentials () {
    return client.get('/iot-credentials')
      .then((response) => {
        console.log(response)
        Logger.info(`GET /iot-credentials with status ${response.status}.`)
        return response
      })
  }
}