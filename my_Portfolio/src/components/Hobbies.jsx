import List from "./List";
import Section from "./Section";
import { Heart} from 'lucide-react';
const Hobbies = () => {
  const hobbies = ["Photography", "Movies","Playing","Reading"]
return (
<Section  icon = {<Heart />}  sectionTitle="Hobbies & Interest" >
<List items = {hobbies}/>
  </Section>
)
}
export default Hobbies;