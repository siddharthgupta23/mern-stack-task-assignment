import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  const closeSignin = () => navigate('/');  

  return (
    
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign In</h5>
            <button className="btn-close" onClick={closeSignin}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign In</button>
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={closeSignin}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

