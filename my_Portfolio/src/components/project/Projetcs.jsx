import Project from "./Project";
import Section from "../Section";
import {  Briefcase} from 'lucide-react';
const Projects = () => {
  const projectList = [
    {title:"E-commerce Platform",desc:"Developed a fully-functional e-commerce platform with user authenticaiton, product mangemanr, and payment integration." , techUsed:["React", "Node.js","MongoDB","Stripe"]},
    {title:"Social Media Dashboard", desc:"Created a responsive dashboard for social media analytics, featuring real-time data visualization and reporitng.", techUsed:["Vue.js", "D3.js","Express"]}
  ]
return (
  <Section icon = {   <Briefcase />}  sectionTitle="Projects" >
{projectList.map(project => <Project title = {project.title} desc = {project.desc} techUsed={project.techUsed} />)}
  </Section>
)
}
export default Projects;