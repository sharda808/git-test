function Hello (){
  let myName = 'Sharda';
  let number = 456;
  let fullName = () => {
    return 'sharda jha';
  }
  return <p>
    MessageNo:{number} I am your master {fullName()}
  </p>
}
export default Hello;