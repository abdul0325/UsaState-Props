function Student({name,hello}){
    return(
        <>
        <h1>Student Name: {name}</h1>
        <h1>Change is : {typeof name}</h1>
        <h1>Passing function as Props: {hello}</h1>
        </>
    )
}
export default Student