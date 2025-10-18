import { Globe } from 'lucide-react';
import Section from "./Section";
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import SocialMedia from './SocialMedia';
import { Twitter } from 'lucide-react';


const Contact = () => {
  const socialLinks = [
{icon:<Linkedin />,title:"Linkedln", url:"https://in.linkedin.com"},
{icon:<Github />,title:"Github", url:"https://github.com/"},
{icon:  <Twitter />,title:"Twitter", url:"https://x.com/?lang=en"},
  ];
return <div className="pb-6">

 <Section  icon={<Globe />} sectionTitle="Contact & Social Media">
<p className=" text-gray-700 mb-4">
  Email:shardakumari96115@gmail.com <br />
  phone:7260057808 
  </p>
  {socialLinks.map(social  => <SocialMedia icon={social.icon}
title={social.title}  key={social.title} url={social.url} />)}

</Section>

</div>
}


export default Contact;