import React, {useState, useEffect} from 'react';

const GetAll = function() {

    const [backendData, setBackendData] = useState([{}])


    useEffect(()=>{
        fetch("api/posts/").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])


    return(
        <div>
            {backendData.map(
                item => (
                    <p>{item.name},{item.surname},{item.dateOfBirth},{item.login}</p>
                )
            )}
        </div>
    )

};

export default GetAll;