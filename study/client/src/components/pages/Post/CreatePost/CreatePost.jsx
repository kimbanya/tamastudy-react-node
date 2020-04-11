import React from 'react';
import { useDispatch } from 'react-redux';
import { createPostFn } from '../../../../store/actions/v1/post.action';
import { useFormik } from 'formik';
import { yupValidate } from './util';

const CreatePost = () => {
  const dispatch = useDispatch();

  const postFormik = useFormik({
    initialValues: {
      title: '',
      description: '',
      imgUrl: '',
    },
    validationSchema: yupValidate,
    onSubmit: (formData) => {
      dispatch(createPostFn(formData));
    },
  });

  return (
    <div>
      <form onSubmit={postFormik.handleSubmit}>
        {/* 1. Title */}
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={postFormik.handleChange}
            onBlur={postFormik.handleBlur}
            value={postFormik.values.title}
          />
          {postFormik.touched.title && postFormik.errors.title ? (
            <div style={{ color: 'red' }}>{postFormik.errors.title}</div>
          ) : null}
        </div>
        {/* 2. Description */}
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            type="textarea"
            onChange={postFormik.handleChange}
            onBlur={postFormik.handleBlur}
            value={postFormik.values.description}
          />
          {postFormik.touched.description && postFormik.errors.description ? (
            <div style={{ color: 'red' }}>{postFormik.errors.description}</div>
          ) : null}
        </div>
        {/* 3. Image Url */}
        <div>
          <label htmlFor="imgUrl">Image Url</label>
          <input
            id="imgUrl"
            name="imgUrl"
            type="text"
            onChange={postFormik.handleChange}
            onBlur={postFormik.handleBlur}
            value={postFormik.values.imgUrl}
          />
          {postFormik.touched.imgUrl && postFormik.errors.imgUrl ? (
            <div style={{ color: 'red' }}>{postFormik.errors.imgUrl}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
