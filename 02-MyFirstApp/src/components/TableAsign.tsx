import React from 'react';
import {TableHeader} from './TableHeader';
import {MainContainer} from './MainContainer';
import {ScrollView} from 'react-native';

export const TableAsign = () => {
  return (
    <ScrollView>
      <TableHeader />
      <MainContainer />
    </ScrollView>
  );
};
