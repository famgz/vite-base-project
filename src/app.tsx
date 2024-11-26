import GlobalLoader from '@/components/global-loader';
import { ColorThemeToggle } from '@/components/color-theme-toggle';
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
        <div className="flex w-full justify-end">
          <ColorThemeToggle />
        </div>
        <main className="flex-1">
          <App />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default WrappedApp;
