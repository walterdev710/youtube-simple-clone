import React from 'react'

import { Box, Stack, CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <Box minHeight={"90vh"}>
        <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"70vh"}
        >
            <CircularProgress />
        </Stack>

    </Box>
  )
}

export default Loader