import React from 'react';
import Layout from '../Layout';
import styles from './styles.module.css';

const ErrorPage = () => (
  <Layout current="Error">
    <div className={styles.ErrorPage}>
      <div>
        <p>
          Ops! Something went wrong... :(
        </p>
        <p>
          Try to refresh the page.
        </p>
      </div>
    </div>
  </Layout>
);

export default ErrorPage;
