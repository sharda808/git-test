import Section from "./Section";
import { Globe } from 'lucide-react';
import { Link } from 'lucide-react';
import { GitMerge } from 'lucide-react';
import { Sparkle } from 'lucide-react';
import SocialMedia from "./SocialMedia";
const Contact = () => {
 const socialLinks = [
  {icon : <Link />, title: "Linkedin", url: "https://in.linkedin.com/"},
    {icon :  <GitMerge /> , title: "Github", url: "https://github.com/"},
      {icon :  <Sparkle />, title: "Twitter", url: "https://x.com/"},
 ]
   return <div className="pb-6">
<Section  icon = {<Globe />}  sectionTitle="Contact & Social Media" >
<p className="text-sm text-gray-700 mb-4">
  Emial:john.doe@example.com <br />
  phone: (123) 456-7890 
  </p>
{socialLinks.map(social => <SocialMedia icon = {social.icon} title = {social.title} key = {social.title} url = {social.url} />)}

  </Section>
  </div>

}
export default Contact;