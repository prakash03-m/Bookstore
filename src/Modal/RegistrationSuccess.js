import React from 'react';

const RegistrationSuccess = props => {
    console.log('success!');
    return (
        <div className="modal fade" id="regSuccess" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Registration Successfull!!</h4>
                    </div>
                    <div className="modal-body">
                        <h4>Please login with your credentials!</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationSuccess;