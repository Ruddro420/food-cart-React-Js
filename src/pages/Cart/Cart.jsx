import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { toast } from "react-toastify";

// stripe checkout

import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from "react-router-dom";
import { payment } from "../../redux/productSlice";

const Cart = () => {
    // getData from redux
    const productData = useSelector(state => state.foodCart.productData)
    const userInfo = useSelector(state => state.foodCart.userInfo)
    const [paynow, setPayNow] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // stripe payment

    const onToken = (token) => {
        dispatch(payment({
            id: token.card.id,
            name: token.card.name,
            client_ip: token.client_ip,
            price: totalPrice,
        }))
        navigate('/')
        console.log(token);
    }

    const checkoutHandler = (e) => {
        e.preventDefault();
        if (userInfo) {
            setPayNow(true)
        } else {
            toast.error('Please Login First')
        }
    }

    const [totalPrice, setTotalPrice] = useState();

    // find sub total
    useEffect(() => {
        let temp = 0
        productData.map(item => temp = temp + item.price * item.quantity)
        setTotalPrice(temp);
    }, [productData])
    return (
        <div>
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
                                <TextInput id="name" placeholder="Mr. Food Bite" required type="text" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Your Address" />
                                </div>
                                <TextInput id="adress" placeholder="Dhaka,Bangladesh" required type="text" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Your Phone" />
                                </div>
                                <TextInput id="adress" placeholder="+88 01XXXXXX" required type="text" />
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
        </div>
    );
};

export default Cart;