import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import * as React from 'react';
import PhoneInput from 'react-phone-input-2'
import useStyles from './useStyles'
import 'react-phone-input-2/lib/style.css'
import { ReusableButton } from '../../ReusableComponents/Button/Button';
import { Header } from '../../ReusableComponents/header/Header';
import styles from './Login.module.scss'
import './style.css'
export interface ILoginProps {
}

export function Login(props: any) {
  const Input = (props: any) => {
    const classes = useStyles();
  
    return (
      <Box className={classes.BoxInline} pr={1} pl={1} >
        {/* <Box className={classes.BoxText} pr={1}>
          {props.label || props.labels} : {props.req && <span>*</span>}
        </Box> */}
        <Box>
            <PhoneInput
            country={'th'}
            inputStyle={{
              borderColor: (props.touched && props.error) && "red"
            }}
            {...props}
            />
            {(props.touched && props.error) && <p style={{color:'red'}} className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense">{props.error}</p> }
        </Box>
      </Box>
    );
  };
  return (
    <div>
       <Header btnVarient="outlined" btnText="Login" />
       <div style={{marginTop:'1.5rem',marginLeft:'6%',marginRight:'5%'}}>
        <Typography variant="h5" component="h5"  style={{marginBottom:'1.1rem'}}>Login</Typography>
        <>
        <Input
            // label={" registered number"}
            req={true}
            helperText={""}
            error={true}
            isSelect={false}
            {...props.input}
            {...props.meta}
            {...props.custom}
        />
        </>
      </div>
      <Box className={styles.reusableButtonModify}>
        <ReusableButton ButtonText='Request OTP' ButtonVariant='contained' />
      </Box>
    </div>
  );
}
