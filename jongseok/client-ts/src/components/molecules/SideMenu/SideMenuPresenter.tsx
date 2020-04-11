import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Modal from '../../atoms/Modal/index';

const duration = 300;

interface Props {
  menuIsOpen: boolean;
}

const SideMenuPresenter = ({ menuIsOpen }: Props) => {
  return (
    <CSSTransition
      in={menuIsOpen}
      className="modal-transition"
      classNames="modal-transition"
      unmountOnExit
      timeout={duration}
    >
      <ModalWithTransitionStyles zIndex={1000}>
        <MenuContainer>
          <h1>ModalWithTransitionStyles</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum fugit quas sint possimus
            tempore deserunt obcaecati nemo, maiores a alias neque suscipit aliquam facilis
            molestias consequatur reiciendis quisquam, nam adipisci?
          </p>
        </MenuContainer>
      </ModalWithTransitionStyles>
    </CSSTransition>
  );
};

const ModalWithTransitionStyles = styled(Modal)`
  &.modal-transition-enter {
    transform: translateX(-100%);
  }
  &.modal-transition-enter-active {
    transition: transform ${duration}ms;
    transform: translateX(0);
  }
  &.modal-transition-exit {
    transform: translateX(0);
  }
  &.modal-transition-exit-active {
    transition: transform ${duration}ms;
    transform: translateX(-100%);
  }
`;

const MenuContainer = styled.div`
  width: 300px;
  height: 100%;
  background-color: blue;
`;

export default SideMenuPresenter;
