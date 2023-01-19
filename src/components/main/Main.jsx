import React, { useState, useEffect } from "react";

import { Stack, Box,Container, Typography } from "@mui/material"

import { colors } from "../../constants/colors"
import { Category, Videos } from "../exporter";
import { ServiceVideoApi } from "../../service/serviceVideoApi"

const Main = () => {
    const [ selectedCategory, setSelectedCategory ] = useState("New");
    const [ videos, setVideos ] = useState([])

    const selectedCategoryHandler = (category) => setSelectedCategory(category);

    useEffect(() => {
        const getData = async () => {
            try{                
                const data = await ServiceVideoApi.fetching(`search?part=snippet&q=${selectedCategory}`);
                setVideos(data.items)
            }catch(err){
                console.log(err)
            }
        } 
        getData()
        // ServiceVideoApi.fetching('search').then(data => setVideos(data))
    }, [selectedCategory])

    return(
        <Stack>
            <Category 
                selectedCategoryHandler={selectedCategoryHandler}
                selectedCategory={selectedCategory}
            />
            <Box p={2} sx={{height:"90vh"}}>
                <Container maxWidth={"90%"}>
                    <Typography variant={"h4"} fontWeight={'bold'} mb={2}>
                        {selectedCategory} <span style={{color: colors.secondary}}>videos</span>
                    </Typography>
                    <Videos videos={videos}/>
                </Container>
            </Box>
        </Stack>
    )
}

export default Main;