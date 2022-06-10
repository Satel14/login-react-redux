import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { LOGIN, PASSWORD } from '../../constants/constants';
import { login } from '../../redux/actions/actions';
import './style.css'
const LoginPage = () => {
    const state = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handlerLogin = (event) => {
        dispatch(login(LOGIN, event.target.value));
        console.log(state.login);
    }

    const handlerPassword = (event) => {
        dispatch(login(PASSWORD, event.target.value));
        console.log(state.password);
    }


    return (
        <form className='form'>
            <input 
            placeholder='type username...'
             className='form__input' 
             onChange={handlerLogin}
            />
            <input
            placeholder='type password...'
             className='form__input' 
             onChange={handlerPassword}    
             />
            <Link
                className={`form__link ${
                    state.login === 'Admin' && 
                    state.password === '1234' 
                    ? '' 
                    : 'form__link--disabled '}`}
                to='/profile'
            >
                Войти
            </Link>
        </form>
    );
}

export default withRouter(LoginPage);