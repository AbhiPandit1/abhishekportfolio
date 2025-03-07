import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CursorProvider } from './component/CursorProvider.jsx';
import CustomCursor from './component/CustomCursor.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CursorProvider>
      <CustomCursor />
      <App />
    </CursorProvider>
  </StrictMode>
);
