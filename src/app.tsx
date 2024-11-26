import GlobalLoader from '@/components/global-loader';
import { useLoader } from '@/context/loader';
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
  const { loading } = useLoader();

  return (
    <BrowserRouter>
      {loading && <GlobalLoader />}
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <App />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default WrappedApp;
