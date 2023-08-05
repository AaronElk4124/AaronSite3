import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import { HomePageContent } from '../src/content/HomePageContent';

const IndexPage = async () => {
  return (
    <HomePageContent />
  )
}

export default IndexPage;