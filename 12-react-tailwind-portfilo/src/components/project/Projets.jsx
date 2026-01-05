import Section from "../Section";
import { Briefcase } from 'lucide-react';
import Project from "./project";


const Projects = () => {
  const projectList = [
    {title:"E-commerce Platform",desc:"Develop a fully functional e-commerce plateform with user authentication,product mangement,and payment integration",techUsed:['React','Node.js','MongoDB']},
        {title:"Social Media Dashboard",desc:"Create a responsive dashboard for social media anaytice,fetauring real-time data visualization and reporting",techUsed:['Vue.js','D3.js','Express','PostgreSQL']},
  ]
return (
<Section icon = {< Briefcase/>} sectionTitle = "Projects">
{projectList.map(project => <Project title = {project.title} desc = {project.desc} techUsed = {project.techUsed}/>)}
</Section>
);
}
export default Projects;