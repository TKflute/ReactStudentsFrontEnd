import React, {useState, useEffect} from 'react';
import axios from 'axios';


// 3 types of components:
// autonomous component - logic for getting data is inside the component
// higher order component - parent component fetches data and passes it down through props
// abstracted service layer- 
//separating service layer from rendering of components- helps to reduce code and allow for more reus

// custom hook for performing get request
export const useFetch = (searchMethod, searchValue) =>{

    const getAll = "http://studentrestapi-env.eba-5kxkwmiq.us-east-2.elasticbeanstalk.com/api/students";
    const getById = "http://studentrestapi-env.eba-5kxkwmiq.us-east-2.elasticbeanstalk.com/api/students/" + searchValue;
    let url = null;

    // allows us to use same hook for diff get requests/params
    switch(searchMethod){
        case 'getAll': 
            url = getAll;
            break;
        case 'getById':
            url = getById;
            break;
        default:
            url = null;
    }

    // set states for initial empty array of students and loading boolean
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // contains our Axios API call, with error handling and finally block
    useEffect(() =>{
        const fetchData = async function(){
            try{
                setLoading(true);
                const response = await axios.get(url);
                if(response.status === 200){
                    setData(response.data);
                }
            }catch(error){
                throw error;
            }finally{
                setLoading(false);
            }
        };
        fetchData();
        // the [] contains states that we check for change, if one state in array changes, effect will execute
    }, [url]);
    return{loading, data};
}

export function deleteStudent(studentId){
    return axios.delete('http://studentrestapi-env.eba-5kxkwmiq.us-east-2.elasticbeanstalk.com/api/delete/student/' + studentId);
}

// do not need JSON.stringify()
export function createStudent(student){
    return axios.post('http://studentrestapi-env.eba-5kxkwmiq.us-east-2.elasticbeanstalk.com/api/add/student', student);
}

export function updateStudent(student){
    return axios.put('http://studentrestapi-env.eba-5kxkwmiq.us-east-2.elasticbeanstalk.com/api/update/student', student);
}