export default function Goodbye({name})
{
    return (
        <button>
            Goodbye { name ? `, ${name}.` : "!"}!
        </button>
    )
}