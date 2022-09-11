import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import bg1 from '../assets/bgPhotos/1-M3.jpg'
import bg2 from '../assets/bgPhotos/2-ModelY.jpg'
import bg3 from '../assets/bgPhotos/3-Model-S.jpg'
import bg4 from '../assets/bgPhotos/4-MODEL-X.jpg'

const Home: NextPage = () => {
  return (
    <Box sx={{ position: 'relative' }}>

      <Box sx={{ position: 'sticky', top: 0, zIndex: 4 ,mt:'calc(-1 * 100vh)'  ,display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        Content Container
      </Box>

      <Image src={bg1} layout='responsive' />
      <Image src={bg2} layout='responsive' />
      <Image src={bg3} layout='responsive' />
      <Image src={bg4} layout='responsive' />


    </Box>
  )
}

export default Home
