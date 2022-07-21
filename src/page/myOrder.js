import React from 'react'
import { Button, Card, Image } from 'react-bootstrap';
import NavBarsHome from '../componets/NavBar';
import '../page/myOrder.css'
import { myOrderData } from '../utils/Data'
function MyOrder() {
    return (
        <>
            <NavBarsHome />
            <section className='myOrderSection'>
                <div className='myOrderContainer'>
                    <div className='headingOrder'>
                        <h1 className='order'>My Orders</h1>
                    </div>
                    {myOrderData.map((v, i) => {
                        return (
                            <div className='myOrder' key={i}>
                                <Card className='cardOrder'>
                                    <Card.Body>
                                        <div className='containe'>
                                            <div className='imageOrder'>
                                                <Image src={v.image} className='img-fluid' ></Image>
                                            </div>
                                            <div className='prodctInfo'>
                                                <p className='nameProdct'>{v.name} </p>
                                                <span className='priceProduct'>{v.price}</span>
                                            </div>
                                            <div>
                                                <Button className='btnView'>View Details</Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                    }
                </div>
            </section>
        </>
    )
}

export default MyOrder;