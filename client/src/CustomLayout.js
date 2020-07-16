import React from 'react';
import { Layout } from 'react-admin';
import CustomNotification from './CustomNotification';

const CustomLayout = (props) => <Layout {...props} notification={CustomNotification} />;

export default CustomLayout;