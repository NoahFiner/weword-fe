import React from 'react';
import './Logo.scss';
import {Link} from "react-router-dom"

class Logo extends React.Component {
    render() {
        return (
            <Link to="/home">
                <div className="logo-box" style={{borderWidth: this.props.size/15, width: this.props.size*2/3.5 + 50 + 'px', height: this.props.size*2/3.5 + 50 + 'px'}}>
                    <p className="logo-line-1" style={{fontSize: this.props.size/3.5 + 'px'}}>We</p>
                    <p className="logo-line-2" style={{fontSize: this.props.size/3.5 + 'px'}}>Word</p>
                </div>
            </Link>
        )
    }
}

export default Logo;