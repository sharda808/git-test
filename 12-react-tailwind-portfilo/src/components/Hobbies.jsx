import List from "./List";
import Section from "./Section";
import { Heart } from 'lucide-react';

const Hobbies = () => {
  const hobbies = ["Photograpy","Hiking","playing guitar","Reading sci-fi","novels"];
return <Section icon = {<Heart />} sectionTitle = "Hobbies & Interest ">
<List  items = {hobbies}/>
</Section>
}
export default Hobbies;