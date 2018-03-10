import userInfo from '../common/userInfo';

import styles from './style.rxscss';

userInfo();

let body = document.getElementsByTagName('body')[0];

let bodyStyles = { ...styles.h400, ...styles.orangeBg };

Object.keys(bodyStyles).forEach(val=> {
    body.style[val] = bodyStyles[val];
})
