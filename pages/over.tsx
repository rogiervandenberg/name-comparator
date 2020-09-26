import Layout from "../components/layout";

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <h1 className="title pb-6">Over deze website</h1>
        <h2 className="subtitle">Een stukje achtergrond</h2>
        <div className="content">
          <p>
            Een paar jaar geleden, toen wij in verwachting waren van onze
            dochter, tegelijkertijd met vrienden, hebben we elkaars bedachte
            namen vergeleken door gebruik te maken van MD5-hashes. Als IT'ers
            onder elkaar was dat logisch en eenvoudig te doen.
          </p>
          <p>
            Hier is vaak door derden, onder andere mijn vrouw, broer en zus om
            gelachen. <i>#nerd</i>
          </p>
        </div>

        <div className="content">
          <div className="columns pt-5">
            <div className="column">
              <div className="content">
                <p>
                  Maar toen waren mijn broer en zus in verwachting en vroeg men
                  zich af hoe je kon voorkomen dat dezelfde naam bedacht werd...
                </p>
              </div>
            </div>
            <div className="column">
              <img
                className="image-box border-shadow "
                src="/images/dat_willen_we.png"
                alt="Thinking about a solution"
              />
            </div>
          </div>

          <div className="columns pt-5">
            <div className="column">
              <img
                className="image-box border-shadow "
                src="/images/graag_wat_in_elkaar.png"
                alt="Thinking about a solution"
              />
            </div>

            <div className="column">
              <div className="content">
                <p>
                  Dus het leek me wel een goed plan het idee van 'toen' om te
                  zetten in deze mini-website. 😊
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <p>En het resultaat, daar kijk je nu naar. Veel plezier ermee!!</p>
          <p>Groet, Rogier</p>
        </div>
        <h2 className="subtitle">Disclaimer</h2>
        <div className="content is-italic">
          <p>
            Deze website geeft geen enkele garantie over de beschikbaarheid,
            werking of resultaten. Je kunt me niet verantwoordelijk houden of
            aansprakelijk stellen met betrekking tot de inhoud van deze website
            of geleverde dienst.
          </p>
          <p>
            De mooie plaatjes zijn gemaakt door <a href="https://twitter.com/ninaLimpi">Katerina Limpitsouni</a>.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);
