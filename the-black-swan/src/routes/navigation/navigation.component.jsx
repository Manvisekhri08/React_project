import { Outlet, Link} from 'react-router-dom';
import { Fragment } from 'react';
import '../navigation/navigation.styles.scss';
import { ReactComponent as SwanLogo } from '../../assets/crown.svg'

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <SwanLogo className='logo' />
            </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            <Link className='nav-link' to='/auth'>
                Sign-In
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation;