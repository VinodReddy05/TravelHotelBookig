import React from 'react'
import "./MailList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faMailForward, faMailReply } from '@fortawesome/free-solid-svg-icons'


const MailList = () => {
  return (
    <div className='mail'>
      <h1 className="mailTitle">save time, save money</h1>
      <span className="mailDesc">Dign up and we'll sand the best deals to you</span>
      <div className="mailInputContainer">
      {/* <FontAwesomeIcon  icon={faMailReply} /> */}
        <input type="email"   placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
