import express from 'express'
import path from 'path'
import serverless from 'serverless-http'
import React from 'react'
import Layout from '../components/Layout'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

function htmlTemplate( styles, reactDom, reduxState ) {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                ${styles}
            </head>
            <div id="app">${ reactDom }</div>
            <script>
                window.REDUX_DATA = ${ JSON.stringify( reduxState ) }
            </script>
            <script src="./dist/app.js"></script>
        </html>
    `
}

function createServerlessApp() {
    const app = express()
    app.disable('x-powered-by')
    console.log(path.resolve(__dirname, '../../dist'))
    app.use('/dist', express.static(path.resolve(__dirname, '../../dist')))
    app.get('/aaa', (req, res) => {
         res.json({ message: 'hello world' })
    })
    app.get('*', (req, res) => {
        const styles = (new ServerStyleSheet()).getStyleTags()
        const reactDom = renderToString(<Layout/>)
        res.writeHead( 200, { "Content-Type": "text/html" } );
        res.end(htmlTemplate(styles, reactDom))
    })

    return serverless(app)
}

const serverlessApp = module.exports.serverlessApp = createServerlessApp()

