import About from "./sections/about";
import Contacts from "./sections/contacts";
import Experts from "./sections/experts";
import Feedback from "./sections/feedback";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Services from "./sections/services";

export const App = () => {
  return (
    <div className="mx-auto relative">
      <Header />
      <Hero />
      <Services />
      <About />
      <Experts />
      <Feedback />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
