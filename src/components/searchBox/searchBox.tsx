import { useEffect, useState } from "react";
import axios from "axios";

function SearchBox() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:5000?q=${query}`);
            setData(res.data);
        };
        if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);

    return (
        <div className="SearchBox">
            <br/>
            <br/>
            <input className="SearchBox"
                    placeholder="search"
                    onChange={(e) => setQuery(e.target.value.toLowerCase)}
            />
        </div>
    )
}

export default SearchBox;
