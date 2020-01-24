
'use strict'

const axios = require('axios')

async function getData() {
  try {
    const options = {
      timeout: 2000
    }

    const result = await axios('http://localhost:5001/users/test', options)
    const data = result.data
    // console.log(`data: ${JSON.stringify(data,null,2)}`)

    return data
  } catch(err) {
    // console.log(`Error: `, err)
    throw err
  }
}

module.exports = {
  getData
}
