const Graduation = ({title,school,year}) => {
return  <>
<h1 className="font-bold text-lg"> {title}</h1>
 <p className="font-sm text-gray-700 mb-4">
  {school}, {year}
</p>
</>
}
export default Graduation;