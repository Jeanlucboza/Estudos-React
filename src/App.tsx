import {Header} from './components/Header';
import {Footer} from './components/Footer';
const app = () => {
  let name = "sauce";
  let age = 21;
  return (
    <div>
      <Header name={name} age={age} />

      ...

      <Footer />
    </div>
  )
}
export default app;