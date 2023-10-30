import Logo from '../assets/logo.jpg'
import './header.css'

export default function Header() {
  return (
     <header>
        <img src={ Logo } alt="logo"/>
        <a href="https://animepahe.ru/">Home</a>
     </header>
  );
}
