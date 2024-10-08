import HomePage from '@/pages/home';
import NotFound from '@/pages/not-found';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <App />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default WrappedApp;
