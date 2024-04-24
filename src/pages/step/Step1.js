import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from './clientSlice';
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
        navigate('/step2');
    };

    return (
        <div className={'site-wrapper'}>
            <div className='header-single-tour' style={{ position: 'sticky', top: 0, width: '100%', zIndex: 100 }}>
                <Navbar  />
            </div>
            <div className="container">
                <div className="row justify-content-center" style={{ margin: '20px 0' }}>
                    
                    {/* cột 1 */}
                    <div className="col-lg-6 col-md-12">
                        {' '}
                        <div className="step-1">
                                <h3 className="text-center">Du lịch Hà Nội</h3>
                                <p className="text-center">Hành trình: Vịnh Hạ Long - Bãi Cháy - Hà Nội</p>
                                <p className="text-center">Lịch trình: 4 ngày</p>
                                <p className="text-center">Số người tham gia: 30</p>
                                <p className="text-center">Đã đăng ký: 10</p>
                                <p className="text-center">1 ô số điện thoại hỗ trợ</p>
                                <p className="text-center">1 ảnh travel </p>
                                <div style={{ maxWidth: '70%', height: 'auto', margin: '0 auto' }}>
                                    <img src={images.travelling} alt="Feature 1" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                                <p className="text-center">1 bảng giá người lớn trẻ em</p>
                        </div>
                    </div>

                    {/* cột 2 */}
                    <div className="col-lg-6 col-md-12">
                        <div className="step-1">
                            <form className="step-form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="client.name">
                                        Tên
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
                                        Email
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
                                        Gender
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
                                        Số điện thoại
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
                                        Ngày sinh
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
                                    <label className="form-label" htmlFor="client.dob">
                                        số người lớn
                                    </label>
                                    <input
                                        className="form-input"
                                        type="texy"
                                        id="client.dob"
                                        {...register('client.dob', { required: true })}
                                    />
                                    {errors.dateOfBirth && <span className="form-error">Ngày sinh là bắt buộc</span>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="client.dob">
                                        số trẻ em (6 -12)
                                    </label>
                                    <input
                                        className="form-input"
                                        type="text"
                                        id="client.dob"
                                        {...register('client.dob', { required: true })}
                                    />
                                    {errors.dateOfBirth && <span className="form-error">Ngày sinh là bắt buộc</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="client.address">
                                        Địa chỉ
                                    </label>
                                    <textarea
                                        className="form-input"
                                        id="client.address"
                                        {...register('client.address', { required: true })}
                                    ></textarea>
                                    {errors.address && <span className="form-error">Địa chỉ là bắt buộc</span>}
                                </div>

                                <button style={{margin:'0 auto'}} className="form-button" type="submit">
                                    Submit
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
