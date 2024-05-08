import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';

function Step3({ order }) {
    const navigate = useNavigate();

    return (
        // <div className="container my-5">
        //     <div className="row justify-content-center">
        //         <div className="col-md-6">
        //             <div className="alert alert-success" role="alert">
        //                 <FontAwesomeIcon icon={faCheckCircle} />
        //                 <div>
        //                     <h3>Payment Successful!</h3>
        //                     <p>Thank you for your order #. Your payment of $ was received.</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="row justify-content-center">
        //         <div className="col-6 text-center">
        //             <button className="btn btn-success w-50" onClick={() => navigate('/')}>
        //                 View Orders
        //             </button>
        //         </div>
        //     </div>
        // </div>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            className="d-flex justify-content-center align-items-center"
        >
            <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: '600px' }}>
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
                        {/* <div
                            style={{
                                display: 'inline-block',
                                maxWidth: '50%',
                                minWidth: '100px',
                                verticalAlign: 'middle',
                                width: '100%',
                            }}
                            className="mobile-hide"
                        >
                            <table
                                align="left"
                                border="0"
                                cellPadding="0"
                                cellSpacing="0"
                                width="100%"
                                style={{
                                    maxWidth: '300px',
                                    verticalAlign: 'middle',
                                }}
                            >
                                <tbody>
                                    <tr>
                                        <td
                                            align="right"
                                            valign="center"
                                            style={{
                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                fontSize: '48px',
                                                fontWeight: 400,
                                                lineHeight: '116px',
                                            }}
                                        >
                                            <table cellSpacing="0" cellPadding="0" border="0" align="right">
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                                                                fontSize: '18px',
                                                                fontWeight: 400,
                                                                lineHeight: '24px',
                                                            }}
                                                        >
                                                            <a
                                                                href="/"
                                                                style={{ color: '#ffffff', textDecoration: 'none' }}
                                                            >
                                                                <img
                                                                    src="https://img.icons8.com/color/48/000000/small-business.png"
                                                                    width="27"
                                                                    height="23"
                                                                    style={{ display: 'block', border: '0px' }}
                                                                    alt="Icon"
                                                                />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}
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
                                                        2345678
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
                                                        $100.00
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
                                                        $5.00
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
                                                        $105.00
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
                                                        00.00.59
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
                                                        01.01.2024
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
    );
}

export default Step3;
