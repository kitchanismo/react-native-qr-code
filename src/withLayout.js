import React from 'react';
import {Layout, StyleService, useStyleSheet} from '@ui-kitten/components';

const withLayout = Component => {
  const styles = useStyleSheet(themedStyles);
  return props => (
    <Layout level="1" style={styles.layout}>
      <Component {...props}></Component>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  layout: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
});

export default withLayout;
