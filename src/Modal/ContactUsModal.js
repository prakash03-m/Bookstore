import React from 'react';
import './ContactUsModal.css';

const ContactUsModal = props => {
    console.log('contact');
    return (
        <div className="modal fade" id="contactUsModal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">{props.title}</h4>
                    </div>
                    <div className="modal-body">
                        <h4>BookStore</h4>
                        <h5>123,Test Street</h5>
                        <h5>Test City - 123456</h5>
                        <h5>India</h5>
                    </div>
                    <div className="modal-footer">
                        <button id="contactUsFooter" type="button" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsModal;