import React from "react"
import './watch.scss'
import video from '../../multimedia/video/the-marías-hush.mp4'

import {ArrowBackOutlined} from "@mui/icons-material"

const Watch: React.FC = () => {

    return(
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>

            <video
                className='video'
                src={video}
                autoPlay
                controls

            ></video>
        </div>
    )
}

export default Watch