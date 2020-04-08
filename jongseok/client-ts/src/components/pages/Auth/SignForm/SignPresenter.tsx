import React from 'react';
import CommonLayout from '../../../CommonLayout';
import { ISignFormData } from '../auth-types';

interface Props {
  isSignin: boolean;
  formData: ISignFormData;
  onClick: (event: React.FormEvent<any>) => void;
  onChange: (event: React.ChangeEvent<any>) => void;
}

const SignPresenter = ({ isSignin, formData, onClick, onChange }: Props) => {
  return (
    <CommonLayout>
      <form onSubmit={onClick}>
        {!isSignin && (
          <input
            type={'text'}
            placeholder={'User Name'}
            name={'username'}
            value={formData.username}
            onChange={onChange}
          />
        )}

        <input
          type={'text'}
          placeholder={'Email'}
          name={'email'}
          value={formData.email}
          onChange={onChange}
        />
        <input
          type={'password'}
          placeholder={'Password'}
          name={'password'}
          value={formData.password}
          onChange={onChange}
        />
        <button type={'submit'}>로그인</button>
      </form>
    </CommonLayout>
  );
};

export default SignPresenter;
