import React,{Component,useState,useEffect} from 'react'
import {Story,MoreStory} from '../components/story'

export default function StoryLayout() {

    const [switchMiniStory,setSwitchMiniStory]=useState(false)

    const [stories,setStories]=useState([

        {id:1,imgUrl:"https://picsum.photos/200/300"},
        {id:2,imgUrl:"https://source.unsplash.com/random"},
        {id:3,imgUrl:"https://source.unsplash.com/random"},
        {id:4,imgUrl:"https://picsum.photos/200/300"},
        {id:5,imgUrl:"https://picsum.photos/200/300"},
        {id:6,imgUrl:"https://picsum.photos/200/300"},
        {id:7,imgUrl:"https://picsum.photos/200/300"},

    ])

    useEffect(() => {

        const handleScroll = () => {
            if (window.pageYOffset > 37) {
                setSwitchMiniStory(true)
            }else{
               setSwitchMiniStory(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }

    }, [])

  

    return (
        <div className={ "story-layout "+ (switchMiniStory && "fixed-stories")}>
            <div className="story-container"> 
                {stories.map((story,index)=>{
                    return(    
                        <Story
                            key={index}
                            imgUrl={story.imgUrl}
                            isMini={switchMiniStory}
                        />
                    )
                })}
                <MoreStory
                    isMini={switchMiniStory}
                />
            </div>
            <style jsx>{`

                .story-layout{
                    background-color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 80px;
                    width: 100vw;       
                }

                .story-layout .story-container{
                    max-width: 90%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;   
                }
                @media screen and (max-width: 1335px) {
                    .story-layout .story-container{
                        overflow-x: scroll;
                    }
                }
            
                .story-layout .story-container::-webkit-scrollbar {
                    display: none;
                }

                .fixed-stories{
                    position: fixed;
                    z-index: 1;
                    top: -25px;
                    left: 0;

                }
            
            `}</style>
        </div>
    )
}

