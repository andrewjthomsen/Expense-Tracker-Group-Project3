import withRoot from "../../modules/withRoot.js";
// --- Post bootstrap -----
import React from "react";
import ProductSmokingHero from "../../components/ProductSmokingHero/ProductSmokingHero";
import AppFooter from "../../components/Footer/AppFooter";
import ProductHero from '../../components/ProductHero/ProductHero';
import ProductValues from '../../components/ProductValues/ProductValues';
import ProductHowItWorks from '../../components/ProductHowItWorks/ProductHowItWorks';
import AppAppBar from "../../components/Navbars/AppAppBar";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);