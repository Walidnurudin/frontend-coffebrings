import React from "react";
import { HeaderComponent, FooterComponent } from "components/modules";

function Dashboard() {
  return (
    <>
      <HeaderComponent />
      <section className="dashboard__page">
        <div className="container">
          <h5 className="rubik-700 text-center">
            See how your store progress so far
          </h5>

          <div className="d-flex justify-content-center mt-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Daily
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Weekly
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Monthly
              </label>
            </div>
          </div>

          <div className="dashboard__page--chart mt-4">
            <h5 className="rubik-700">Monthly Report</h5>
            <span className="text-secondary rubik-400">Last 9 months</span>

            <div>chartjs</div>
          </div>

          <button className="dashboard__button nunito-700">
            Download Report
          </button>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}

export default Dashboard;
