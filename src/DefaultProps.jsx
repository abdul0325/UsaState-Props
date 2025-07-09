function DefaultProps({name="Displaying Default Value when the argument is missing! "}){
    return(<>
    <h1>Hi , {name} </h1>
    </>)
}
export default DefaultProps


export function PassJsx({children,color="brown"}){
    return( 
        <div style={{color:color, border:"5px solid red", width: "520px", margin:"20px"}}>
            
        <h1>Passing Jsx as a Value</h1>
        {children}
        </div>
    )
}