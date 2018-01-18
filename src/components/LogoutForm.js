import React from 'react';
import firebase from 'firebase';
import { Card, CardSection, CommonButton } from './common';

const LogoutForm = () => (
  <Card>
    <CardSection>
      <CommonButton
        onPress={() => {
          firebase.auth().signOut();
        }}
        title={'Log Out'}
      />
    </CardSection>
  </Card>
);

export default LogoutForm;
