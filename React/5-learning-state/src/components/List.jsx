const List = ({list}) => {
  return (
    <>
    {!list || list.length==0 ? <h2>No Students are here</h2> : <h2>Here are  students</h2>}
    {list && list.length>0 && <ol>
      {list.map(item => <li key = {item}> {item}</li>)}
      </ol>}
    </>
  )
}
export default List;