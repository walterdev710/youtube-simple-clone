import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import { Box, Container } from "@mui/material"


import { ServiceVideoApi } from "../../service/serviceVideoApi";
import { ChannelCard, Videos } from "../exporter";

const Channel = () => {
    const [ channelDetail, setChannelDetail ] = useState()
    const [ videos, setVideos ] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const getData = async () =>{
            try{                
                const dataChannelDetail = await ServiceVideoApi.fetching(`channels?part=snippet&id=${id}`);
                setChannelDetail(dataChannelDetail.items[0]);
                const dataVideo = await ServiceVideoApi.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
                setVideos(dataVideo?.items)                
            }catch(err){
                console.log(err)
            }
        }

        getData()
    }, [id])

    return(
        <Box minHeight={"95vh"} mt={"1vh"}>
            <Box>
                <Box 
                    width={"100%"}
                    height={"200px"}
                    zIndex={10}
                    sx={{
                        backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
                        backgroundPosition:"center",
                        backgroundSize:"cover",
                        objectFit:"cover",
                        backgroundRepeat:"no-repeat"
                    }}
                />
                <ChannelCard video={channelDetail} marginTop={"-100px"} />
            </Box>
            <Container maxWidth={"90%"}>
                    <Videos videos={videos}/>
            </Container>
        </Box>
    )
}

export default Channel;