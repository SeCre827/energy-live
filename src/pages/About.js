
/* All the needed components for the page are imported */
import React from "react";
import "./About.css";

function About() {
  return (
    <main>
      <section class="blank-banner-1">
        <div class="vartical-center">
          <div class="about-box">
            <h1 class="h1">Energy Live 2022 Creators</h1>
            <p>
              {" "}
              <b>Αλέξανδρος Κουριδάκης:</b> el18008@mail.ntua.gr{" "}
            </p>
            <p>
              {" "}
              <b>Λευτέρης Οικονόμου:</b> el17χχχ@mail.ntua.gr
            </p>
            <p>
              {" "}
              <b>Βικέντιος Βιτάλης:</b> el18803@mail.ntua.gr
            </p>
            <p>
              {" "}
              <b>Στέφανος Τσώλος:</b> el18050@mail.ntua.gr
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;