import React from "react";
import './footer.scss';

function Footer(){
    return(
        <div className="footer">
            <div className="narbar_footer">
                <a href="/" className="aheft_web">Twitter</a>
                <a href="/" className="aheft_web">Facebook</a>
                <a href="/" className="aheft_web">Instagram</a>
            </div>
            <div className="text-footer">
            © 2022 All rights reserved.
            </div>
        </div>
    )
}
export default Footer;