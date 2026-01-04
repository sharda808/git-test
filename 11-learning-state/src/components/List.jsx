const List = ({list}) => {

return(
  <>
  {!list || list.length === 0 ? <h2>No students are here</h2>:<h2>Student are present here</h2>}


{list && list.length > 0  &&<ol className="list-decimal ml-5 mt-5 text-xl">
  {list.map(item=><li key = {item}>{item}</li>)}
  </ol>}

 </>
);
};
export default List;