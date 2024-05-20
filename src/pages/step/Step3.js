import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import Navbar from '~/Layout/components/Navbar';
import { useDispatch, useSelector } from 'react-redux';

function Step3({ order }) {
    const navigate = useNavigate();
    const booking = useSelector((state) => state.booking);
    const currentTime = new Date().toLocaleTimeString();
    console.log('Current Time:', currentTime);
    const currentDate = new Date().toLocaleDateString();
    console.log('Current Date:', currentDate);

    return (
        <div>
            <div className="header-single-tour" style={{ position: 'sticky', top: 0, width: '100%', zIndex: 100 }}>
                <Navbar />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                className="d-flex justify-content-center align-items-center"
            >
                <table
                    align="center"
                    border="0"
                    cellPadding="0"
                    cellSpacing="0"
                    width="100%"
                    style={{ maxWidth: '600px' }}
                >
                    <tr>
                        <td
                            align="center"
                            valign="top"
                            style={{ display: 'flex', fontSize: 0, padding: '35px' }}
                            bgcolor="#ff7361"
                        >
                            <div
                                style={{
                                    display: 'inline-block',
                                    // maxWidth: '100%',
                                    // minWidth: '100%',
                                    verticalAlign: 'top',
                                    width: '100%',
                                }}
                            >
                                <table
                                    align="center"
                                    border="0"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    width="100%"
                                    style={{ maxWidth: '300px' }}
                                >
                                    <tbody>
                                        <tr>
                                            <td
                                                align="left"
                                                valign="top"
                                                style={{
                                                    fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                    fontSize: '36px',
                                                    fontWeight: 800,
                                                    lineHeight: '48px',
                                                }}
                                                className="mobile-center"
                                            >
                                                <h1
                                                    style={{
                                                        textAlign: 'center',
                                                        fontSize: '36px',
                                                        fontWeight: 800,
                                                        margin: 0,
                                                        color: '#ffffff',
                                                    }}
                                                >
                                                    VietTravel
                                                </h1>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td
                            align="center"
                            style={{ padding: '35px 35px 20px 35px', backgroundColor: '#ffffff' }}
                            bgcolor="#ffffff"
                        >
                            <table
                                align="center"
                                border="0"
                                cellPadding="0"
                                cellSpacing="0"
                                width="100%"
                                style={{ maxWidth: '600px' }}
                            >
                                <tbody>
                                    <tr>
                                        <td
                                            align="center"
                                            style={{
                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                fontSize: '16px',
                                                fontWeight: 400,
                                                lineHeight: '24px',
                                                paddingTop: '25px',
                                            }}
                                        >
                                            <h2
                                                style={{
                                                    fontSize: '30px',
                                                    fontWeight: 800,
                                                    lineHeight: '36px',
                                                    color: '#333333',
                                                    margin: 0,
                                                }}
                                            >
                                                Payment Confirmation Successful!
                                            </h2>
                                            <img
                                                src="https://img.icons8.com/carbon-copy/100/000000/checked-checkbox.png"
                                                width="125"
                                                height="120"
                                                style={{ display: 'block', border: '0px' }}
                                            />
                                            <br />
                                            <h2
                                                style={{
                                                    fontSize: '30px',
                                                    fontWeight: 800,
                                                    lineHeight: '36px',
                                                    color: '#333333',
                                                    margin: 0,
                                                }}
                                            >
                                                Thank You For Your Order!
                                            </h2>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style={{ paddingTop: '20px' }}>
                                            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            width="75%"
                                                            align="left"
                                                            bgcolor="#eeeeee"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '16px',
                                                                fontWeight: 800,
                                                                lineHeight: '24px',
                                                                padding: '10px',
                                                            }}
                                                        >
                                                            Order Confirmation #
                                                        </td>
                                                        <td
                                                            width="25%"
                                                            align="left"
                                                            bgcolor="#eeeeee"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '16px',
                                                                fontWeight: 800,
                                                                lineHeight: '24px',
                                                                padding: '10px',
                                                            }}
                                                        >
                                                            123456
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            width="75%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '16px',
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '15px 10px 5px 10px',
                                                            }}
                                                        >
                                                            Purchased Item
                                                        </td>
                                                        <td
                                                            width="25%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '16px',
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '15px 10px 5px 10px',
                                                            }}
                                                        >
                                                            ${booking.booking.total}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            width="75%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '16px',
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '5px 10px',
                                                            }}
                                                        >
                                                            Surcharge
                                                        </td>
                                                        <td
                                                            width="25%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '16px',
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '5px 10px',
                                                            }}
                                                        >
                                                            $0.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            width="75%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '16px',
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '5px 10px',
                                                            }}
                                                        >
                                                            Discount
                                                        </td>
                                                        <td
                                                            width="25%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '16px',
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '5px 10px',
                                                            }}
                                                        >
                                                            $0.00
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style={{ paddingTop: '20px' }}>
                                            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            width="75%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '16px',
                                                                fontWeight: 800,
                                                                lineHeight: '24px',
                                                                padding: '10px',
                                                                borderTop: '3px solid #eeeeee',
                                                                borderBottom: '3px solid #eeeeee',
                                                            }}
                                                        >
                                                            TOTAL
                                                        </td>
                                                        <td
                                                            width="25%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '16px',
                                                                fontWeight: 800,
                                                                lineHeight: '24px',
                                                                padding: '10px',
                                                                borderTop: '3px solid #eeeeee',
                                                                borderBottom: '3px solid #eeeeee',
                                                            }}
                                                        >
                                                            ${booking.booking.total}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style={{ paddingTop: '20px' }}>
                                            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            width="75%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '16px',
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '5px 10px',
                                                            }}
                                                        >
                                                            Payment Time
                                                        </td>
                                                        <td
                                                            width="25%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '16px',
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '5px 10px',
                                                            }}
                                                        >
                                                            {currentTime}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            width="75%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '16px',
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '5px 10px',
                                                            }}
                                                        >
                                                            Payment Date
                                                        </td>
                                                        <td
                                                            width="25%"
                                                            align="left"
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '16px',
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                                padding: '5px 10px',
                                                            }}
                                                        >
                                                            {currentDate}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td align="center" style={{ padding: '20px', backgroundColor: '#ff7361' }} bgcolor="#1b9ba3">
                            <table
                                align="center"
                                border="0"
                                cellPadding="0"
                                cellSpacing="0"
                                width="100%"
                                style={{ maxWidth: '600px' }}
                            >
                                <tbody>
                                    <tr>
                                        <td
                                            align="center"
                                            style={{
                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                fontSize: '16px',
                                                fontWeight: 400,
                                                lineHeight: '24px',
                                                paddingTop: '25px',
                                            }}
                                        >
                                            <h2
                                                style={{
                                                    fontSize: '24px',
                                                    fontWeight: 800,
                                                    lineHeight: '30px',
                                                    color: '#ffffff',
                                                    margin: 0,
                                                }}
                                            >
                                                Get 20% off your next tour.
                                            </h2>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style={{ padding: '25px 0 15px 0' }}>
                                            <table border="0" cellSpacing="0" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td align="center">
                                                            <Button to="/destinations">Destinations</Button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Step3;
