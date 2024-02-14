import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from './clientSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './step.scss';
import Button from '~/components/Button';
import { useState } from 'react';
function Step2() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const client = useSelector((state) => state.client);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: { client } });

    const onSubmit = async (data) => {
        try {
            const response1 = await axios.post('http://localhost:1110/v1/api/client', {
                name: data.client.name,
                email: data.client.email,
                dob: data.client.dob,
                phoneNumber: data.client.phoneNumber,
                address: data.client.address,
                gender: data.client.gender,
            });
            const response2 = await axios.post('http://localhost:1110/v1/api/email-confirmation', {
                email: data.client.email,
            });
            // axios({
            //   method: 'POST',
            //   url: 'http://localhost:1110/v1/api/clients',
            //   data: {
            //     name: "do anh tu",
            //     email: "tu051220@gmail.com",
            //     dob: "2000-12-05",
            //     phoneNumber: "0987654321",
            //     address: "an ninh an bai"
            //   }
            // })
            // const response = await axios.get('http://localhost:1110/v1/api/clients');
            // console.log(response);
        } catch (error) {
            console.error(error);
        }
        dispatch(submit(data.client));
        console.log(data.client);
        navigate('/');
    };

    const [valueExp, setValueExp] = useState('');
    const [lastValueExp, setLastValueExp] = useState('');

    // const handleChangeExp = (e) => {
    //     if (e.target.value === lastValueExp) return;
    //     let caretPosition = e.target.selectionStart;
    //     let sanitizedValue = e.target.value.replace(/[^0-9]/gi, '');
    //     let parts = [];

    //     for (let i = 0, len = sanitizedValue.length; i < len; i += 2) {
    //         parts.push(sanitizedValue.substring(i, i + 2));
    //     }

    //     for (let i = caretPosition - 1; i >= 0; i--) {
    //         let c = e.target.value[i];
    //         if (c < '0' || c > '9') {
    //             caretPosition--;
    //         }
    //     }
    //     caretPosition += Math.floor(caretPosition / 2);

    //     e.target.value = parts.join('/');
    //     setValueExp(parts.join('/'));
    //     setLastValueExp(parts.join('/'));
    //     e.target.setSelectionRange(caretPosition, caretPosition);
    // };
    const handleChangeExp = (e) => {
        if (e.target.value === lastValueExp) return;
        let caretPosition = e.target.selectionStart;
        let sanitizedValue = e.target.value.replace(/[^0-9]/gi, '');
        let parts = [];

        for (let i = 0, len = sanitizedValue.length; i < len; i += 2) {
            parts.push(sanitizedValue.substring(i, i + 2));
        }

        for (let i = caretPosition - 1; i >= 0; i--) {
            let c = e.target.value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 2);

        e.target.value = parts.join('/');
        setValueExp(parts.join('/'));
        setLastValueExp(parts.join('/'));
        e.target.setSelectionRange(caretPosition, caretPosition);
    };

    return (
        <div>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class=" col-lg-6 col-md-8">
                        <div class="card p-3">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <h2 class="heading text-center">BBBootstrap</h2>
                                </div>
                            </div>
                            <form onsubmit="event.preventDefault()" class="form-card">
                                <div class="row justify-content-center mb-4 radio-group">
                                    <div class="col-sm-3 col-5">
                                        <div class="radio selected mx-auto" data-value="dk">
                                            {' '}
                                            <img
                                                class="fit-image"
                                                src="https://i.imgur.com/5TqiRQV.jpg"
                                                width="105px"
                                                height="55px"
                                            />{' '}
                                        </div>
                                    </div>
                                    <div class="col-sm-3 col-5">
                                        <div class="radio mx-auto" data-value="visa">
                                            {' '}
                                            <img
                                                class="fit-image"
                                                src="https://i.imgur.com/OdxcctP.jpg"
                                                width="105px"
                                                height="55px"
                                            />{' '}
                                        </div>
                                    </div>
                                    <div class="col-sm-3 col-5">
                                        <div class="radio mx-auto" data-value="master">
                                            {' '}
                                            <img
                                                class="fit-image"
                                                src="https://i.imgur.com/WIAP9Ku.jpg"
                                                width="105px"
                                                height="55px"
                                            />{' '}
                                        </div>
                                    </div>
                                    <div class="col-sm-3 col-5">
                                        <div class="radio mx-auto" data-value="paypal">
                                            {' '}
                                            <img
                                                class="fit-image"
                                                src="https://i.imgur.com/cMk1MtK.jpg"
                                                width="105px"
                                                height="55px"
                                            />{' '}
                                        </div>
                                    </div>{' '}
                                    <br />
                                </div>
                                <div class="row justify-content-center form-group">
                                    <div class="col-12 px-auto">
                                        <div class="custom-control custom-radio custom-control-inline">
                                            {' '}
                                            <input
                                                id="customRadioInline1"
                                                type="radio"
                                                name="customRadioInline1"
                                                class="custom-control-input"
                                                checked="true"
                                            />{' '}
                                            <label for="customRadioInline1" class="custom-control-label label-radio">
                                                Private
                                            </label>{' '}
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            {' '}
                                            <input
                                                id="customRadioInline2"
                                                type="radio"
                                                name="customRadioInline1"
                                                class="custom-control-input"
                                            />{' '}
                                            <label for="customRadioInline2" class="custom-control-label label-radio">
                                                Business
                                            </label>{' '}
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-12">
                                        <div class="input-group">
                                            {' '}
                                            <input type="text" name="Name" placeholder="John Doe" /> <label>Name</label>{' '}
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-12">
                                        <div class="input-group">
                                            {' '}
                                            <input
                                                type="text"
                                                id="cr_no"
                                                name="card-no"
                                                placeholder="0000 0000 0000 0000"
                                                minlength="19"
                                                maxlength="19"
                                            />{' '}
                                            <label>Card Number</label>{' '}
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="input-group">
                                                    {' '}
                                                    <input
                                                        type="text"
                                                        id="exp"
                                                        name="expdate"
                                                        placeholder="MM/YY"
                                                        minlength="5"
                                                        maxlength="5"
                                                    />{' '}
                                                    <label>Expiry Date</label>{' '}
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="input-group">
                                                    {' '}
                                                    <input
                                                        type="password"
                                                        name="cvv"
                                                        placeholder="&#9679;&#9679;&#9679;"
                                                        minlength="3"
                                                        maxlength="3"
                                                    />{' '}
                                                    <label>CVV</label>{' '}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-md-12">
                                        {' '}
                                        <input type="submit" value="Pay 100 EUR" class="btn btn-pay placeicon" />{' '}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step2;

//http://localhost:1110/v1/api/user
