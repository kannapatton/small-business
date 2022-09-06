import React from 'react'
import { Container, Typography, Card } from '@mui/material'
import { useParams } from 'react-router';

const BizDetails = (props) =>{
    const {listings} = props;
    const {id} = useParams();
const details = listings.find((details) => details.id === Number(id));
return(
    <Container>
        <Card sx={{m:15, p:10}}>
            <div>
                <Typography>{details.name}</Typography>
            </div>
            <div>
                <Typography>{details.description}</Typography>
            </div>
            <div>
                <Typography>{details.address}</Typography>
            </div>
            <div>
                <Typography>{details.hours}</Typography>
            </div>
            
        </Card>
    </Container>
)
};

export default BizDetails;