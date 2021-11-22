import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

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
                            <img src={landmark.photo_url} />
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
                    </div>
                    
                    {/* <div className='maps-btn'>
                        <button onClick="window.location.href='https://maps.google.com';">Open In Google Maps</button>
                    </div> */}
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading ... </h1>;
    };

    return landmark ? <div className='Grid'>{loaded()}</div> : loading();
}

