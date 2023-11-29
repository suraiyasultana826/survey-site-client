import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
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
        //confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('confirm error');
        }
        else{
            console.log('paymentIntent', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
            }
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
        {transactionId && <p className="text-green-600">Your Transaction id: {transactionId} </p>}
    
       </form>
    );
};

export default CheckOutForm;