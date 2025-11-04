import './App.css';
import { Header } from './components/Header';
import { MetricsGrid } from './components/MetricsGrid';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Terminal } from './components/Terminal';
import { Footer } from './components/Footer';
import { metrics } from './data/metrics';
import { services } from './data/services';
import { projects } from './data/projects';

function App() {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="console-container">
      <Header onNavigate={handleNavigate} />
      <MetricsGrid metrics={metrics} />
      <Services services={services} />
      <Projects projects={projects} />
      <Terminal />
      <Footer />
    </div>
  );
}

export default App;
