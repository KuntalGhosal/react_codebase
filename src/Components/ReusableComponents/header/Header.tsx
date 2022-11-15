import { Box, Button, IconButton } from '@mui/material';
import FinalLogo from '../../../Assets/Final Logo.svg'
import styles from './Header.module.scss'
import CallIcon from '@mui/icons-material/Call';
import { useHistory } from 'react-router-dom';

export interface IHeaderProps {
  btnVarient: "text" | "outlined" | "contained" | undefined;
  btnText: string
}

export function Header(props: IHeaderProps) {
  const { btnVarient, btnText } = props
  const history = useHistory();
  return (
    <Box className={styles.container}>
      <img src={FinalLogo} alt="Final Logo" onClick={()=>history.push("/")} />
      <Box className={styles.btnContainer}>
        <Button className={styles.headerButton} variant={btnVarient} onClick={()=>history.push("/login")}>{btnText}</Button>
        <Button aria-label="call"  className={styles.iconBtn} size="small">
          <CallIcon fontSize="inherit" onClick={()=>console.log("clicking")}/>
        </Button>
       
      </Box>

    </Box>
  );
}
