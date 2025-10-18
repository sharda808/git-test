
import {Heart } from 'lucide-react';
import Section from "./Section";
import List from './List';

const Hobbies = () => {
  const hobbies = ["Photograpgy","Hiking","Playing guitar","Reading sci-fi novels"];
return <Section  icon={<Heart />} sectionTitle="Hobbies and Interest">
<List items ={hobbies} />
</Section>
}


export default Hobbies;