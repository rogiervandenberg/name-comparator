import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Babynaam vergelijker";

export default function Layout({
  children,
  home,
  title,
}: {
  children: React.ReactNode;
  home?: boolean;
  title?: string;

}) {
  /*
   * Added this to toggle the is-active class. See:
   *
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * https://github.com/jgthms/bulma/issues/856
   */
  const toggleStyles = (event) => {
    document.querySelector("#burger").classList.toggle("is-active");
    document.querySelector("#navbarmenu").classList.toggle("is-active");
  };

  return (
    <>
      <Head>
        <title>
          {siteTitle} {title ? " - " + title : ""}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Zeker weten dat jullie niet dezelfde naam hebben bedacht, zonder dat je elkaar de naam hoeft te vertellen!"
        />
        <meta property="og:url" content="https://www.naamvergelijker.nl/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Babynaam vergelijker" />
        <meta
          property="og:description"
          content="Zeker weten dat jullie niet dezelfde naam hebben bedacht, zonder dat je elkaar de naam hoeft te vertellen!"
        />
        <meta
          property="og:image"
          content="https://www.naamvergelijker.nl/images/undraw_baby_ja7a.svg"
        />
        <meta
          property="twitter:url"
          content="https://www.naamvergelijker.nl/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Babynaam vergelijker" />
        <meta
          name="twitter:description"
          content="Zeker weten dat jullie niet dezelfde naam hebben bedacht, zonder dat je elkaar de naam hoeft te vertellen!"
        />
        <meta
          name="twitter:image"
          content="https://www.naamvergelijker.nl/images/undraw_baby_ja7a.svg"
        />
      </Head>
      <header>
        <nav
          className="navbar is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item">
                <img src="/images/baby.png" />
              </a>
            </Link>
            <a
              id="burger"
              onClick={toggleStyles}
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarmenu"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarmenu" className="navbar-menu">
            <div className="navbar-start">
              <Link href="/">
                <a className="navbar-item">Home</a>
              </Link>
              <Link href="/over">
                <a className="navbar-item">Over deze website</a>
              </Link>
            </div>
            {/* <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a
                    onClick={() => alert("You clicked the button!")}
                    className="button is-primary"
                  >
                    Click
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </nav>
      </header>
      {children}
      <footer className="footer">
        <div className="content has-text-centered">
          <span>
            © <a href="https://twitter.com/rogiervdberg">Rogier van den Berg</a>{" "}
            2020
          </span>
        </div>
      </footer>
    </>
  );
}
