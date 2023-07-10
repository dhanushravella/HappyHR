import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ssoLogin } from '@/redux/auth/actions';
import PageLoader from '@/components/PageLoader';

const Redirect = () => {
  const dispatch = useDispatch();
  const asyncLogin = (values) => {
    dispatch(ssoLogin({ loginData: values }));
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const email = urlParams.get('email');
    const name = urlParams.get('name');
    const role = urlParams.get('role');
    const company = urlParams.get('company');

    const values = {
      token,
      email,
      name,
      role,
      company,
      success: true,
      result: {
        admin: token,
      },
    };
    asyncLogin(values);
  }, []);

  return <PageLoader />;
};
export default Redirect;
