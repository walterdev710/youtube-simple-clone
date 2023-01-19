import React from 'react'
import { Link } from 'react-router-dom'

import { Stack, Box } from '@mui/system'

import { Logo } from "../../constants/index"
import { colors } from '../../constants/colors'
import { SearchBar } from '../exporter'

const Navbar = () => {
  return (
    <Stack 
      direction={"row"} 
      alignItems={"center"} 
      justifyContent={"space-between"} 
      p={2}
      sx={{ position: "sticky", zIndex:999, top:0, backgroundColor:colors.primary}}
    >
      <Link to={"/"}>
        <img src={Logo} alt='logo'height={45} />
      </Link>
      <SearchBar/>
      <Box/>
    </Stack>
  )
}

export default Navbar