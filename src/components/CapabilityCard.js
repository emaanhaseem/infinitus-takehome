import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CapabilityCard({ data }) {
    // var newData = JSON.parse(data)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        if(data != null) {
            setLoading(false)
            console.log("DATA" + JSON.stringify(data))
        }
    }, [data])
    return loading ? (<p>loading</p>) : ( 

        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography 
                        sx={{ fontSize: 14 }} 
                        color={!data["enabled"] ? "text.secondary" : "text.primary"}
                        gutterBottom>
                        {data["title"]}
                    </Typography>
                    <Typography component="div">
                        {data["enabled"]}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
  }