import Portfoliophoto from '../assets/sharda_Portfolio.png'
const Header = () =>{
return (
  <header className="bg-blue-600 text-white p-5 rounded-t-xl flex justify-between items-center">
    <div>
      <div className="font-bold text-3xl">John Doe</div>
      <div className="text-xl">Software Developer</div>
     
    </div>
 <img className='rounded-full w-20 float-right' src = {Portfoliophoto} alt = ""></img>
  </header>




)
}
export default Header;