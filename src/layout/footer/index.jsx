import React from 'react';

const Footer = () => {
    return <div className="w-full mx-auto">
        <h3 className="text-xl text-center">Get in touch</h3>
        <p className="text-md text-center">Weather is for saying hello, or maybe you would like to discuss work related stuff, please feel free to send me an email. </p>
        <div className="w-full inline-flex items-end justify-between pb-8 pt-8">
            <span>© 2020-present Angelin Calu. All Rights Reserved.</span>
            <span>Home | Blog | About | Shipbuilding | Contact</span>
        </div>
    </div>;
}

export default Footer;