 import passportPhoto from '../assets/sharda.png.jpeg'
const Header = () => {
return (
  <header className="bg-blue-600 text-white p-5 rounded-xl flex justify-between items-center">
    <div>
      <div  className="font-bold text-3xl">sharda jha</div>
      <div className="text-xl">Full stack developer</div>
    
    </div>
   <img className=" rounded-full w-16 " src={passportPhoto}  />
    </header>
);
}
export default Header;