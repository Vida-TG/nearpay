import 'regenerator-runtime/runtime';
import React from 'react';

import '../assets/global.css';
import Card from './Components/Card'

import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';


export default function App() {
  return (
    <>
      <div className="card">
        <Card />
      </div>
    </>
  )
}