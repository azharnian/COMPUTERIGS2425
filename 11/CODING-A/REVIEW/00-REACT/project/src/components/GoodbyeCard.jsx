
function GoodbyeCard({name, sex}){

    // if (sex === "male"){
    //     return (
    //         <div style={{backgroundColor : "blue"}}>
    //             <h1>Goodbye... {name}</h1>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div style={{backgroundColor : "pink"}}>
    //             <h1>Goodbye... {name}</h1>
    //         </div>
    //     )
    // }

    return (
        <div style={ sex === 'male' ? {backgroundColor : "blue"} : {backgroundColor : "pink"}}>
            <h1>Goodbye... {name} {sex === 'female' && '👄'}</h1>
        </div>
    )
}

export default GoodbyeCard;