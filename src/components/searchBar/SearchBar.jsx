import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

// import { colors } from "../../constants/colors";

const SearchBar = () => {
    const [ value, setValue ] = useState('')
    const navigate =useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();

        if(value){
            navigate(`/search/${value}`)
            setValue('')
        }
    }

    return(
        <Paper 
            component={"form"} 
            onSubmit={submitHandler}
            sx={{pl:2, border:`1px solid #D5CABD`, boxShadow:"none", mr:5,}}
        >
            <input type="text" placeholder="Search..." className="search-bar" value={value}  onChange={e => setValue(e.target.value)}/>
            <IconButton type="submit">
                <Search/>
            </IconButton>
        </Paper>
    )
}

export default SearchBar;