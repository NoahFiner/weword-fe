import React from 'react';
import './Logo.scss';

class Logo extends React.Component {
    render() {
        return (
            <div className="logo-box" style={{width: this.props.size + 'px', height: this.props.size + 'px'}}>
                <p className="logo-line-1" style={{fontSize: this.props.size/3.5 + 'px'}}>We</p>
                <p className="logo-line-2" style={{fontSize: this.props.size/3.5 + 'px'}}>Word</p>
            </div>
        )
    }
}

export default Logo;