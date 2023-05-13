import 'regenerator-runtime/runtime';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import '../../assets/global.css';
import Card from '../Components/Card'


export default function Home() {
  return (
    <div className="home">
      <Header />
      <Card className="card" />
    </div>
  )
}