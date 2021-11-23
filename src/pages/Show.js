import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router";

import { getOneLandmarks } from "../services/landmarkService";

import './css/show.scss'

export default function Show(props) {
    const [landmark, setLandmarks] = useState(null);
    const params = useParams();
    async function updateLandmarks() {
        setLandmarks(await getOneLandmarks(params.id));
    }

    useEffect(() => updateLandmarks(), []);

    const loaded = () => {
        return (
            <div>
                <div className='landmarkShow'>
                    <div className='showLeft'>
                        <div classname='land_name'>
                            <h2>{landmark.name}</h2>
                        </div>

                        <div className='land_img'>
                            <img src={landmark.photo_url} alt={landmark.name}/>
                        </div>
                    </div>


                    <div className='showRight'>
                        <div className='land_type'>
                            <h3>{landmark.type}</h3>
                        </div>
                        <div className='land_address'>
                            <h4>Address: {landmark.address}</h4>
                        </div>
                        <div className='land_descrip'>
                            <p>{landmark.description}</p>
                        </div>

                         <div className='maps-btn'>
                             <p>Need help getting around? Click the button to show you the fastest way to get around the city and hopefully you don't get mugged!</p>
                        <Link to={'/transportation'}>
                        <button onClick="a href='https://maps.google.com';">Open MTA Transit Map</button>
                        </Link>
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading ... </h1>;
    };

    return landmark ? <div className='Grid'>{loaded()}</div> : loading();
}

