/* eslint-disable react/no-unescaped-entities */
import { Alert, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Order = () => {
    const [orderData, setOrderData] = useState([])
    const [check, setCheck] = useState('')
    // get order data
    const order = useSelector(state => state.foodCart.payment)
    const userInfo = useSelector(state => state.foodCart.userInfo)
    console.log(userInfo.id);
    useEffect(() => {
        order && order.filter(item => item.userId === userInfo.id)
            .map(product => setOrderData(product.productDetails));

        order.map(item => setCheck(item.userId))
    }, [order])
    console.log(orderData);
    return (
        <div>
            {
                check !== userInfo.id ?
                    <div className="mt-5 w-96 mx-auto">
                        <Alert
                            color="warning"
                            rounded
                        >
                            <span>
                                <p>
                                    <span className="font-medium">
                                        No record Found! Please order first
                                    </span>
                                </p>
                            </span>
                        </Alert>
                    </div>
                    :
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>
                                Product name
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Quantity
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Category
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Price
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">
                                    Edit
                                </span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                orderData.map((item, i) => {
                                    return (
                                        <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {item?.name}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item?.quantity}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item?.category}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item?.price}

                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                                    href="/tables"
                                                >
                                                    <p>
                                                        Edit
                                                    </p>
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                    )
                                })
                            }

                        </Table.Body>
                    </Table>
            }

        </div>
    );
};

export default Order;