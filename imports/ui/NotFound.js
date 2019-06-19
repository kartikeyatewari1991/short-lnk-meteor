import React from 'react';
import {Link} from 'react-router';

export default ()=> {

    return (
        <div className="boxed-view">
            <div className="boxed-view__box">
                <h1>Page not Found</h1>
                <p>Unable to find that page. Try again</p>
                <Link to="/" className="button button--link"> Head Home </Link>
            </div>
        </div>
    );

}
