import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Contact() {
  return (
    <section id="contact" className="contact_container">
      <div className="contact_title">
        <h1>Contato</h1>
      </div>

      <div className="contact_info">
        <div className="contact_item">
          <img src="./src/assets/icons/phone.svg" />
          <p>(85) 9 9401-5051</p>
        </div>
        <div className="contact_item">
          <img src="./src/assets/icons/mail.svg" />
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkVJxgNwMbhzfwdHXQtFCWCSLNDCzLSbWNnQkpBqmhbvxQklwSphrmQdDHKgkqrMWVsZsx">
            lucklilydoces@gmail.com
          </a>
        </div>
        <div className="contact_item">
          <img src="./src/assets/icons/clock.svg" />
          <div>
            <p>Segunda a sexta: 10h às 18h</p>
            <p>Sábado: 10h às 15h</p>
          </div>
        </div>
      </div>
    </section>
  );
}
