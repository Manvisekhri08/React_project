import { Outlet, Link} from 'react-router-dom';
import { Fragment, useContext } from 'react';
import '../navigation/navigation.styles.scss';
import { ReactComponent as SwanLogo } from '../../assets/crown.svg';
import { UserContext } from '../../components/context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const{ currentUser, setCurrentUser } = useContext(UserContext);

  const signOuthandler = async() => {
    await signOutUser();
    setCurrentUser(null);
  }
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
            {
              currentUser ? (
                <span className='nav-link' onClick={signOuthandler}>SIGN OUT</span> )
                : (
                <Link className='nav-link' to='/auth'>
                  SIGN IN
              </Link>
              )
            }
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation;