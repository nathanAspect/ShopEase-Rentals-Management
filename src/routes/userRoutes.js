const express = require('express')

const router = express.Router()

router.get('/', (_, res)=>{
    res.json('happy user')
})

module.exports = router