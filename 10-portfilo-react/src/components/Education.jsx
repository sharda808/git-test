import {  BookOpenText } from 'lucide-react';
import Section from "./Section";
import Graduation from './Graduation';

const Education = () => {
return <Section  icon={< BookOpenText />} sectionTitle="Education">
  <Graduation  title="Bachelor of Science in Eletronic and Communication" school ="j.k institute of Applied physics ans techonology(University of Allahabad)" year="2024-2028"/>
  <Graduation  title="Full Stack Web Development" school ="KG Coding" year="2025"/>
</Section>
}
export default Education;