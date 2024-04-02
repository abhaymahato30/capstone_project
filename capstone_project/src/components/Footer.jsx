import React from 'react'
import logo from '../assets/icons_assets/Logo.svg'
const Footer = () => {
  return (
  <footer>
    <section>
        <div className="company-info">
            <img src={logo} alt="" />
            <p>We are a family of mediterraneran restaurant, focused on tradition recipes served with modern twist </p>
        </div>
        <div>
            <h3>Important links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Order</a></li>
                <li><a href="/">Menu</a></li>

                <li><a href="/">Reservations</a></li>
                <li><a href="/">order_online</a></li>
                <li><a href="/">Login</a></li>

            </ul>
        </div>
        <div>
            <h3>contact</h3>
            <ul>
                <li>Address: <br />123 Dhanbad Jharkhand </li>
                <li>Phone :<br />++3443 3633 7373</li>
                <li>Email :<br />lemon@gmail.com</li>

            </ul>
        </div>
        <div>
            <h3>Social Media</h3>
            <ul>
            <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Twitter</a></li>

            </ul>
        </div>
    </section>
  </footer>
  )
}

export default Footer
