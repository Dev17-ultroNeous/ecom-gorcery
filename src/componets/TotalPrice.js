import { Card } from "react-bootstrap";

export function TotalPrice({ deliveryCharge, total, totalCost }) {
    return (
        <div className="totalPrice">
            <Card className="addTocard">
                <Card.Body>
                    <div>
                        <div className="boxTotalPrice">
                            <h2 className="subTotal">Sub Total Cost </h2>
                            <span className="totalPrice">${totalCost}</span>
                        </div>
                        <div className="boxTotalPrice">
                            <h2 className="subTotal">Delivery Charge</h2>
                            <span className="totalPrice">${deliveryCharge}</span>
                        </div>
                        <div className="boxTotalPrice">
                            <h2 className="subTotal">Total</h2>
                            <span className="totalPrice">${total}</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}