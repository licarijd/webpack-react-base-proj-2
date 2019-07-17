import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

class AuthButton extends React.Component {

    render () {  
        const {
            className,
            label,
            route
        } = this.props;

        return (
            <span className="authButtonWrapper">
                <Link 
                    to={route}
                    className={className}>
                         {label}
                </Link>
            </span>
        )
    }
}