import { services } from '../constants';
import { ServiceCard } from '../components';

const Services = () => {
  return (
    <section className="w-full grid grid-cols-3 max-[900px]:grid-cols-1 gap-6 max-container">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
