import React, {useState, useEffect} from 'react';

const GetOne = function(props) {

    let url = "api/posts/"
    url = url + props.value

    const [backendData, setBackendData] = useState([{}])

    useEffect(()=>{
        fetch(url).then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    console.log(backendData)

    return(
        <div>
            <p>{backendData.name},{backendData.surname},{backendData.dateOfBirth},{backendData.login}</p>
        </div>
    )

};

export default GetOne;