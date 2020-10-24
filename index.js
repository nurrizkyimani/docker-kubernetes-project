const express = require('express')


const route = express()


route.get("/", (res) => {
  res.json({
    error: "No",
    message: "Hello World"
  })
})

PORT = 3000

route.listen(PORT, `Listen to ${PORT} `)