import { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="console-header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="system-title">PATRICK LACLAIR</h1>
          <p className="system-subtitle">System Administrator & Software Developer</p>
          <nav className="header-nav">
            <button onClick={() => onNavigate?.('metrics')} className="nav-btn">Metrics</button>
            <button onClick={() => onNavigate?.('services')} className="nav-btn">Services</button>
            <button onClick={() => onNavigate?.('projects')} className="nav-btn">Projects</button>
            <button onClick={() => onNavigate?.('terminal')} className="nav-btn">Terminal</button>
          </nav>
        </div>
        <div className="header-right">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
          <div className="system-time">
            {currentTime.toLocaleTimeString('en-US', { hour12: false })}
          </div>
        </div>
      </div>
    </header>
  );
}
