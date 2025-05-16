import { useState } from "react"

export default function Search({onSearchChange})
{
    const [search, setSearch] = useState("");
    
    const onChangeSearchHandler = event => {
        setSearch(event.target.value);
        onSearchChange(event.target.value);
    }

    const formStyle = {
        display : 'flex',
        justifyContent : 'center',
        padding : '10px 0px',
        marginTop : '30px'
    }

    const inputFormStyle = {
        display : 'inline-block',
        width : '500px',
        fontSize : '30px'
    }

    return (
        <form action="" style={formStyle}>
            <input 
                type="text" 
                style={inputFormStyle} placeholder="search" 
                value={search}
                onChange={onChangeSearchHandler}
                />
        </form>
    )
}