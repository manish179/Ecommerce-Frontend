import React,{useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { isAuthenticated } from './index'
import { useDispatch, useSelector } from 'react-redux'
import { myOrders,clearError } from '../../actions/orderAction'

const UserDashboard = () => {
    const{user}=isAuthenticated()
    const dispatch=useDispatch()
    const {loading,error,orders}=useSelector(state=>state.myOrders)
    

    useEffect(()=>{
        dispatch(myOrders)
    },[dispatch])

    return (
        <>
        <Navbar/>
        <h1>User Information</h1>
        <h3>{user.name}</h3>
        <h4>{user.email}</h4>

        <div className="container">
                <div className="d-flex justify-content-center">
                        <h2 className='text-center text-muted'>
                            My Order History
                        </h2>
                        <table className='table table-success table-striped text-center table-bordered'>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Number of items</th>
                                    <th>total Amount</th>
                                    <th>Status</th>

                                </tr>
                            </thead>
                            <tbody>
                                {orders && orders.map((order,i)=>(
                                    <tr key={i}>
                                        <td>{order._id}</td>
                                        <td>{order.orderItems.length}</td>

                                        <td>{`Rs. ${order.totalPrice}`}</td>
                                        <td>
                                            {order.status && String(order.status).includes('delivered')
                                            ? <p style={{color:'green'}}>{order.status}</p>:
                                            <p style={{color:'red'}}>{order.status}</p>
                                }
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>

                </div>

        </div>


        <Footer/>
        




            
        </>
    )
}

export default UserDashboard
