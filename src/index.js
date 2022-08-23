import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import Playground from './playground'

const root = createRoot(document.getElementById('root'))
root.render(
  <Playground />
);