import Button from '@mui/material/Button';
const handleClick = () => {
    alert("Hello");
}
function CustamButton() {
    return (
    <>
    <Button variant="outlined" onClick={handleClick} style={{ color: "white", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", }}>Click me</Button>
    </>        
    )
}

export default CustamButton;
