import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getLandmarks } from "../services/landmarkService";

import './css/landmark.scss';


export default function Landmarks(props) {
    const [landmark, setLandmarks] = useState(null);

    async function updateLandmarks() {
        setLandmarks(await getLandmarks());
    }
    useEffect(() => updateLandmarks(), []);

    const loaded = () => {

        return (
            <div>
                <div className='landmarks'>
                 <h1>this is the landmarks page (click any of the landmarks below)</h1>
                    {landmark.map((land, i) => {
                        return (
                            <div key={land.id}>
                                <div className='land background'>
                                    <Link to={`/landmarks/${land.id}`}>
                                        {/* <div className='landImgThumb' >
                                            <img src={land.photo_url} />
                                        </div> */}

                                        <div className='land-display'>
                                            <h1>
                                                {land.name}
                                            </h1>
                                            <h3>{land.type}</h3>
                                        </div>
                                    </Link>
                                    <div>
                                        {/* <p>{land.description}</p> */}
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        );
    }
    const loading = () => {
        return <h1>Loading....</h1>;
    };
    return landmark ? <div className='landGrid'>{loaded()}</div> : loading();
}