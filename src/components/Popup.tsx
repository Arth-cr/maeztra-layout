import "../styles/popup.scss";

export function Popup(props: any) {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    return (
      <>
        <div className="popup">
          <div className="popup_close" onClick={props.handleClose}></div>
          <div className="popup_container">
            <p className="popup_closeButton" onClick={props.handleClose}>
              FECHAR
            </p>
            <div>
              <div className="popup_contentMobile">
                <img src="/newsletter-mail-icon.png" alt="" />
                <h2>Bem Vindo à MAEZTRA</h2>
                <p>
                  Receba em Primeira mão
                  <strong> desconto e ofertas exclusivas</strong>
                </p>

                <label htmlFor="popup">
                  <input
                    type="text"
                    id="popup"
                    placeholder="Digite seu e-mail"
                  />
                </label>

                <button>
                  enviar
                  <img src="/sendbutton.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="popup">
      <div className="popup_close" onClick={props.handleClose}></div>
      <div className="popup_container">
        <p className="popup_closeButton" onClick={props.handleClose}>
          FECHAR
        </p>
        <div>
          <img src="/bg-newsletter.png" alt="" />

          <div>
            <img src="/newsletter-mail-icon.png" alt="" />
            <h2>Bem Vindo à MAEZTRA</h2>
            <p>
              Receba em Primeira mão
              <strong> desconto e ofertas exclusivas</strong>
            </p>

            <label htmlFor="popup">
              <input type="text" id="popup" placeholder="Digite seu e-mail" />
            </label>

            <button>
              enviar
              <img src="/sendbutton.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
