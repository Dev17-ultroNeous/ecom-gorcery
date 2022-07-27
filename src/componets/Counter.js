import { createContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BiMinus } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";

export function Counter(props) {
    const [count, setCount] = useState(1);

    const decrement = () => {
        if (count <= 1) {
            return null
        }
        return setCount(count - 1)
    }


    return (

        <Row>
            <Col xl={6} className='countCol'>
                <div className='counterBox'>
                    <div
                        className="counterBtn"
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        <FiPlus />
                    </div>
                    <span className="numberText">{count}</span>{" "}
                    <div
                        className="counterBtn"
                        onClick={() => decrement()}
                    >

                        <BiMinus />
                    </div>
                </div>
            </Col>
            <Col xl={6} className='priceCol'>
                <div>
                    <span className="price">$ {count * props.v}<span className="kg">/kg</span></span>
                </div>
            </Col>
        </Row>

    )
}