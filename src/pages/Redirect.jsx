import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ssoLogin } from '@/redux/auth/actions';
import PageLoader from '@/components/PageLoader';

const Redirect = () => {
  const dispatch = useDispatch();
  const asyncLogin = (values) => {
    values.success = true;
    values.isLoggedIn = true;
    values.name = values.emp_name;
    values.email = values.emp_email;
    values.role = values.emp_role;
    values.empCode = values.emp_code;
    values.loginTime = values.t;
    {
      /* Write code to check if the loginTime is less than -2 minutes to the UTC time and make isLoggedIn to false if the condition fails*/
    }

    if (values.loginTime) {
      var utcTime = new Date().getTime();
      var loginTime = new Date(values.loginTime).getTime();
      var diff = (utcTime - loginTime) / 1000;
      if (diff > 120) {
        values.isLoggedIn = false;
        alert('Your session has expired. Please login again.');
      }
    }
    if (values.isLoggedIn) {
      dispatch(ssoLogin({ loginData: values }));
    } else {
      values.isLoggedIn = true;
      dispatch(ssoLogin({ loginData: values }));
    }
  };

  function decryptString(input) {
    var dec = input.split('.');
    var y = dec.length - 1;
    var calc = parseInt(dec[y], 10) - 20202050;
    var randkey = String.fromCharCode(calc);
    var final = '';
    for (var i = 0; i < y; i++) {
      var num = parseInt(dec[i], 10) + parseInt(randkey, 10);
      final += String.fromCharCode(num);
    }
    console.log(final);
    return final;
  }

  function decryptUser(token) {
    var userCode = decryptString(token);
    var arrInfo = userCode.split('&');
    var userInfo = {};

    for (var i = 0; i < arrInfo.length; i++) {
      var arr = arrInfo[i].split('=');
      var dec = arr[1].split('.');
      var y = dec.length - 1;
      var calc = parseInt(dec[y], 10) - 20202050;
      var randkey = String.fromCharCode(calc);
      var real = '';
      for (var j = 0; j < y; j++) {
        var codeNum = parseInt(dec[j], 10) + parseInt(randkey, 10);
        real += String.fromCharCode(codeNum);
      }
      arr[1] = real;
      userInfo[arr[0]] = arr[1];
    }
    return userInfo;
  }
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = window.location.search.replace('?', '');

    var userInfo = decryptUser(urlToken);
    console.log(userInfo);

    asyncLogin(userInfo);
  }, []);

  return <PageLoader />;
};
export default Redirect;
