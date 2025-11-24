import { Collections, Hero, Products } from './sections';
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
      <section className="padding">
        <Collections />
      </section>
    </main>
  );
};

export default App;
