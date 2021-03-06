import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="copyright">
                    <span><h4>&copy; 2017 rijh rang entertainment</h4></span>
                </div>
                <div className="sitemap">
                    <span className="slink"><a href="#">Mp3</a></span>
                    <span className="slink"><a href="#">Videos</a></span>
                    <span className="slink"><a href="#">Photos</a></span>
                </div>
                <hr/>
                <div className="policies">
                    <span><NavLink to="privacy">Privacy Policy</NavLink></span>
                    <span><NavLink to="terms">Terms of Usage & Disclaimer</NavLink></span>
                </div>
            </div>
        );
    }
}

export default Footer;