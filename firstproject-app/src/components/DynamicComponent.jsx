const DynamicComponent = () => {
  const studentName = 'shyam';
  const marks = [23,45,67,98,54];
  const calculatePercantage = () => {
    let sum =0;
for(let i=0; i<marks.length; i++) {
sum += marks[i];
}
return sum/marks.length;
  }
return <p>{studentName} scored {calculatePercantage()}% marks in this exam</p>
}
export default DynamicComponent;
// function Hello() {
//   let myName = 'sharda';
//   let number = 456;
//   let fullName = () => {
//     return 'Prashant jain';
//   }
//   return <p>
//     MessageNo: {number} {myName} your master {fullName()}
//   </p>
// }
// export default Hello;