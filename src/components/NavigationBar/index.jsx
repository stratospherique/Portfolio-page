import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCut } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useMediaQuery } from 'helpers/hooks';
import { BREAK_POINTS, theme } from 'helpers/constants';
import PopUpDialog from 'components/common/PopUpDialog';
import { closePopup, openPopup } from 'actions/PopUp';
import Button from 'components/common/Button';
import Logo from './Logo';
import NavElements from './NavElements';

const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  left: 0;
  background-color: ${props => (props.isScrolled ? theme.colors.fourth : theme.colors.secondary)};
  border-bottom: 2px solid;
  z-index: 1000;
`;

const AnimatedNav = animated(HeaderContainer);


const NavigationBar = ({ dispatch }) => {
  const isMobileView = useMediaQuery(`(max-width: ${BREAK_POINTS.sm})`);
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 100);

  const props = useSpring({
    padding: isMobileView || isScrolled ? 7 : 14,
    borderColor: isMobileView || isScrolled ? theme.colors.primary : theme.colors.fourth,
    backgroundColor: isMobileView || isScrolled ? theme.colors.fourth : theme.colors.secondary,
  });
  const [toggled, setToggled] = useState(false);

  const handleScroll = () => {
    if (isScrolled !== (window.scrollY > 100)) {
      setIsScrolled(window.scrollY > 100);
    }
  };

  const handleNavOpen = () => {
    openPopup(dispatch);
    setToggled(true);
  };

  const handleNavClose = () => {
    closePopup(dispatch);
    setToggled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 400));

    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, [isScrolled]);

  return (
    <>
      <AnimatedNav style={props} isScrolled={isMobileView || isScrolled}>
        <Logo />
        {
          !isMobileView && <NavElements isScrolled={isScrolled} />
        }
        {
          isMobileView && (
          <Button
            size="large"
            Icon={({ size, Icon }) => (
              <FontAwesomeIcon icon={faBars} size={size}>
                {Icon}
              </FontAwesomeIcon>
            )}
            action={handleNavOpen}
            padding={1}
          />
          )
        }
      </AnimatedNav>
      {
        isMobileView && toggled && (
          <PopUpDialog
            onClose={handleNavClose}
            style={{
              justifyContent: 'flex-start',
            }}
          >
            <Button
              size="large"
              style={{
                width: '2rem',
                position: 'absolute',
                top: '1rem',
                right: '1rem',
              }}
              color="primary"
              action={handleNavClose}
              Icon={({ size, Icon }) => (
                <FontAwesomeIcon
                  icon={faCut}
                  size={size}
                >
                  {Icon}
                </FontAwesomeIcon>
              )}
              padding={1}
            />
            <NavElements handlePopupClose={handleNavClose} isMobileView={isMobileView} />
          </PopUpDialog>
        )
        }
    </>
  );
};

NavigationBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default NavigationBar;
