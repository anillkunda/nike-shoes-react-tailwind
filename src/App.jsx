import {
  Collections,
  Hero,
  Products,
  Performance,
  Services,
  Spotlight,
  Showcase,
} from './sections';
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
      <section className="padding">
        <Performance />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <Spotlight />
      </section>
      <section className="xl:padding-l wide:padding-r padding-t padding-b">
        <Showcase />
      </section>
    </main>
  );
};

export default App;
