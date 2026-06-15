const listCourse = ["s",'x','d','l','f','e','u'];
const ShowSection = (e)=>{
alert(e.target.value);
}
function SingleDropdownList() {
  return (
    <>
    <select name="" id="" onChange={ShowSection}>
    {
    listCourse.map(x=><option value={x}>{x}</option>)
    }
    </select>
    </>
  )
}
export default  SingleDropdownList;
        