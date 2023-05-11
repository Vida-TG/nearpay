import 'regenerator-runtime/runtime';
import React from 'react';
import Header from './Components/Header';

import '../assets/global.css';
import Card from './Components/Card'

import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';


export default function App() {
  return (
    <>
      <Header />
      <div className="card">
        <Card />
      </div>
    </>
  )
}