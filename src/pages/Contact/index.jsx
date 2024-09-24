import React from "react";
import Logo from "../../assets/images/logo.png";
import Instagram from "../../assets/icons/instagram.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import Phone from "../../assets/icons/phone.svg";
import Mail from "../../assets/icons/mail.svg";
import Clock from "../../assets/icons/clock.svg";
import "./index.scss";

export default function Contact() {
  return (
    <section id="contact" className="contact_container">
      <div className="contact_title">
        <h1>Contato</h1>
      </div>

      <div className="contact_info">
        <div className="contact_item">
          <img src={Phone} alt="Telefone para contato por Whatsapp."/>
          <p>(85) 9 9401-5051</p>
        </div>
        <div className="contact_item">
          <img src={Mail} alt="Email para contato com a loja."/>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkVJxgNwMbhzfwdHXQtFCWCSLNDCzLSbWNnQkpBqmhbvxQklwSphrmQdDHKgkqrMWVsZsx">
            lucklilydoces@gmail.com
          </a>
        </div>
        <div className="contact_item">
          <img src={Clock} alt="Horário de funcionamento"/>
          <div>
            <p>Segunda a sexta: 10h às 18h</p>
            <p>Sábado: 10h às 15h</p>
          </div>
        </div>
      </div>
    </section>
  );
}
