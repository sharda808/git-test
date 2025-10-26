const List = ({list}) => {
return (
  <>
  {list || list.length === 0 ? <h2>No students are present here</h2>: <h2> Students are present here</h2>}
  {list && list.length >0  && <ol className="list-decimal ml-6 mt-3 text-xl ">
 {list.map(item => <li>{item}</li>)} 
  </ol>}
  </>
)
}
export default List;