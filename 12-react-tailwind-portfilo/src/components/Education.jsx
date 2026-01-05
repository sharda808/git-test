import Graduation from "./Graduation";
import Section from "./Section";
import { BookOpen } from 'lucide-react';

const Education = () => {
return <Section icon = { <BookOpen/>} sectionTitle = "Education">
<Graduation  title ="Bachelor of Techonology" school="University of Allhabad" year="2024-2028"/>
<Graduation  title ="Full Stack Web Development Bootcamp" school="Code Acadamy" year="2020"/>
</Section>
}
export default Education;