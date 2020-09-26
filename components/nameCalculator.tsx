import { useState, useRef } from "react";
import * as gtag from "../lib/gtag";
import NameCode from "../lib/nameCode";

export default function NameCalculator() {
  const textOnCopyButton = "Kopieer code";

  const [name, setName] = useState("");
  const [hash, setHash] = useState("");

  const [copySuccess, setCopySuccess] = useState(textOnCopyButton);
  const hashFieldRef = useRef(null);

  function handleTyping(name: string) {
    setName(name);
    setHash(new NameCode().forName(name));
  }

  function handleCopy() {
    hashFieldRef.current.select();
    document.execCommand("copy");

    gtag.event({
      action: "copy_name",
    });

    setCopySuccess("Gekopieerd!!");

    setTimeout(() => {
      setCopySuccess(textOnCopyButton);
    }, 1000);
  }

  return (
    <section className="hero is-medium is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 mb-0">Babynaam vergelijker</h1>

          <div className="container mb-6 is-italic">
            Zeker weten dat jullie niet dezelfde naam hebben bedacht.
          </div>
          <div className="columns mt-6">
            <div className="column">
              <h1 className="title">Naam</h1>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Vul hier de naam in die je hebt bedacht"
                    onChange={(event) => handleTyping(event.target.value)}
                    value={name}
                  />
                </div>
              </div>
            </div>

            <div className="column">
              <h1 className="title">Code</h1>
              <div className="field has-addons">
                <p className="control">
                  <input
                    ref={hashFieldRef}
                    className="input is-medium has-background-primary-light code"
                    type="text"
                    value={hash}
                    readOnly
                  />
                </p>
                <p className="control">
                  <a className="button is-medium" onClick={handleCopy}>
                    {copySuccess}
                  </a>
                </p>
              </div>
              <p className="help">
                Vergelijk bovenstaande code met je vrienden of familie
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
