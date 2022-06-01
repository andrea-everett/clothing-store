import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

const Navigation = () => {
    return (
      <Fragment>
            <div className='navigation'>
             <Link className='logo-container' to='/'>
                <CrownLogo className='logo' />
             </Link>
             <div className='links-container'>
                <Link className='nav-link' to ='/shop'>
                        SHOP
                </Link>
                <Link className='nav-link' to ='/sign-in'>
                        SHOP
                </Link>
             </div>
          </div>
          <Outlet />
      </Fragment>
    )
  }

  export default Navigation