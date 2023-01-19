import React from 'react';
import './Header.css';


class Header extends React.Component {

    render() {


        return(<div className="header">
                    <div className="title">
                        {this.props.title}
                    </div>
                    <div className="subtitle">
                        {this.props.subtitle}
                    </div>
                </div>)
    }
}

export default Header;
