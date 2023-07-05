import React from 'react'
import './Contact.css';
import { Link } from 'react-router-dom';
function Contact() {
    return (
      <div className="contact">
        <h2 className="contact-title">Contact Me <Link to="/contact"></Link></h2>
        <form className="contact-form">
          
          <input type="text" placeholder="Giridharan.p" />
          <label htmlFor=""></label>
          <input type="email" placeholder="giridhranp@gmail.com" />
          <textarea placeholder=""> 
          om shiva sai lauxary pg for Gents,
          #9/1,Bannrghatta main road,sunder ram shetty nagar,
          Hotal monarch by ravido,
          Bengaluru,karnataka - 560076.
          </textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }

export default Contact