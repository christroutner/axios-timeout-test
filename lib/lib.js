
'use strict'

const axios = require('axios')

async function getData() {
  try {
    const options = {
      timeout: 2000
    }

    const result = await axios.get('http://localhost:5001/users/test', options)
    const data = result.data
    // console.log(`data: ${JSON.stringify(data,null,2)}`)

    return data
  } catch(err) {
    if(err.code === 'ECONNABORTED')
      throw new Error(`Downstream service took too long to respond.`)

    if(err.code === `ECONNREFUSED`)
      throw new Error(`Could not connect to downstream service.`)

    // console.log(`Error: `, err)
    throw err
  }
}

module.exports = {
  getData
}
