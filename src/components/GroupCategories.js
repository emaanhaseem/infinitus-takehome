import DropdownCategories from './DropdownCategories'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

/*

Groups all AI capabilities by categories in "categoryGroups"
Sends this data to DropDownCategories to format and display

*/

export default function GroupCategories() {
    const [data, setData] = useState([])
    const [categoryGroups, setCategoryGroups] = useState(new Map())
    const [loadingData, setLoadingData] = useState(false);
    const [loadingCategories, setLoadingCategories] = useState(false);
    const [categories, setCategories] = useState([])

    //API call refreshes upon render. 
    useEffect(() => {
        const getData = async() => { 
            setLoadingData(true);
            const res = await axios.get("https://us-central1-infinitus-interviews.cloudfunctions.net/take-home-b")
            setData(res.data);
            setLoadingData(false);
        }

    
        getData();
    }, [])

    //When data has fully loaded, organize groups by category
    useEffect(() => {
        const parseCategories = () => {
            var tempCategoryGroups = new Map()
            var tempCategories = new Set()
            data.forEach((elem) => {
                var category = elem["category"]
                tempCategoryGroups[category] = tempCategoryGroups[category] || []
                tempCategoryGroups[category].push(elem);
                tempCategories.add(category)
            });

            setCategoryGroups(tempCategoryGroups) 
            setCategories(Array.from(tempCategories))
        }
        if(!loadingData) {
            setLoadingCategories(true)
            parseCategories();
            setLoadingCategories(false)
        }
    }, [loadingData])

    //display "loading" if data is not ready yet
    return ( 
        <div>
            {loadingCategories || loadingData ? (<p>loading</p>) :
                <DropdownCategories
                        data={categoryGroups}
                        keys={categories}
                    />
            }
            
        </div>
    );
  }