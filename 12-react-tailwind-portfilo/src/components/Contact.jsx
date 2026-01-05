import Section from "./Section";
import { Globe } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
import SocialMedia from "./SocialMedia";
const Contact = () => {
  const socialLinks = [
    {icon:<Linkedin />,title:"linkedin", url:"#"},
      {icon: <Github /> ,title:"GitHub", url:"https://github.com/"},
        {icon:<Twitter />,title:"Twitter", url:"https://x.com/"}
  ]
return (
<div className="pb-6">
 <Section icon = {<Globe />} sectionTitle = "Contact & Social Media">
<p className="text-sm text-gray-700 mb-4">
  Emial:john.doe@example <br />
  Phone:(123) 456-7890
</p>
{socialLinks .map(social => <SocialMedia  icon = {social.icon} title = {social.title} key={social.title} url ={social.url}/>)}

 </Section>
</div>
)
}
export default Contact;