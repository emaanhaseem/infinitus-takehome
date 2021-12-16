import CapabilityCard from './CapabilityCard';
import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function DropdownCategories({ data, keys }) {
    
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        if(data != null && data["NLP"] != null && keys != null) {
            data["NLP"].map(elem => {
                console.log(JSON.stringify(elem["category"]))
            }) 
            console.log(JSON.stringify(data["NLP"]))
            setLoading(false)
        }
    }, [data, keys])

    
    return  loading ? (<p>loading</p>) : ( 

        <div>
            {keys.map(key => {
                return (
                    <Accordion>
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5" component="div">
                                {key}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {data[key].map((elem) => {
                                // <p>hiii</p>
                                return (
                                <CapabilityCard
                                    data={elem}
                                />
                                )
                            })}
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    );
  }