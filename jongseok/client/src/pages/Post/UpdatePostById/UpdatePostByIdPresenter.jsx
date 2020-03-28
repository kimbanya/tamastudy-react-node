import React from 'react';
import Form from '../../../components/atoms/Form';
import Input from '../../../components/atoms/Input';
import Submit from '../../../components/atoms/Submit';

const UpdatePostByIdPresenter = ({
  formData,
  imgCount,
  imgUrl,
  imgCheck,
  handleSubmit,
  handleChange,
  handleChangeImgCount,
  handleChangeImgUrl,
  handleCheckImgUrl,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type={'text'}
        placeholder={'Title'}
        value={formData.title}
        name={'title'}
        onChange={handleChange}
      />
      <Input
        type={'text'}
        placeholder={'Description'}
        value={formData.description}
        name={'description'}
        onChange={handleChange}
      />
      <Input
        type={'number'}
        placeholder={'이미지 개수 선택'}
        value={imgCount}
        name={'imgCount'}
        onChange={handleChangeImgCount}
        min="1"
      />
      {new Array(Number(imgCount)).fill(undefined).map((d, i) => (
        <div key={i}>
          <Input
            type={'text'}
            placeholder={'Image URL'}
            value={imgUrl.imgUrl}
            name={`imgUrl${i}`}
            onChange={handleChangeImgUrl}
          />
        </div>
      ))}
      {imgCheck ? (
        <Submit btnText={'수정하기'} />
      ) : (
        <Submit btnText={'이미지 체크'} onClick={handleCheckImgUrl} />
      )}
    </Form>
  );
};

export default UpdatePostByIdPresenter;
