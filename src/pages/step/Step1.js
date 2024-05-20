import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { submitClient } from '~/redux/clientSlice';
import { submitBooking } from '~/redux/bookingSlice';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '~/Layout/components/Navbar';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faArrowRight, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

import './step.scss';
import Button from '~/components/Button';
function Step1() {
    const { t } = useTranslation('home');
    const tourState = useSelector((state) => state.tour.tour);
    console.log('tourState trong step1', tourState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const client = useSelector((state) => state.client);
    const booking = useSelector((state) => state.booking);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: { client, booking } });

    const onSubmit = async (data) => {
        const adultsCount = parseInt(data.booking.number_adults, 10);
        console.log(adultsCount);
        const childrenCount = parseInt(data.booking.number_children, 10);
        console.log(childrenCount);
        const adultPrice = parseInt(tourState.price_adults, 10); // Assuming each adult ticket costs $100
        const childPrice = parseInt(tourState.price_children, 10); // Assuming each child ticket costs $50
        const total = adultsCount * adultPrice + childrenCount * childPrice;
        console.log(`Total amount: $${total}`);
        data.booking.total = total;
        data.booking.tour_id = tourState._id;
        console.log('tour_id trong step 1 la: ', tourState._id);
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
        } catch (error) {
            console.error(error);
        }

        dispatch(submitClient(data.client));
        dispatch(submitBooking(data.booking));

        console.log(data.client);
        navigate('/step2');
    };

    return (
        <div className={'site-wrapper'}>
            <div className="header-single-tour" style={{ position: 'sticky', top: 0, width: '100%', zIndex: 100 }}>
                <Navbar />
            </div>
            <div className="container">
                <div className="row justify-content-center" style={{ margin: '20px 0' }}>
                    {/* cột 1 */}
                    <div className="col-lg-6 col-md-12">
                        {' '}
                        <div className="step-1">
                            <h3 className="text-center">{tourState.title}</h3>
                            <p className="text-center">
                                {t('trip')}: {tourState.trip}
                            </p>
                            <p className="text-center">
                                {t('duration')}: {tourState.duration} {t('days')}
                            </p>
                            <p className="text-center">
                                {t('the number of participants')}: {tourState.number_of_participants}
                            </p>
                            <p className="text-center">{t('the number of tour bookings')}: 10</p>
                            <p className="text-center">{t('support phone number')}: +375-25-513-89-93</p>
                            <div style={{ maxWidth: '70%', height: 'auto', margin: '0 auto' }}>
                                <img
                                    src={images.travelling}
                                    alt="Feature 1"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </div>
                            <table
                                className="text-center"
                                style={{
                                    width: '100%',
                                    padding: '3px',
                                    border: '1px solid black',
                                    borderCollapse: 'collapse',
                                }}
                            >
                                <tr>
                                    <th style={{ padding: '3px', border: '1px solid black' }}>{t('ticket type')}</th>
                                    <th style={{ padding: '3px', border: '1px solid black' }}>{t('adult')}</th>
                                    <th style={{ padding: '3px', border: '1px solid black' }}>{t('children')}</th>
                                </tr>
                                <tr>
                                    <td style={{ padding: '3px', border: '1px solid black' }}>{t('fare')}</td>
                                    <td style={{ padding: '3px', border: '1px solid black' }}>
                                        {tourState.price_adults} $
                                    </td>
                                    <td style={{ padding: '3px', border: '1px solid black' }}>
                                        {tourState.price_children} $
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    {/* cột 2 */}
                    <div className="col-lg-6 col-md-12">
                        <div className="step-1">
                            <form className="step-form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="client.name">
                                        {t('name')}
                                    </label>
                                    <input
                                        className="form-input"
                                        type="text"
                                        id="client.name"
                                        {...register('client.name', { required: true })}
                                    />
                                    {errors.name && <span className="form-error">Tên là bắt buộc</span>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="client.email">
                                        {t('email address')}
                                    </label>
                                    <input
                                        className="form-input"
                                        type="email"
                                        id="client.email"
                                        {...register('client.email', { required: true, pattern: /^\S+@\S+$/i })}
                                    />
                                    {errors.email && <span className="form-error">Email không hợp lệ</span>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="client.gender">
                                        {t('gender')}
                                    </label>
                                    <input
                                        className="form-input"
                                        type="text"
                                        id="client.gender"
                                        {...register('client.gender', { required: true })}
                                    />
                                    {errors.gender && <span className="form-error">Gender không hợp lệ</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="client.phoneNumber">
                                        {t('phone number')}
                                    </label>
                                    <input
                                        className="form-input"
                                        type="tel"
                                        id="client.phoneNumber"
                                        {...register('client.phoneNumber', { required: true, pattern: /^[0-9]{10}$/ })}
                                    />
                                    {errors.phoneNumber && (
                                        <span className="form-error">Số điện thoại không hợp lệ</span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="client.dob">
                                        {t('date of birth')}
                                    </label>
                                    <input
                                        className="form-input"
                                        type="date"
                                        id="client.dob"
                                        {...register('client.dob', { required: true })}
                                    />
                                    {errors.dateOfBirth && <span className="form-error">Ngày sinh là bắt buộc</span>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="booking.number_adults">
                                        {t('number of adults')}
                                    </label>
                                    <input
                                        className="form-input"
                                        type="text"
                                        id="booking.number_adults"
                                        {...register('booking.number_adults', { required: true })}
                                    />
                                    {errors.dateOfBirth && <span className="form-error">Ngày sinh là bắt buộc</span>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="booking.number_children">
                                        {t('number of children')} (6 -12)
                                    </label>
                                    <input
                                        className="form-input"
                                        type="text"
                                        id="booking.number_children"
                                        {...register('booking.number_children', { required: true })}
                                    />
                                    {errors.dateOfBirth && <span className="form-error">Ngày sinh là bắt buộc</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="client.address">
                                        {t('address')}
                                    </label>
                                    <textarea
                                        className="form-input"
                                        id="client.address"
                                        {...register('client.address', { required: true })}
                                    ></textarea>
                                    {errors.address && <span className="form-error">Địa chỉ là bắt buộc</span>}
                                </div>

                                <button style={{ margin: '0 auto' }} className="form-button" type="submit">
                                    {t('submit')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step1;

//http://localhost:1110/v1/api/user
