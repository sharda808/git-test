
import {Award } from 'lucide-react';
import Section from "./Section";
import List from './List';
const Extracurricular = () => {
  const curricuItems = [
    "Volutunteer at local coding bootcamp forunderprivileged youth",
    "organizer of city-wide hackathon event",
    "Member of the University chess Club",
    
  ];
return (
<Section  icon={<Award />} sectionTitle="Extraccurricular Activities">
<List items = {curricuItems} />
</Section>
)
}


export default Extracurricular;