import { useNavigate } from 'react-router-dom';

function Step3({ order }) {
    const navigate = useNavigate();

    return (
      <div className="container my-5">
  
        <div className="row justify-content-center">
  
          <div className="col-md-6">
  
            <div className="alert alert-success" role="alert">
  
              <i className="fas fa-check-circle me-3"></i>
  
              <div>
                <h3>Payment Successful!</h3>
                <p>Thank you for your order #. Your payment of $ was received.</p> 
              </div>
  
            </div>
  
          </div>
  
        </div>
  
        <div className="row justify-content-center">
          <div className="col-6 text-center">
            
            <button 
              className="btn btn-success w-50"
              onClick={() => navigate('/orders')}  
            >
              View Orders
            </button>
  
          </div>
        </div>
  
      </div>
    );
  }

export default Step3;
