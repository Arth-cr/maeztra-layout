import "../styles/header.scss";

export function Header() {
  return (
    <header className="container_header">
      <section className="topbar">
        <h2>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</h2>
      </section>

      <section className="main_header">
        <img src="/logo.png" alt="Maeztra" />

        <div className="busca">
          <label htmlFor="busca">
            <input type="text" id="busca" placeholder="O Que Você Busca?" />
          </label>

          <button type="submit">Buscar</button>
        </div>

        <div className="header_buttons">
          <div>
            <button>
              <img src="/icon-user.svg" alt="user" />
              <span>Minha Conta</span>
            </button>
          </div>

          <div>
            <button>
              <img src="/icon-heart.svg" alt="favoritos" />

              <span>Minha Conta</span>
            </button>
          </div>

          <div className="minicart">
            <button>
              <img src="/icon-shoppingbag.svg" alt="minicart" />

              <span>Meu Carrinho</span>
            </button>
          </div>
        </div>
      </section>

      <section className="header_linksCategorys">
        <ul>
          <li className="header_news">
            <img src="/icon-dress.svg" alt="novidades" />

            <a href="">Novidades</a>
          </li>

          <li>
            <a href="">Vestidos</a>
          </li>

          <li>
            <a href="">Roupas</a>
          </li>

          <li>
            <a href="">Sapatos</a>
          </li>

          <li>
            <a href="">Lingerie</a>
          </li>

          <li>
            <a href="">Acessórios</a>
          </li>

          <li>
            <a href="">OUTLET</a>
          </li>
        </ul>
      </section>
    </header>
  );
}
