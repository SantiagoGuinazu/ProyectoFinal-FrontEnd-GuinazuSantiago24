import { Avatar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavBarCito = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', margin: '5px', padding: '5px', marginLeft: '20px' }}>
                <NavLink to='/'>
                    <Avatar alt='logo' src='../logo.jpg' sx={{ width: 56, height: 56 }} />
                </NavLink>
            </div>
        </div >
    )
};
