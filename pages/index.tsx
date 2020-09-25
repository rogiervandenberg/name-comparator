import Layout from "../components/layout";

import NameCalculator from "../components/nameCalculator";
import Explanation from "../components/explanation";

export default () => (
  <Layout home>
    <NameCalculator></NameCalculator>

    <div className="section">
      <div className="container has-text-centered box">
        <h2 className="title">Voorkom dezelfde naam</h2>

        <p>
          Je bent in verwachting (Gefeliciteerd! 🎉 👶 ) en je hebt een naam voor je kind bedacht. Maar, vrienden, familie, buren, etc. verwachten ook een kleine. Hoe weet je zeker dat jullie niet op dezelfde naam uitkomen? Met deze website kun je controleren of jullie niet dezelfde naam hebben bedacht, zonder dat je elkaar de naam hoeft te vertellen!</p>
      </div>
    </div>

    <Explanation></Explanation>
  </Layout>
);
