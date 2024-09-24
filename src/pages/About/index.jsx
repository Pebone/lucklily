import AboutImage from "../../assets/images/about_img.png"
import "./index.scss";

export default function About() {
  return (
    <section id="about" className="about_container">
      <div className="about_title">
        <h1>Sobre</h1>
      </div>
      <div className="about_main">
        <div className="about_img">
          <img src={AboutImage} alt="Cookie Avelã Nuclear. Um dos mais pedidos!"/>
        </div>
        <div className="about_text">
          <p>
            Nossa história começou com um desejo de empreender e uma enorme
            paixão por gastronomia! Durante o ano de 2022, o Jota(nosso
            fundador) decidiu começar a vender alguns cookies na faculdade e, a
            partir daí, esse espírito empreendedor que estava dormente aflorou
            para o surgimento do nosso antigo nome: Cookies do Jota!
          </p>
          <p>
            Porém, veio a necssidade de ter algo mais sólido do que isso. Assim
            surgiu a Luck Lily! Uma empresa que, assim como um bom bolo, tem uma
            base sólida de originalidade, um sabor incomparável e muito desejo
            de ser uma companheira no dia a dia das pessoas e na criação de boas
            memórias!
          </p>
          <p>
            Te convidamos a nos conhecer e dar uma chance para que nosso lema
            entre pelos teus ouvidos, nossas delícias transformem seu paladar e
            te façam querer ainda mais!
          </p>
          <p>Ah, o nosso lema?!</p>
          <h2>Viva tudo em um momento!</h2>
        </div>
      </div>
    </section>
  );
}
