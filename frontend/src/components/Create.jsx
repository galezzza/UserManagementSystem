import React, {useState, useEffect} from 'react';

const Create = function(props) {

    let url = "api/posts/"

    const [backendData, setBackendData] = useState([{}])

    useEffect(()=>{
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(props.value)
        }).then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])


    console.log(backendData)

    let string1 = "USER IS ADDED SUCCESSFULLY"

    return(
        <div>
            <p>{string1.concat(JSON.stringify(backendData))}</p>
        </div>
    )

};

export default Create;