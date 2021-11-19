const URL = 'https://sleepy-brook-05051.herokuapp.com/landmarks'

const getLandmarks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const ret = await data;
    return (ret);
}

const getOneLandmarks = async (id) => {
    const response = await fetch(URL+'/'+id);
    const data = await response.json();
    const ret = await data;
    return (ret);
}

export { 
    getLandmarks,
    getOneLandmarks,
}