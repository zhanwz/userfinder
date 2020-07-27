import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login } }) => {
    return (
        <div className='card text-center'>
            <img src={avatar_url} alt='' className='round-img' style={{ backgroundColor: 'red', width: 60 }}></img>
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
                    More
                </Link>
            </div>
        </div>
    );
};

UserItem.protoTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;
