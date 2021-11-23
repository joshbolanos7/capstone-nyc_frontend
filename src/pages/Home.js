// import { Link } from "react-router-dom";


export default function Home(props) {
    return (
        <div>
            <div className='home'>

            </div>
            <div className='cardImgs'>
                <div className="test-home">
                    <h1>Welcome to New York City!</h1>

                    {/* <img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Silhouettes-PNG/New_York_City_Skyline_Silhouette_PNG_Clip_Art.png?m=1523526551" alt='drawing-nyc-skyline' width='100%' height='100%' /> */}
                </div>

                <div className="buidings_card">
                    <img className='displayImg' src='https://cdn.vox-cdn.com/uploads/chorus_image/image/62583386/171005_16_54_26_5DSR1846.0.0.jpg' alt='midtown-skyline' width ='75%' height='75%'/>

                    <h3>Welcome to my App!</h3>
    
                </div>
            </div>
            <div className='Intro'>
                <h4>
                    In this app, you will learn about some of the iconic landmarks the great city of New York has to offer. From skyscrapers, to museums and parks as well. Take a trip and learn about some of the rich history that New York City has to offer. 
                </h4>
            </div>
        </div>
    )
}