export default function Explanation() {
  return (
    <div className="container">
      <h2 className="section heading has-text-centered">Hoe werkt dit?</h2>

      <div className="section">
        <div className="columns">
          <div className="column is-7">
            <div className="title">Je vult de naam in</div>
            <div className="content">
              <p>
                Vul de naam in die je hebt bedacht. In het vakje "Code" zie je
                een code verschijnen. Deze code correspondeert met de ingevulde
                naam en kan worden vergeleken met een andere code van deze
                website.
              </p>
              <p>
                Als 2 codes gelijk zijn, dan is dezelfde naam gebruikt. Als 2
                codes verschillend zijn, dan zijn de namen ook verschillend.
              </p>
            </div>
          </div>
          <div className="column"></div>
          <div className="column is-4 is-hidden-mobile">
            <img
              className="image-box border-shadow "
              src="/images/undraw_baby_ja7a.svg"
              alt="mother with baby"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="columns">
          <div className="column is-4 is-hidden-mobile">
            <img
              className="image-box border-shadow "
              src="/images/undraw_in_progress_ql66.svg"
              alt="process"
            />
          </div>
          <div className="column"></div>
          <div className="column is-7">
            <div className="title">Je berekent een code</div>
            <div className="content">
              <p>
                De code die je krijgt is een zogenaamde "
                <a href="https://en.wikipedia.org/wiki/MD5">MD5-hash</a>".
                Eenvoudig gezegd betekent dit dat de naam wordt versleuteld
                volgens een encryptie-algoritme, dat altijd hetzelfde resultaat
                geeft bij dezelfde invoer.
              </p>
              <p>
                Zo zal de naam "Wim" altijd&nbsp;
                <span className="tag">874e1de3766969edaa069f98aa2e6f11</span>
                als code opleveren en "Anna"&nbsp;
                <span className="tag">a70f9e38ff015afaa9ab0aacabee2e13</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="columns">
          <div className="column is-7">
            <div className="title">Namen die op elkaar lijken</div>
            <div className="content">
              <p>
                Een ingevoerde naam wordt ontdaan van hoofdletters, spaties en
                andere tekens. Dus "Jan-Willem" en "jan willem" zullen dezelfde
                code opleveren (Het is immers dezelfde naam).
              </p>
              <p>
                Maar, een andere naam die erg veel lijkt op een ingevoerde naam
                is na versleuteling totaal anders. Dus "Anna" en "Anne" krijgen
                een andere code. Net zoals bij "Eliza" en "Elisa", "Robert" en
                "Robbert" of "René" en "Renee".
              </p>
            </div>
          </div>
          <div className="column"></div>
          <div className="column is-4 is-hidden-mobile">
            <img
              className="image-box border-shadow "
              src="/images/undraw_our_solution_htvp.svg"
              alt="Thinking about a solution"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="columns">
          <div className="column is-4 is-hidden-mobile">
            <img
              className="image-box border-shadow "
              src="/images/undraw_personal_information_962o.svg"
              alt="Personal information"
            />
          </div>
          <div className="column"></div>
          <div className="column is-7">
            <div className="title">Privacy</div>
            <div className="content">
              <p>
                Deze website – inclusief alle invoer en berekeningen die worden
                gedaan – draait volledig in jouw browser. Er wordt niets naar
                een server verzonden of opgeslagen. In feite is het een mooi
                opgemaakt 'schilletje' om een standaard stukje code op jouw
                computer.
              </p>
              <p>
                Als je het zelf wilt bekijken, kijk dan naar de broncode van
                deze website op <a href="https://github.com/rogiervandenberg/name-comparator">GitHub</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
