import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';

/*

Display capability dropdown card
Gray text and unchecked switch if not enabled
otherwise black text and checked switch 

*/

export default function CapabilityCard({ data }) {
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        if(data != null) {
            setLoading(false)
        }
        
    }, [data])


    return loading ? (<p>loading</p>) : ( 

        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs = {10}>
                        <Typography 
                            sx={{ fontSize: 14 }} 
                            color={!data["enabled"] ? "text.secondary" : "text.primary"}
                            gutterBottom>
                            {data["title"]}
                        </Typography>
                        <Typography component="div">
                            {data["enabled"]}
                        </Typography>
                    </Grid>
                        <Grid item xs = {2}>
                        {!data["enabled"] ? <Switch disabled />
                        : <Switch disabled defaultChecked />}
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
        </div>
    );
  }