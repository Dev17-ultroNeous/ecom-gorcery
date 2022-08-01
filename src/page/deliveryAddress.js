import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Select from "react-select";
import NavBarsHome from "../componets/NavBar";
import "../page/deliveryAddress.css";


function DeliveryAddress() {
    const [value, setValue] = useState("");
    const handleChange = (options) => {
        setValue(options);
    };
    const optionsValue = {
        option: value.label
    }
    const actions = [
        { label: "Home", value: 1 },
        { label: "Office", value: 2 },
        { label: "Other", value: 3 },
    ];
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        let obj = { ...data, ...optionsValue }
        console.log(obj);
    };
    return (
        <section className="deliverySection">
            <NavBarsHome />
            <div className="deliveryContainer">
                <div className="headingDelivery">
                    <h1 className="heading">Delivery Address</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="detailFilled">
                        <textarea
                            className="area"
                            placeholder="Address"
                            {...register("address", {
                                required: true,
                            })}
                        ></textarea>
                        <input
                            type="text"
                            className="inputValue"
                            placeholder="City, State"
                            {...register("state", {
                                required: true,
                            })}
                        ></input>
                        <input
                            type="text"
                            className="inputValue"
                            placeholder="Zip Code"
                            {...register("zipcode", {
                                required: true,
                            })}
                        ></input>

                        <Select
                            onChange={handleChange}
                            options={actions}
                            isMulti={false}
                            placeholder="Select Your address"
                            closeMenuOnSelect={true}
                            className="inputValueSelect"
                            rules={{ required: true }}
                        />

                        <Button className="submitBtn" type="submit">
                            Save Address
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default DeliveryAddress;
