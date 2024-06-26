import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { submitClient } from '~/redux/clientSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from '~/Layout/components/Navbar';
import axios from 'axios';
import './step.scss';
import Button from '~/components/Button';
import images from '~/assets/images';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Step2() {
    const { t } = useTranslation('home');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const booking = useSelector((state) => state.booking);
    console.log('booking step 2', booking);
    const client = useSelector((state) => state.client);

    const onSubmit = async (data) => {
        try {
            const response1 = await axios.post('http://localhost:1110/v1/api/booking', {
                client_id: 'a',
                tour_id: booking.booking.tour_id,
                number_adults: booking.booking.number_adults,
                number_children: booking.booking.number_children,
                total: booking.booking.total,
                status: 'wait',
            });
            const response2 = await axios.post('http://localhost:1110/v1/api/email-confirmation', {
                email: data.client.email,
            });
        } catch (error) {
            console.error(error);
        }
        dispatch(submitClient(data.client));
        console.log(data.client);
        navigate('/step3');
    };

    // handle ngày hết hạn thẻ
    const [expiryDate, setExpiryDate] = useState('');

    const handleExpiryDateChange = (event) => {
        const inputDate = event.target.value;
        const formattedDate = formatExpiryDate(inputDate);
        setExpiryDate(formattedDate);
    };

    const formatExpiryDate = (inputDate) => {
        let formattedDate = inputDate;
        // Xoá các ký tự không phải số
        formattedDate = formattedDate.replace(/\D/g, '');
        // Thêm dấu "/"
        if (formattedDate.length > 2) {
            formattedDate = formattedDate.replace(/(\d{2})(\d)/, '$1/$2');
        }
        return formattedDate;
    };

    // handle card numbers
    const [cardNumber, setCardNumber] = useState('');

    const handleCardNumberChange = (event) => {
        const inputNumber = event.target.value;
        const formattedNumber = formatCardNumber(inputNumber);
        setCardNumber(formattedNumber);
    };

    const formatCardNumber = (inputNumber) => {
        let formattedNumber = inputNumber;
        // Xoá các ký tự không phải số
        formattedNumber = formattedNumber.replace(/\D/g, '');
        // Thêm dấu " " sau mỗi 4 chữ số
        if (formattedNumber.length > 4) {
            formattedNumber = formattedNumber.replace(/(\d{4})(\d)/, '$1 $2');
        }
        if (formattedNumber.length > 9) {
            formattedNumber = formattedNumber.replace(/(\d{4})\s(\d{4})(\d)/, '$1 $2 $3');
        }
        if (formattedNumber.length > 14) {
            formattedNumber = formattedNumber.replace(/(\d{4})\s(\d{4})\s(\d{4})(\d)/, '$1 $2 $3 $4');
        }
        return formattedNumber;
    };

    return (
        <div>
            <div className="header-single-tour" style={{ position: 'sticky', top: 0, width: '100%', zIndex: 100 }}>
                <Navbar />
            </div>
            <div className="container" style={{ padding: '40px 0' }}>
                <div className="row justify-content-center" style={{ margin: '20px 0' }}>
                    <div className="col-lg-6 col-md-12" style={{ padding: '0 80px' }}>
                        <h3 className="text-center">{t('PAYMENT INVOICE')}</h3>
                        <hr />
                        <table style={{ width: '100%', borderSpacing: '0 10px' }}>
                            <tr>
                                <td style={{ textAlign: 'left', paddingBottom: '10px' }}>{t('order confirmation')}</td>
                                <td style={{ textAlign: 'right', paddingBottom: '10px' }}>#123456</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'left', paddingBottom: '10px' }}>{t('purchased item')}</td>
                                <td style={{ textAlign: 'right', paddingBottom: '10px' }}>{booking.booking.total}$</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'left', paddingBottom: '10px' }}>{t('surcharge')}</td>
                                <td style={{ textAlign: 'right', paddingBottom: '10px' }}>0.00$</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'left', paddingBottom: '10px' }}>{t('discount')}</td>
                                <td style={{ textAlign: 'right', paddingBottom: '10px' }}>0.00$</td>
                            </tr>
                        </table>
                        <hr />
                        <table style={{ width: '100%' }}>
                            <tr>
                                <td style={{ textAlign: 'left' }}>{t('TOTAL')}</td>
                                <td style={{ textAlign: 'right' }}>{booking.booking.total}$</td>
                            </tr>
                        </table>
                        <hr />

                        <div style={{ maxWidth: '80%', height: 'auto', margin: '0 auto' }}>
                            <img
                                src={images.picPayment2}
                                alt="Feature 1"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className=" col-lg-6 col-md-12">
                        <div class="card p-3">
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
                                                value={cardNumber}
                                                onChange={handleCardNumberChange}
                                                placeholder="0000 0000 0000 0000"
                                                maxLength={19}
                                                minLength={19}
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
                                                        onChange={handleExpiryDateChange}
                                                        value={expiryDate}
                                                        maxLength={5}
                                                        minLength={5}
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
                                        <input onClick={onSubmit} value="Pay" class="btn btn-pay placeicon" />{' '}
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
