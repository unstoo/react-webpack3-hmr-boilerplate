import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'


const rootEl = document.getElementById('root')

const render = (Component, nodeEnv) =>
  ReactDOM.render(
    <AppContainer>
      <Component nodeEnv={nodeEnv} />
    </AppContainer>,
    document.getElementById('root')
  )

render(App, 
  /* Can be set in package.json; passed down here by webpack's DefinePlugin() */
  NODE_ENV) 

if (module.hot) module.hot.accept('./App', () => render(App, NODE_ENV))
