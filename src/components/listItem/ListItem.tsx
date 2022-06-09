import React, {useState} from "react"

import './listItem.scss'
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from "@mui/icons-material"
import video from '../../multimedia/video/the-marías-hush.mp4'

interface IListItem {
    index: number;
}

const ListItem: React.FC<IListItem> = ({index}) => {
    const trailer = ''
    const [isHovered, setIsHovered] = useState(false)


    const classesListItem = isHovered ? 'listItem' : 'hidden'

    return(
        <div
            className='listItemWrapper'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                className='imgPreview'
                src="https://oxvo.ru/wp-content/uploads/2017/02/Dirk-Gentlys-Holistic-Detective-Agency.jpg"
                alt="..."
            />

            <div
                className={classesListItem}
                style={{left: (isHovered && (index * 225 - 50) + (index * 2.5)) as number}}
            >
                <img
                    src="https://oxvo.ru/wp-content/uploads/2017/02/Dirk-Gentlys-Holistic-Detective-Agency.jpg"
                    alt="..."
                />

                {isHovered && (
                    <video autoPlay={true} loop muted>
                        <source
                            src={video}
                            type='video/mp4'
                        />
                    </video>
                )}

                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrow className='icon' />
                        <Add className='icon' />
                        <ThumbUpAltOutlined className='icon' />
                        <ThumbDownAltOutlined className='icon' />
                    </div>

                    <div className="itemInfoTop">
                        <span>1 hour 14 mins</span>
                        <span className='limit'>+16</span>
                        <span>1999</span>
                    </div>

                    <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eaque eligendi omnis quidem
                    </div>

                    <div className="genre">Action</div>
                </div>
            </div>
        </div>
    )
}

export default ListItem