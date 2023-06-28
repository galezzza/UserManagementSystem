import React, {useState, useEffect} from 'react';

const Update = function(props) {

    let url = "api/posts/"

    let [backendData, setBackendData] = useState([{}])

    useEffect(()=>{
        fetch(url,{
            method: 'PUT',
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

    if(backendData[0]===1){
        backendData="DATA IS MODIFIED SUCCESSFULLY"
    }else {
        backendData="LOGIN NOT FOUND"
    }

    return(
        <div>
            <p>{JSON.stringify(backendData)}</p>
        </div>
    )

};

export default Update;