// import { useState } from "react";
// import './style.css';
// import {loadStripe} from '@stripe/stripe-js';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { TextField } from "@mui/material";
// import Header from "./header";


// const Payment=()=>{
   
//     const [data,setData]=useState({
//         Name:"",
//         Amount:""
//     });

//     const usename=(val)=>{
//             setData({...data,Name:val.target.value}) 
//     }
//     const amount=(val)=>{
//             setData({...data,Amount:val.target.value})
        
//     }
    
    
//     const Paymentfunc= async(event)=>{
//        event.preventDefault();

//         const stripe= await loadStripe("pk_test_51PKx8QSJqtr5veewViq9KUGKAq7YkAzpltvEP5YHpViyLssL1RJEZysyxxHRqpxXeSM6ObmCYOpSBM2nDk1I2Iy400r1UwxMJB")

//         const body={
//             Data:data
//         }
//         const headers={
//             "Content-Type":"application/json"
//         }
//         const response=await fetch("http://localhost:8080/api/create-checkout-session",{
//             method:"POST",
//             headers:headers,
//             body:JSON.stringify(body)
//         })
//         const session=await response.json();
//         console.log(session);
//         console.log("session");

//         const result=stripe.redirectToCheckout({
//             sessionId:session.id
//         });
//         console.log(result);
//         if(result.error){
//             console.log(result.error);
//         }
//     }
//     return(
//            <>
//            <Header/>
          
//         <div className="paymentdiv">
        
//         <center>
//          <Card sx={{ maxWidth: 345 }}>
      
//          <CardContent>
       
         
//          <form  onSubmit={Paymentfunc}>
         
//             <label className="la" >Name:</label>
//             <input onChange={usename} placeholder="Enter the Name" className="regbgc"></input><br/><br/>
//             <label className="la" >Amount:</label>
//             <input onChange={amount} type="number" placeholder="Enter amount" className="regbgc"></input><br/><br/>
//             {/* <button type="submit">Payment</button> */}
//             <Button variant="contained" type="submit">Payment</Button>
//         </form>
//       </CardContent>
//       <CardActions>
//         {/* <Button size="small">Share</Button> */}
       
//       </CardActions>
//     </Card>
//     </center>
//         </div>
//         </>
//     )
// }
// export default Payment




import { useState } from 'react';
import './style.css';
import { loadStripe } from '@stripe/stripe-js';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Header from './header';

const Payment = () => {
    const [data, setData] = useState({
        Name: '',
        Amount: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const stripe = await loadStripe('pk_test_51PKx8QSJqtr5veewViq9KUGKAq7YkAzpltvEP5YHpViyLssL1RJEZysyxxHRqpxXeSM6ObmCYOpSBM2nDk1I2Iy400r1UwxMJB');

        const body = { Data: data };
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await fetch('http://localhost:8080/api/create-checkout-session', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
        });
        const session = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.error(result.error);
        }
    };

    return (
        <>
            <Header />
            <div className="paymentdiv">
                <center>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Name"
                                    name="Name"
                                    onChange={handleChange}
                                    placeholder="Enter the Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Amount"
                                    name="Amount"
                                    type="number"
                                    onChange={handleChange}
                                    placeholder="Enter amount"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                                <Button variant="contained" type="submit">
                                    Payment
                                </Button>
                            </form>
                        </CardContent>
                        <CardActions></CardActions>
                    </Card>
                </center>
            </div>
        </>
    );
};

export default Payment;
