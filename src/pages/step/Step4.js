import axios from 'axios';
import { useState } from 'react';
function Step4() {
    const [data, setData] = useState('');
    const handleClick = () => {
        // try {
        //   const response = await axios.get('http://localhost:1110/v1/api/clients');
        //   setData(response.data);
        // } catch (error) {
        //   console.error(error);
        // }
        axios
            .get('http://localhost:1110/v1/api/clients')
            .then((res) => {
                console.log('res: ', res);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });
    };
    return (
        <div>
            <button onClick={handleClick}>Get Data</button>
            {data && <div>{JSON.stringify(data)}</div>}
        </div>
    );
}

export default Step4;
