//higher order component - A component that renders another component
//Reuse code 
//render hijacking
//prop manipulation
//abstract state



import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent {...props}/>
        </div>
    )
};
//require authentication

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please login to see the info</p>
            )}
        </div>
    )
}



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDom.render(<AuthInfo isAuthenticated={true} info="These is the details"/>, document.getElementById('app'));