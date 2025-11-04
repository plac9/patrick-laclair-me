import { useState, useEffect, useRef } from 'react';
import type { LogEntry } from '../types';

export function Terminal() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize with system logs
    const initialLogs: LogEntry[] = [
      { timestamp: new Date(), level: 'success', message: 'System initialized successfully' },
      { timestamp: new Date(), level: 'info', message: 'Loading homelab services...' },
      { timestamp: new Date(), level: 'success', message: 'All containers operational' },
      { timestamp: new Date(), level: 'info', message: 'Type "help" for available commands' },
    ];
    setLogs(initialLogs);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom when logs update
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [logs]);

  const addLog = (level: LogEntry['level'], message: string) => {
    setLogs(prev => [...prev, { timestamp: new Date(), level, message }]);
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    // Add command to history
    if (trimmedCmd) {
      setCommandHistory(prev => [...prev, cmd]);
      addLog('info', `$ ${cmd}`);
    }

    switch (trimmedCmd) {
      case 'help':
        addLog('success', 'Available commands:');
        addLog('info', '  help     - Show this help message');
        addLog('info', '  clear    - Clear terminal');
        addLog('info', '  about    - About Patrick LaClair');
        addLog('info', '  skills   - List technical skills');
        addLog('info', '  contact  - Contact information');
        addLog('info', '  uptime   - System uptime');
        addLog('info', '  status   - Service status');
        break;

      case 'clear':
        setLogs([]);
        break;

      case 'about':
        addLog('success', 'Patrick LaClair');
        addLog('info', 'System Administrator & Software Developer');
        addLog('info', '10+ years of experience in infrastructure and development');
        addLog('info', 'Specializing in homelab infrastructure, containerization, and web development');
        break;

      case 'skills':
        addLog('success', 'Technical Skills:');
        addLog('info', '  Infrastructure: Docker, Proxmox, Traefik, Authentik');
        addLog('info', '  Development: TypeScript, React, Swift, SwiftUI');
        addLog('info', '  Monitoring: Grafana, Prometheus, Loki');
        addLog('info', '  DevOps: CI/CD, Git, Linux Administration');
        break;

      case 'contact':
        addLog('success', 'Contact Information:');
        addLog('info', '  Email: patrick@laclair.us');
        addLog('info', '  GitHub: https://github.com/plac9');
        addLog('info', '  Website: https://laclairtech.com');
        break;

      case 'uptime':
        const uptime = Math.floor((Date.now() - performance.now()) / 1000);
        addLog('success', `System uptime: ${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${uptime % 60}s`);
        break;

      case 'status':
        addLog('success', 'Service Status:');
        addLog('info', '  Homelab Infrastructure: ● OPERATIONAL (99.9%)');
        addLog('info', '  LaClair Technologies: ● OPERATIONAL (100%)');
        addLog('info', '  Family Terminal: ● OPERATIONAL (100%)');
        addLog('info', '  Monitoring Stack: ● OPERATIONAL (99.8%)');
        break;

      case '':
        break;

      default:
        addLog('error', `Command not found: ${trimmedCmd}. Type "help" for available commands.`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <section id="terminal" className="terminal-section">
      <div className="terminal-header">
        <span className="terminal-title">$ patrick@console ~ logs</span>
        <div className="terminal-controls">
          <span className="control-btn" onClick={() => setLogs([])}>_</span>
          <span className="control-btn">□</span>
          <span className="control-btn">✕</span>
        </div>
      </div>
      <div className="terminal-content" ref={terminalContentRef}>
        {logs.map((log, index) => (
          <div key={index} className={`log-entry log-${log.level}`}>
            <span className="log-timestamp">
              [{log.timestamp.toLocaleTimeString()}]
            </span>
            <span className="log-level">[{log.level.toUpperCase()}]</span>
            <span className="log-message">{log.message}</span>
          </div>
        ))}
        <form onSubmit={handleSubmit} className="terminal-input-form">
          <div className="terminal-input-line">
            <span className="prompt">patrick@console:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              autoFocus
              spellCheck={false}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
