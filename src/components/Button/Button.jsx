import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled';

export const Button = ({children, onClick}) => {
   return ( <ButtonStyle type="button" onClick={onClick}>
          {children}
        </ButtonStyle>)
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
};