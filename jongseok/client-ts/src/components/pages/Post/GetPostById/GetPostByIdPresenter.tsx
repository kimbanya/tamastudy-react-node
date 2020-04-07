import React from 'react';
import { Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { IPost } from '../../../../store/reducers/v1/post.reducer';
import { stateToHTML } from 'draft-js-export-html';

interface Props {
  post: IPost;
}

const GetPostByIdPresenter = ({ post }: Props) => {
  const [html, setHtml] = React.useState<any>('');

  React.useEffect(() => {
    handle();
  }, [html]);

  const handle = () => {
    if (post.description) {
      setHtml(stateToHTML(convertFromRaw(JSON.parse(post.description))));
    }
  };

  if (html.length === 0) return <div>Loading ...</div>;

  return (
    <div className="readonly-editor">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
export default GetPostByIdPresenter;
