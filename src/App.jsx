import { Hero } from './sections';
import { Navbar } from './components';

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
    </main>
  );
};

export default App;
