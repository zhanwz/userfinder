import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContet from '../../context/alert/alertContext';

const Search = () => {
    const { clearUsers, users, searchUsers } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContet);
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something..', 'light');
        } else {
            searchUsers(text);
            setText('');
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input type='text' name='text' value={text} onChange={onChange} placeholder='Search Users....' />
                <input type='submit' value='Search' className='btn, btn-dark btn-block' />
            </form>
            {users.length > 1 && (
                <button className='btn btn-light btn-block' onClick={clearUsers}>
                    Clear
                </button>
            )}
        </div>
    );
};

Search.propTypes = {
    setAlert: PropTypes.func.isRequired,
};

export default Search;
