import React from 'react';
import { Global, css } from '@emotion/core';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          font-size: 10px;
        }
        body,
        html,
        #___gatsby {
          height: 100%;
        }
      `}
    />
    <main>{children}</main>
  </>
);

export default Layout;
