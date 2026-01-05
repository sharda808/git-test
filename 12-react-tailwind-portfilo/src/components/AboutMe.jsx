
import { User } from 'lucide-react';
import Section from './Section';

const  AboutMe = () => {
return (
   <div className="mt-6">
<Section icon = {<User />} sectionTitle = "About Me">
   <p>
    I'am passionate full stack developer with 5 years of experience in building web applications.I love,creaitng,scalable,and user-friendly solutions to complex problems.
   </p>
</Section>
</div>
);
}
export default AboutMe;