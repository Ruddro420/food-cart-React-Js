import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { toast } from "react-toastify";

// stripe checkout

import StripeCheckout from 'react-stripe-checkout';
import { Link, useNavigate } from "react-router-dom";
import { payment } from "../../redux/productSlice";
import Navbar from "../../components/Navbar";

const Cart = () => {
    // getData from redux
    const productData = useSelector(state => state.foodCart.productData)
    const userInfo = useSelector(state => state.foodCart.userInfo)
    const [totalPrice, setTotalPrice] = useState();
    const [paynow, setPayNow] = useState(false)
    // Input Details
    const [inputName, setInputName] = useState('')
    const [inputAdds, setInputAdds] = useState('')
    const [inputPhn, setInputPhn] = useState()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(userInfo);
    // stripe payment
    const onToken = (token) => {
        dispatch(payment({
            id: token.card.id,
            name: token.card.name,
            client_ip: token.client_ip,
            productDetails: productData,
            price: totalPrice,
            userId: userInfo.id,
            userEmail: userInfo.email,
            userPhn: inputPhn,
            userAdds: inputAdds
        }))
        navigate('/')

    }

    const checkoutHandler = (e) => {
        e.preventDefault();
        if (userInfo) {
            setPayNow(true)
        } else {
            toast.error('Please Login First')
        }
    }

    // find sub total
    useEffect(() => {
        let temp = 0
        productData.map(item => temp = temp + item.price * item.quantity)
        setTotalPrice(temp);
    }, [productData])
    return (
        <>
            <Navbar />
            <div>
                {
                    totalPrice === 0 ?
                        <div className="mt-10 mx-20">
                            <Alert
                                color="warning"
                                withBorderAccent
                            >
                                <span>
                                    <p>
                                        <span className="font-medium">
                                            Cart is empty! Please add product
                                        </span>

                                        <Button className='mt-5'>
                                            <Link to='/'>Back Home</Link>
                                        </Button>
                                    </p>
                                </span>
                            </Alert>
                        </div>
                        :
                        <div className="h-screen bg-gray-100 pt-20">
                            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                            <div style={{ width: '90%!important' }} className="mx-auto  justify-center px-6 md:flex md:space-x-6 xl:px-0">
                                <CartItem />

                                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/6">
                                    <form className="flex flex-col gap-4" onSubmit={checkoutHandler}>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="name" value="Your Name" />
                                            </div>
                                            <TextInput onChange={(e) => setInputName(e.target.value)} id="name" placeholder="Mr. Food Bite" value={inputName} required type="text" />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="name" value="Your Address" />
                                            </div>
                                            <TextInput onChange={(e) => setInputAdds(e.target.value)} id="adress" placeholder="Dhaka,Bangladesh" value={inputAdds} required type="text" />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="name" value="Your Phone" />
                                            </div>
                                            <TextInput onChange={(e) => setInputPhn(e.target.value)} id="adress" placeholder="+88 01XXXXXX" value={inputPhn} required type="text" />
                                        </div>

                                        <div style={{ background: '#F0F0F0' }} className="sub-total-card p-5">
                                            <div className="mb-2 flex justify-between">
                                                <p className="text-gray-700">Subtotal</p>
                                                <p className="text-gray-700">৳ {totalPrice}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className="text-gray-700">Shipping</p>
                                                <p className="text-gray-700">Free</p>
                                            </div>
                                            <hr className="my-4" />
                                            <div className="flex justify-between">
                                                <p className="text-lg font-bold">Total</p>
                                                <div className="">
                                                    <p className="mb-1 text-lg font-bold">৳ {totalPrice} TAKA</p>
                                                    <p className="text-sm text-gray-700">including VAT</p>
                                                </div>
                                            </div>
                                        </div>
                                        <Button className="mt-6 w-full rounded-md py-1.5 font-medium text-blue-50 hover:bg-blue-600" type="submit">
                                            Continue
                                        </Button>
                                    </form>
                                    {
                                        paynow ?
                                            <div className="text-center mt-5">
                                                <StripeCheckout
                                                    amount={totalPrice}
                                                    currency="USD"
                                                    token={onToken}
                                                    stripeKey="pk_test_51JLZUIJMP3cbMsA2zhQ1DF2ENvuYpG5HkOOoGKQGI8KAHse4ye6kODmk1yxj2Qz8KmhILqIudNLQiyx0ANOpyRtx0054hiiZpt"
                                                />
                                            </div>
                                            :
                                            ''
                                    }
                                </div>
                            </div>
                        </div>

                }

            </div>
        </>
    );
};

export default Cart;