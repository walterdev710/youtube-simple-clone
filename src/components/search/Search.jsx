import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Typography, Box, Container } from '@mui/material';

import { ServiceVideoApi } from '../../service/serviceVideoApi';
import { colors } from '../../constants/colors';
import { Videos } from '../exporter';

const Search = () => {
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try{
        const data = await ServiceVideoApi.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.items)
      }catch(err){
        console.log(err)
      }
    }

    getData();

  }, [id])
  return (
    <Box p={2} sx={{height:"90vh"}}>
      <Container maxWidth={"90%"}>
        <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
          Search Results for <span style={{color:colors.secondary}}>{id}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  )
}

export default Search