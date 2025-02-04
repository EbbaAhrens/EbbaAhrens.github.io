import styles from "./Sections.module.scss";

export const Education = () => {
  return (
    <div id="education" className={styles.education}>
      <h1>Utbildning</h1>

      <div>
        <h2>
          <strong>Civilingenjörsutbildning i bioteknik</strong> - Lunds
          universitet (2021 - 2026, År 4)
        </h2>
        <ul>
          <li>Inriktning på livsmedel </li>
          <li>
            Kurser inom livsmedelskemi och nutrition, livsmedelsmikrobiologi, livsmedelsteknik, livsmedelsformulering, kvalite- och produktsäkerhet och probiotika
          </li>
          <li>
            Pågående projekt inom formulering av sockerfritt, gelatinfritt godis och kvalitetssäkring för surdegsbröd.
          
          </li>
        </ul>
      </div>

      <div>
        <h2>
          <strong>Naturvetenskapsprogrammet</strong> - Johannes
          Hedberggymnasiumet (2016 - 2019)
        </h2>
        <ul>
          <li>Gymnasiearbete om hur havsförsurning påverkar bakteriernas genuttryck</li>
        </ul>
      </div>
    </div>
  );
};
