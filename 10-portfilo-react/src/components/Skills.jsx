import {Code } from 'lucide-react';
import Section from "./Section";
import Pill from "./Pill";
const Skills = () => {
  const skillTitles = ["Javascipt","React","Node.js","Python","SQL","Git","AWS","Docker"]
return <Section  icon={<Code />} sectionTitle="Skills">
  {skillTitles.map(title => <Pill key={title} title = {title} />)}

</Section>
}


export default Skills;