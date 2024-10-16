import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" alt='react-logo' width="40px"/>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <small>@ 2024 Nima development. All right reserved.</small>
    </footer>
  )
}

function MainContent () {
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}
function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Page />)