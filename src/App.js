import 'regenerator-runtime/runtime';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

import '../assets/global.css';
import Card from './Components/Card'

import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';


export default function App() {
  return (
    <>
      <Header />
      <Card className="card" />
      <Footer />
    </>
  )
}