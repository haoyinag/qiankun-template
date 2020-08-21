import React from 'react';

import { Button } from 'antd';

import styles from './index.less';

export default () => {
  return (
    <div className={styles.title}>
      <Button type="primary">我是子应用【umi-app】</Button>
    </div>
  );
};
