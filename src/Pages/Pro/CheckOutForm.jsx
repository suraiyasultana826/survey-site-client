import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const price = 1000;
    useEffect( () => {
        axiosSecure.post('/create-payment-intent', {price})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure, price])
    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return 
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log('payment error', error);
            setError(error.message);
        }
        else{
            console.log('payment method', paymentMethod);
            setError('');
        }
    }
    return (
       <form onSubmit={handleSubmit}>
        <CardElement
        options = {{
            style: {
                base: {
                    fontSize:'16px',
                    color:'#424770',
                    '::placeholder':{
                        color:'#aab7c4',
                    },
                },
                invalid:{
                    color:'#9e2146',

                },
            },
        }}
        >
           
        </CardElement>
        <button className="btn btn-sm bg-blue-500 text-white mt-10" type="submit" disabled={!stripe || !clientSecret}>Pay</button>
        <p className="text-red-600">{error}</p>
       </form>
    );
};

export default CheckOutForm;