import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';

export const Header = () => {
    const { push } = useHistory();
    return (
        <div className="header">
            <img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" className="header__icon"
                onClick={() => push('/home')} />
            <div className="header__center mr-5">
                <input type="text" />
                <SearchIcon />
            </div>
        </div>
    )
}