import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

function Header() {
  return(
    <header>
      <nav className="nav">
        <img src="./react-logo.png" alt="react-logo" className="nav-logo"/>
        <ul className="pages">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return(
    <footer className="footer">
      <small className="footer-text">
        @ 2024 Nima development. All right reserved.
      </small>
    </footer>
  )
}


function MainContent() {
  return (
    <div className="main-content">
      <h1>Fun fact abou React</h1>
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
    <div className = "page">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Page />)