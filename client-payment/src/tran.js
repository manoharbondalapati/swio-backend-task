import React, { useEffect, useState } from 'react'
import {app,db} from "./firebase";
import {onValue,ref} from "firebase/database";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";
import Header from './components/header';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Transaction = () => {
  const [data,upData]=useState([]);

  useEffect(()=>{
    onValue(ref(db,`users`),(snapshot)=>{
      
      const usersData = snapshot.val();
      if (usersData) {
        const formattedData = Object.keys(usersData).map(key => ({
          id: key,
          ...usersData[key]
        }));
        upData(formattedData);
      } else {
        upData([]);
      }
    });
    
  },[]);
  console.log("firebase data");
  console.log(data);
  return (
    
    <div>
      <Header/>
      <h3 style={{}}>Transactions</h3>
      <h5>Payment Details</h5>
      {
        data.length === 0 ? (
          <>
           <Box sx={{ display: 'flex' ,marginLeft:"50%"}}>
              <CircularProgress />
              
          </Box>
          
          </>
         
        ) : (
          <div className="card-container">
          {data.map((user) => (
            <Card className="transaction-card" key={user.id} sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Name: {user.name}
                </Typography>
                <Typography variant="h6" component="div">
                  Amount: {user.amount}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  Amount: {user.amount}
                </Typography> */}
                
              </CardContent>
            </Card>
          ))}
        </div>
        )
      }

    </div>
  )
}

export default Transaction
