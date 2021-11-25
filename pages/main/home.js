/* eslint-disable @next/next/no-img-element */
import { FooterComponent, HeaderComponent } from "components/modules";
import { PromoHomeComponent, MenuHomeComponent } from "components/molecules";

export default function Home() {
  return (
    <body>
      <div className="header"></div>
      <main>
        <div className="container">
          <div className="row">
            <div className="promo-section col-lg-4 p-4">
              <PromoHomeComponent />
            </div>
            <div className="menu-section col-lg-8 p-4 pt-0">
              <MenuHomeComponent />
            </div>
          </div>
        </div>
      </main>
      <footer className="footer-home"></footer>
    </body>
  );
}
