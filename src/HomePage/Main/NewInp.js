import { useNavigate, useParams } from "react-router-dom"
import { BlackSearch } from "../Shared/icons/BlackSearch"


export const NewInp = ({search, setSearch, handleSearch}) => {
const navigate = useNavigate()
    return (
        <>
            <form style={{ display: 'flex', alignItems: 'center' }} onSubmit={ handleSearch} >
                <input name="search"
                    value={search} 
                    type="text"
                    id="search"
                    className="input_search"
                    placeholder="Axtar"
                    onChange={(e) => setSearch(e.target.value)} />
                <button type="submit" className="inputSearch">
                    <BlackSearch />
                </button>
            </form>
        </>
    )
} 