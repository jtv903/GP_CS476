import React, { useState } from 'react'
import OrderCard from './OrderCard';

const OrderList = () => {
    const [orders, setOrders] = useState([
        { id: 1, customerName: 'Alice', orderNumber: '12345' },
        { id: 2, customerName: 'Bob', orderNumber: '67890' },
    ]);

    const handlePickOrder = (id, customerName, orderNumber) => {
        console.log('Pick Order:', id, customerName, orderNumber);
    };

    const handleCancelOrder = (id, customerName, orderNumber) => {
        console.log('Cancel Order:', id, customerName, orderNumber);
    };

    return (
        <div>
            {orders.map(order => (
                <OrderCard
                    key={order.id}
                    order={order}
                    onPickOrder={handlePickOrder}
                    onCancelOrder={handleCancelOrder}
                />
            ))}
        </div>
    )
}

export default OrderList