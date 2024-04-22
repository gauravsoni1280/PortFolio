import './app.scss';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <div className="container">
        <section><Navbar /></section>
        <section>parallax</section>
        <section>project1</section>
        <section>project2</section>
        <section>project3</section>
        <section>Contact</section>
      </div>
    </>
  )
}

export default App;