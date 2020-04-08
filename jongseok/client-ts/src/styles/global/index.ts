import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import formReset from './formReset';

export default createGlobalStyle`
    html {
        ${reset};
        ${formReset};
        font-size: 62.5%;
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Nanum Gothic', sans-serif;
    }
`;
