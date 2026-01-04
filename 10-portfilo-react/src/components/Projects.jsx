import Project from "./Project";
import Section from "./Section";
import { Briefcase } from 'lucide-react';
const Projects = () => {
  const projectList = [
   {
    title:"E-commerce-Plateform",
    desc:"Developed a fully-functional e-commrenc plateform with user authentication,product mangement,and payment integartion.",
    techUsed:["React","Node.js","MongoDB","stripe"]

   },
   {
    title:"Social Media Dashboard",
    desc:"Created a responsive dashboard for social media anaytics,featuring real-time data visualization and reporting.",
    techUsed:["Vue.js","D3.js","Express","PostgreSQL"]

   } 
  ];

return <Section icon ={<Briefcase />}
  sectionTitle="Projects">
{projectList.map(project =><Project  title={project.title}
desc ={project.desc} techUsed={project.techUsed}/>)}
</Section>

}
export default Projects;