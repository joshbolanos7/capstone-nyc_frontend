import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { getOneLandmark } from "../services/landmarkService";

export default function Show(props){

    const[landmark, setLandmark] = useState(null);
    const params = useParams();
    const nav = useNavigate();

    async function updateLandmark() { 
        setLandmark(await getOneLandmark(params.id));
    }

    useEffect(() => updateLandmark(), []);

    const loaded = () => {
        return ( 
            <div>
                <div className='landmark_img'>
                    <img src={landmark.image} />
                </div>
            </div>
        )
    }

    const loading = () => {

        return <h1>Loading...</h1>;
    };

    return landmark ? loaded() : loading();
}
