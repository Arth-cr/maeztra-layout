import { useState } from "react";
import "../styles/footer.scss";

export function Footer() {
  const isMobile = window.innerWidth <= 490;

  function toggleDropdown(e: any) {
    e.target.classList.toggle("opened");
    e.target.nextElementSibling.classList.toggle("dropdown-opened");
  }

  if (isMobile) {
    return (
      <>
        <section className="newsletter_container">
          <h2>Recebe Nossa Newsletter</h2>

          <div>
            <label htmlFor="newsletter">
              <input type="text" placeholder="Digite seu e-mail" />
            </label>
            <button type="submit">Enviar</button>
          </div>
        </section>

        <section className="footer_links">
          <div>
            <strong onClick={toggleDropdown} className="closed">
              Informações
            </strong>
            <div className="dropdown-closed">
              <a href="">Quem Somos</a>
              <a href="">Prazo de Envio</a>
              <a href="">Trocas e Devoluções</a>
              <a href="">Promoções e Cupons</a>
            </div>
          </div>
          <div>
            <strong onClick={toggleDropdown} className="closed">
              Minha Conta
            </strong>
            <div className="dropdown-closed">
              <a href="">Minha Conta</a>
              <a href="">Meus Pedidos</a>
              <a href="">Cadastre-se</a>
            </div>
          </div>
          <div>
            <strong onClick={toggleDropdown} className="closed">
              Onde nos Encontrar
            </strong>
            <div className="dropdown-closed">
              <a href="">Lojas</a>
              <a href="">Endereço</a>
            </div>
          </div>
        </section>

        <section className="bottombar">
          <div>
            <img src="/fb.png" alt="facebook" />
            <img src="/in.png" alt="linkedin" />
            <img src="/insta.png" alt="instagram" />
            <img src="/yt.png" alt="youtube" />
          </div>
          <div>
            <img src="/visa.png" alt="visa" />
            <img src="/master.png" alt="master" />
            <img src="/visa.png" alt="visa" />
            <img src="/master.png" alt="master" />
          </div>
          <div>
            <div>
              <p>Powered by</p>
              <img src="/vtex.png" alt="vtex" />
            </div>
            <div>
              <p>Developed by</p>
              <img src="/maeztra.png" alt="maeztra" />
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="newsletter_container">
        <h2>Recebe Nossa Newsletter</h2>

        <div>
          <label htmlFor="newsletter">
            <input type="text" placeholder="Digite seu e-mail" />
          </label>
          <button type="submit">Enviar</button>
        </div>
      </section>

      <section className="footer_links">
        <div>
          <strong>Informações</strong>
          <div>
            <a href="">Quem Somos</a>
            <a href="">Prazo de Envio</a>
            <a href="">Trocas e Devoluções</a>
            <a href="">Promoções e Cupons</a>
          </div>
        </div>
        <div>
          <strong>Minha Conta</strong>
          <div>
            <a href="">Minha Conta</a>
            <a href="">Meus Pedidos</a>
            <a href="">Cadastre-se</a>
          </div>
        </div>
        <div>
          <strong>Onde nos Encontrar</strong>
          <div>
            <a href="">Lojas</a>
            <a href="">Endereço</a>
          </div>
        </div>
      </section>

      <section className="bottombar">
        <div>
          <img src="/fb.png" alt="facebook" />
          <img src="/in.png" alt="linkedin" />
          <img src="/insta.png" alt="instagram" />
          <img src="/yt.png" alt="youtube" />
        </div>
        <div>
          <img src="/visa.png" alt="visa" />
          <img src="/master.png" alt="master" />
          <img src="/visa.png" alt="visa" />
          <img src="/master.png" alt="master" />
        </div>
        <div>
          <div>
            <p>Powered by</p>
            <img src="/vtex.png" alt="vtex" />
          </div>
          <div>
            <p>Developed by</p>
            <img src="/maeztra.png" alt="maeztra" />
          </div>
        </div>
      </section>
    </>
  );
}
