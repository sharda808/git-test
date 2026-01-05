import Pill from "./Pill";
import Section from "./Section";
import { Code } from 'lucide-react';

const Skills = () => {
  const skillsTitles = ["JavaScript","React","Node.js","Pyhton","SQL","Git","AWS","Docker"];
return <Section icon = {<Code />} sectionTitle = "Skills">
  {skillsTitles.map(title =><Pill  title = {title}/> )}

</Section>
}
export default Skills;

