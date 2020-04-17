import React from 'react';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import SlateEditor from '../../../editor/SlateEditor';
import { IPostCreateInitialState } from '../post-types';

interface Props {
  formData: IPostCreateInitialState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => string | number | undefined;
  handleChangeDescription: (content: string) => void;
  titleInputRef: React.RefObject<HTMLInputElement>;
}

const PostFormPresenter = ({
  formData,
  onChange,
  onSubmit,
  handleChangeDescription,
  titleInputRef,
}: Props) => {
  return (
    <Wrapper>
      <FormWrapper onSubmit={onSubmit}>
        <InputTitle
          type={'text'}
          onChange={onChange}
          name={'title'}
          value={formData.title}
          ref={titleInputRef}
        />
        <SlateEditor onChange={handleChangeDescription} />
        <InputThumbnail type={'text'} onChange={onChange} name={'imgUrl'} value={formData.imgUrl} />
        <SubmitButton type={'submit'}>CREATE POST</SubmitButton>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 16px;
`;

const FormWrapper = styled.form`
  display: grid;
  grid-gap: 8px;
`;

const InputTitle = styled.input.attrs((props) => ({
  placeholder: '타이틀을 입력해주세요 .',
}))`
  width: 100%;
  box-sizing: border-box;
  padding: 8px 16px 8px 0;
  font-size: 1.5rem;
  font-family: 'Share', cursive;
  &::placeholder {
    font-style: italic;
    font-size: 2rem;
    font-weight: 300;
  }
`;

const InputThumbnail = styled(InputTitle).attrs((props) => ({
  placeholder: '썸네일 이미지 주소를 입력해주세요 .',
}))``;

const SubmitButton = styled.button`
  width: 100%;
  background: black;
  color: white;
  padding: 16px;
  cursor: pointer;
  font-family: 'Share', cursive;
  outline: none;
`;

export default PostFormPresenter;
