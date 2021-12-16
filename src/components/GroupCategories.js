import DropdownCategories from './DropdownCategories'
import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function GroupCategories() {
    const [data, setData] = useState([])
    const [categories, setCategories] = useState(new Map())
    const [loadingData, setLoadingData] = useState(false);

    useEffect(() => {
        const getData = async() => { 
            setLoadingData(true);
            const res = await axios.get("https://us-central1-infinitus-interviews.cloudfunctions.net/take-home-b")
            setData(res.data);
            setLoadingData(false);
        }

    
        getData();
    }, [])

    useEffect(() => {
        const parseCategories = () => {
            var tempCategories = new Map()
            data.forEach((elem) => {
                var category = elem["category"]
                console.log("CATEGORY " + category)
                tempCategories[category] = tempCategories[category] || []
                tempCategories[category].push(elem);

            });

            setCategories(tempCategories)
        }
        if(!loadingData) {
            parseCategories();
        }
    }, [loadingData])

    return ( 
        <div>
            <DropdownCategories
                data={categories}
            />
        </div>
    );
  }