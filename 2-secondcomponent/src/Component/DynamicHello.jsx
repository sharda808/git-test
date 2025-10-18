function DynamicHello(){
  let myName = 'sharda';
  let number = 456;
  let fullName = () => {
    return 'sharda jha';
  }
  return <p>
    MessageNo:{number} {myName} your master {fullName()}
  </p>
}
export default DynamicHello;