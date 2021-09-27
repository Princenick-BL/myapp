import React, { Component } from 'react'
import ReadMoreIcon from '@mui/icons-material/ReadMore'
import TouchAppIcon from '@mui/icons-material/TouchApp';

export class Story extends Component {
    render() {
        return (
            <>
                <div className={"story "+ ( this.props.isMini ? "story-isMini" : "")} style={{backgroundImage:"url("+this.props.imgUrl+")"}}>
                    <div className="story-preview">
                        <TouchAppIcon/>
                    </div>
                </div>
                <style jsx>{`
                    .story{
                        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
                        min-width: 120px;
                        width: 120px;
                        height: 170px;
                        border-radius: 5px;
                        padding: 5px;
                        background-size: cover;
                        background-repeat: no-repeat;
                        margin: 1em;
                        cursor: pointer;                    
                    }
                    .story .story-preview{
                        border: 2px solid rgb(0, 140, 255);
                        width: 30px;
                        height: 30px;
                        border-radius: 30px;
                        stroke: 0.5em blue;
                    }
                    @media screen and (min-width: 900px) {
                        .story:hover{
                            transform: scale(1.1);
                        }  
                    }
                      
                    .story-isMini{
                        width: 50px;
                        height: 50px;
                    }

                `}</style>
            </>
        )
    }
}

export class MoreStory extends Component {
    render() {
        return (
            <>
                <div className={"story more-story " + ( this.props.isMini ? "story-isMini" : "")}>
                    <ReadMoreIcon/>
                    <div className="more-story-text">
                        Voir plus
                    </div>
                </div>
                <style jsx>{`
                    .story{
                        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
                        min-width: 120px;
                        width: 120px;
                        height: 170px;
                        border-radius: 5px;
                        padding: 5px;
                        background-size: cover;
                        background-repeat: no-repeat;
                        margin: 1em;
                        cursor: pointer;                    
                    }
                    
                    @media screen and (min-width: 900px) {
                        .story:hover{
                            transform: scale(1.1);
                        }  
                    }
                    .more-story{
                        background: rgb(74,255,0);
                        background-color: #8BC6EC;
                        background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
                    }   
                    .more-story-text{
                        height: calc( 100% - 50px );
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .story-isMini{
                        width: 50px;
                        height: 50px;
                    }

                `}</style>
            </>
        )
    }
}
