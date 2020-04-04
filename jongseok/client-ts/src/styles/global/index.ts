import { createGlobalStyle } from 'styled-components';
import formReset from './formReset';
import 'normalize.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Nanum Gothic', sans-serif;
    }
    html {
        font-size: 62.5%;
    }
    ${formReset}
`;
