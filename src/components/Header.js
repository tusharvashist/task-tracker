import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

function Header({title, onShow, showState}) {

    const location = useLocation();
    
    return (
        <div className="header">
            <h1 className="title">{title}</h1>
            {
                location.pathname == '/' && <Button color={!showState? "green" : "red"} text={!showState?"Add":"Close"} onClick={onShow} />
            }
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
