import { Alert, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Payment = () => {
    const [orderData, setOrderData] = useState([])
    const [check, setCheck] = useState('')
    // get order data
    const order = useSelector(state => state.foodCart.payment)
    // get user info
    const userInfo = useSelector(state => state.foodCart.userInfo)
    useEffect(() => {
        setOrderData(order)
        order.map(item => setCheck(item.userId))
    }, [order])
    console.log(check, userInfo.userId);

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
                                        No record Found!
                                    </span>
                                </p>
                            </span>
                        </Alert>
                    </div>
                    :
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>
                                Id
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Name
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Client_ip
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Price
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                orderData && orderData.filter(item => item.userId === userInfo.id)
                                    .map((item, i) => {
                                        return (
                                            <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    {item?.id}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {item?.name}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {item?.client_ip}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {item?.price} TAKA
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

export default Payment;