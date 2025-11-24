import { Hero, Products } from './sections';
import { Navbar } from './components';

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Products />
      </section>
    </main>
  );
};

export default App;
