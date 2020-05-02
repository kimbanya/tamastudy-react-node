import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormTitle = styled.div`
  padding: 24px 0;
  font-size: 10px;
  color: #7f8c8d;
`;
export const Form = styled.form`
  width: 100%;
`;
export const FiledSet = styled.fieldset`
  border: none;
  border-top: 1px solid #eaeaea;
  &:last-of-type {
    border-bottom: 1px solid #eaeaea;
  }
  padding: 16px;
  label {
    text-transform: uppercase;
    width: 100%;
    font-weight: 900;
    margin-bottom: 8px;
  }
`;

export const InputBox = styled.div``;
export const InputEmailBox = styled(InputBox)`
  input {
    width: 100%;
  }
`;
export const InputPasswordBox = styled(InputBox)`
  display: flex;
  justify-content: space-between;

  input {
    width: 100%;
  }

  /* show Password button */
  button {
    outline: none;
    padding: 0 16px;
    border-left: 1px solid #eaeaea;
    cursor: pointer;
  }
`;

export const FormButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FormButton = styled.button`
  width: 100%;
`;

export const ResetPasswordButton = styled(FormButton)`
  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
`;
export const LoginButton = styled(FormButton)`
  padding: 16px 0;
  background-color: #4cb050;
  color: #ffffff;
  margin: 16px;
  cursor: pointer;
`;
