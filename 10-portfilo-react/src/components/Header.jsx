import passportPhoto from '../assets/.passport.png';
const Header = () =>{

return <header className="bg-blue-600 text-white p-5 rounded-xl flex justify-between items-center">
<div>
  <div className="font-bold text-3xl">Sharda jha</div>
  <div className="text-xl">Software Developer</div>
  </div>
 <img className="rounded-full w-16" src={passportPhoto}alt="photo"></img>


</header>;
}
export default Header;