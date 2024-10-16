import { useState } from "react";
import Search from "../components/Search"

export default function Home()
{   
    const [query, setQuery] = useState('Cat');

    const onSearchChange = value => {
        setQuery(value);
    }

    return (
        <>
            <Search onSearchChange={onSearchChange} dark={true}/>
            <h1>I'm searching about {query} </h1>
        </>
    )
}