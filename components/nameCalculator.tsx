import { useState, useRef } from "react";
import * as gtag from "../lib/gtag";

export default function NameCalculator() {
  const [name, setName] = useState("");
  const [hash, setHash] = useState("");

  const [copySuccess, setCopySuccess] = useState("");
  const hashFieldRef = useRef(null);

  function makeHash(input: string): string {
    var md5 = require("md5");
    const stringToHash = input
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\W/g, "");
    // console.log(`Making hash for "${stringToHash}"`);
    return input.length > 0 ? md5(stringToHash) : "";
  }

  function handleTyping(name: string) {
    setName(name);
    setHash(makeHash(name));
  }

  function handleCopy() {
    hashFieldRef.current.select();
    document.execCommand("copy");

    gtag.event({
      action: "copy_name",
    });

    setCopySuccess("Copied!");
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
                    className="input"
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
                <p className="control is-expanded">
                  <input
                    ref={hashFieldRef}
                    className="input has-background-primary-light code"
                    type="text"
                    value={hash}
                    readOnly
                  />
                </p>
                <p className="control">
                  <a className="button" onClick={handleCopy}>
                    Kopieer code
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
