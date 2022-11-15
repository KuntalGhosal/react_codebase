import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
// import { useSelector } from 'react-redux';
import styles from './LandingPage.module.scss'
import { Header } from '../../ReusableComponents/header/Header';
import { ReusableButton } from '../../ReusableComponents/Button/Button';
import { HomePageCard } from '../../ReusableComponents/Card/HomePageCard';
import oneCardImg from '../../../Assets/undraw_empty_cart.svg'
import secondCardImg from '../../../Assets/undraw_visualization_re.svg'
import thirdCardImg from '../../../Assets/undraw_medical_research.svg'
const LandingPage = () => {
  console.log(window.location.href)
  //   const { 1: topVault } = useFetch<any>({
  //     method: mainPageService.get,
  //     args: [],
  //     fallBackErrMsg: "Could not fetch topvault",
  // });

  // const fetchedTeslaData = useQueryDispatch({
  //   query: {
  //     action: GetTeslaData,
  //     arg:{}
  //     },
  //   cleanup: { action: resetTeslaProduct, args: [] },
  //   dependency: []
  // });

  // const TeslaDataList = useSelector(MainPageSelectors.selectAll);

  // console.log(TeslaDataList,"TeslaDataList")
  return (
    <Box >
      <Header btnVarient="outlined" btnText="Login" />
      <Box className={styles.textContainer} >
        <Typography variant="h4" component="h2" className={styles.typoStyle}>{" Convert your medical clinic online in 5 min"}</Typography>
      </Box>
      <Box className={styles.reusableButtonModify}>
        <ReusableButton ButtonText='Try for free' ButtonVariant='contained' />
      </Box>
      <Box className={styles.textContainer} >
        <Typography variant="h5" component="h5"  style={{marginBottom:'1.1rem'}}>{"Benefits"}</Typography>
      </Box>
      <Box>
        <HomePageCard imageContent={oneCardImg} imagePosition="L" />
      </Box>
      <Box>
        <HomePageCard imageContent={secondCardImg} imagePosition="R" />
      </Box>
      <Box>
        <HomePageCard imageContent={thirdCardImg} imagePosition="L"/>
      </Box>

    </Box>
  )
}

export default LandingPage;