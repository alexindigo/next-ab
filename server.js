const dev = process.env.NODE_ENV !== 'production'
const dir = '.'

// Packages
const next = require('next')
const express = require('express')

const app = next({ dev, dir })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    const woot = (req, res) => {
      // const printDate = Math.random() > 0.5
      // if (printDate) {
        res.end(`Date: ${Date.now()}`)
        return
      // }
      //
      // app.render(req, res, '/woot2')
    };

    server.get('/woot_prefetch', woot)
    server.get('/woot_no_prefetch', woot)

    server.get('*', (req, res) => {
      handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('App started on http://localhost:3000')
    })
  })
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
