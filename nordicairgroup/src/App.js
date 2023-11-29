import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#f8f9fa',
        padding: '20px 0',
        textAlign: 'center',
        borderTop: '1px solid #e7e7e7',
        marginTop: '30px'
    };

    const containerStyle = {
        maxWidth: '1170px',
        margin: '0 auto',
        padding: '0 15px'
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    };

    const colStyle = {
        flex: '1',
        minWidth: '200px',
        margin: '10px 0'
    };

    const headingStyle = {
        color: '#333',
        marginBottom: '15px'
    };

    const linkStyle = {
        color: '#007bff',
        textDecoration: 'none'
    };

    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div style={rowStyle}>
                    {/* Company Information */}
                    <div style={colStyle}>
                        <h3 style={headingStyle}>Company Name</h3>
                        <p>Address: 123 Street, City</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@example.com</p>
                    </div>

                    {/* Quick Links */}
                    <div style={colStyle}>
                        <h3 style={headingStyle}>Quick Links</h3>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a style={linkStyle} href="/about">About Us</a></li>
                            <li><a style={linkStyle} href="/services">Services</a></li>
                            <li><a style={linkStyle} href="/contact">Contact</a></li>
                            <li><a style={linkStyle} href="/privacy">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div style={colStyle}>
                        <h3 style={headingStyle}>Follow Us</h3>
                        <a style={linkStyle} href="http://facebook.com">Facebook</a><br />
                        <a style={linkStyle} href="http://twitter.com">Twitter</a><br />
                        <a style={linkStyle} href="http://instagram.com">Instagram</a>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{ marginTop: '20px' }}>
                    <p>&copy; 2023 Nordic Air Group. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
