import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          My name is Leo, I am a Front-End Developer from Bangor, Northern
          Ireland. My path has taken a few changes over the years - from doing 3
          years I.C.T in college, to the last 12 years being a Commercial Diver.
          My passion and interest in web development has led me back to being a
          Front-end Developer.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/files/resume.pdf";
          }}
        >
          My CV
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
