import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const ProUser = () => {
    return (
        <div>
            <div className="m-24">
                <Elements stripe = {stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
            
        </div>
    );
};

export default ProUser;