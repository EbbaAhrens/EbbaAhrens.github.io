import { NavButton } from "../Utils/NavButton";
import styles from "./PersonalLetter.module.scss";

export const PersonalLetter = () => {
  return (
    <div className={styles.personalLetter}>
      <NavButton route={"/"} text={"Tillbaka till CV"} />

      <h1>Hej!</h1>

      <p>
        Mitt namn är <strong>Ebba Ahrens</strong>, och jag söker sommarjobb. Jag
        är 24 år och bor i Lund tillsammans med min sambo. Just nu studerar jag
        en master i <strong>bioteknik</strong> med inriktning på livsmedel vid
        Lunds tekniska högskola, och jag ser fram emot nya utmaningar i sommar.
        Jag är även intresserad av och söker en plats för att utföra mitt
        examensarbete inom bioteknik våren 2026.
      </p>

      <p>
        Jag är en <strong>positiv och social person</strong> som älskar att lära
        mig nya saker. Sport och träning är en stor del av mitt liv, särskilt{" "}
        <em>tennis, löpning och styrketräning</em> – något som har gjort mig
        både ambitiös och målinriktad.
      </p>

      <p>
        Yrkesmässigt har jag flera års erfarenhet inom{" "}
        <strong>service och kundbemötande</strong>. Jag har arbetat som säljare
        på Leklust, där jag haft ansvar för kassan samt arbetsuppgifter inom
        lagerhantering, försäljning och reklamationer. Utöver det har jag jobbat
        på <strong>Rörvikshus</strong>, ett företag inom hustillverkningsbranschen, där jag
        bland annat assisterade vid kampanjer. Dessa erfarenheter har stärkt min
        förmåga att arbeta lösningsorienterat, hantera stressiga situationer och
        bemöta kunder på ett professionellt sätt.
      </p>

      <p>
        Min utbildning har gett mig en bred grund inom{" "}
        <strong>livsmedelsindustrin</strong>. Jag har läst kurser inom
        livsmedelsmikrobiologi, livsmedelsteknik, produktsäkerhet,
        livsmedelskemi och nutrition samt livsmedelsformulering. Inom kursen{" "}
        <em>Enhetsoperationer för bioteknik och livsmedelsindustrin</em> har jag
        arbetat med ett projekt för att optimera suspensionen av fruktpartiklar
        i yoghurt. Just nu deltar jag i ett projekt där jag kvalitetssäkrar
        processen för surdegsbröd genom att implementera bland annat GHP och
        HACCP.
      </p>

      <p>
        Utöver livsmedelsspecifika kurser har jag även utvecklat en djupare
        förståelse för{" "}
        <strong>
          kemi, biokemi, mikrobiologi, termodynamik, processteknik, genteknik
          och matematik
        </strong>
        . Dessa kunskaper har inte bara gett mig laboratorievana utan även en
        analytisk och problemlösande förmåga.{" "}
        <strong>Livsmedel är ett stort intresse för mig</strong>, och jag ser
        verkligen fram emot att få använda mina kunskaper i praktiken i sommar.
      </p>

      <p>
        Jag berättar gärna mer om mig själv och hur jag kan bidra. Ni når mig via nedanstående kontaktuppgifter!
      </p>

      <p>Ser fram emot att höra från er!</p>
    </div>
  );
};
