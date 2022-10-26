import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="bg-gray-800 text-gray-300 min-h-screen w-full justify-center text-center align-center p-4 flex flex-col">
    <a href="#" class="w-50 mx-auto my-10">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="#" class="w-50 mx-auto my-10">
      <img src="${javascriptLogo}" class="logo vanilla w-20" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" class="bg-green-700 p-3 m-4 rounded" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>

    <a href="objetos.html" class="bg-gray-900 p-3 m-4 rounded w-50 mx-auto">Objetos</a>
  </div>
`

setupCounter(document.querySelector('#counter'))
