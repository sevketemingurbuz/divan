import React from "react";
import InterPeriods from "./InterPeriods";
import Buttons from "./Buttons";

export default function Home() {
  return (
    <div>
      <div class="text-white text-center">
        <h1 class="mb-3 ">Divan Edebiyatı</h1>
        <h5 class="mb-4">Tarihsel Arası Geçiş</h5>
        <Buttons />
        <figure
          class="text-center text-white d-inline-block lead" style={{ marginTop: "5em" }}
        >
          <blockquote class="blockquote">
            <p >
              <strong>
                Ger derse Fuzûlî ki “güzellerde vefâ var” Aldanma ki şâir sözü
                elbette yalandır
              </strong>
            </p>
          </blockquote>
          <figcaption class="blockquote-footer text-end text-white">
            Çokta <cite title="Source Title">Fuzûlî</cite>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
