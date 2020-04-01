import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import theme from '../../../theme';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CheckIcon from '@material-ui/icons/Check';
import HomeIcon from '@material-ui/icons/Home';

const Container = styled.div`
  z-index: 2;
  height: inherit;
  display: flex;
  align-items: center;
`;

const SearchForm = styled.form`
  width: 100%;
  flex: 0 0 80%;
`;

const SearchInput = styled.input`
  background-color: ${theme.colors.base.white};
  box-sizing: border-box;
  padding: ${theme.space * 2}px ${theme.space * 3}px;
  width: 100%;
`;

const ButtonBox = styled.div`
  margin-left: ${theme.space * 2}px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  flex: 1;
`;

const DefaultButton = styled.button`
  margin-right: ${theme.space}px;
  width: 32px;
  height: 32px;
  background-color: ${theme.colors.base.white};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  &:active {
    background-color: ${theme.colors.base.darkGrey};
    -webkit-text-fill-color: ${theme.colors.base.white};
    color: ${theme.colors.base.white};
  }
`;

const GoogleMapSearchBar = ({
  address,
  handleChange,
  handleSubmit,
  handleGetRealLocation,
  handleGetCurrentLocation,
  onClickMoveToCreate,
  onClickMoveToStudyPage,
  isGetPage = false,
  isCreatePage = false,
  auth: { isLoggedIn },
}) => {
  return (
    <Container>
      <SearchForm>
        <SearchInput
          type={'text'}
          placeholder={'주소를 입력해주세요. '}
          onChange={handleChange}
          value={address}
          name={'address'}
          onKeyPress={handleSubmit}
        />
      </SearchForm>
      <ButtonBox>
        <DefaultButton onClick={handleGetRealLocation}>
          <GpsFixedIcon />
        </DefaultButton>
        {isGetPage && isLoggedIn && (
          <DefaultButton onClick={onClickMoveToCreate}>
            <AddCircleOutlineIcon />
          </DefaultButton>
        )}
        {isCreatePage && (
          <>
            <DefaultButton onClick={handleGetCurrentLocation}>
              <CheckIcon />
            </DefaultButton>
            <DefaultButton onClick={onClickMoveToStudyPage}>
              <HomeIcon />
            </DefaultButton>
          </>
        )}
      </ButtonBox>
    </Container>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, {})(GoogleMapSearchBar);
