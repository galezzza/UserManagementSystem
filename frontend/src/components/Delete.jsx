import React, {useState, useEffect} from 'react';

const Delete = function(props) {

    let url = "api/posts/"
    url = url + props.value

    console.log(url)

    let [backendData, setBackendData] = useState([{}])

    useEffect(()=>{
        fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
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
        backendData="USER IS DELETED SUCCESSFULLY"
    }else {
        backendData="LOGIN NOT FOUND"
    }

    return(
        <div>
            <p>{JSON.stringify(backendData)}</p>
        </div>
    )

};

export default Delete;