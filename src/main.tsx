import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Urgimchak Taxi App:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          backgroundColor: '#080C14',
          color: '#F8FAFC',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#F59E0B', marginBottom: '12px' }}>O'rgimchak Taxi — Qayta Yuklanmoqda</h2>
          <p style={{ color: '#94A3B8', marginBottom: '24px' }}>Kichik texnik uzilish yuz berdi. Sahifani yangilang.</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: '#F59E0B',
              color: '#080C14',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Sahifani yangilash
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}
