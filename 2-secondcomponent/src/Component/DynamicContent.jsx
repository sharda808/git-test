const DynamicContent = () => {
  const studentName = 'sharda';
  const marks = [23,45,67,98,54];
  const calMarks = () => {
    let sum=0;
    for(let i=0; i<marks.length; i++){
      sum+=marks[i];
    }
    return sum/marks.length;
  }
return <p>{studentName} scored {calMarks()}% marks in this exam</p>
};  
export default DynamicContent; 