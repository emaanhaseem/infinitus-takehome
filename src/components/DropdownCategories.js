import CapabilityCard from './CapabilityCard';
import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


/*

Generate an accordion dropdown group per category
    
*/

//checks if we have received data before processing, otherwise we load
export default function DropdownCategories({ data, keys }) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        if(data != null && data["NLP"] != null && keys != null) {
            setLoading(false)
        }
    }, [data, keys])

    
    return  loading ? (<p>loading</p>) : ( 

        <div>
            {keys.map(key => {
                return (
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 2,
                            pb: 2,
                        }}
                    >
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5" component="div">
                                {key}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Stack spacing={2}>
                            {data[key].map((elem) => {
                                return (
                                    <CapabilityCard
                                        data={elem}
                                    />
                                )
                            })}

                        </Stack>
                        </AccordionDetails>
                    </Accordion>
                    </Box>
                )
            })}
        </div>
    );
  }