import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './layout/Background';
import AppLayout from './layout/AppLayout/AppLayout';
import MainScreen from './features/MainScreen/MainScreen';
import CollectionScreen from './features/CollectionScreen/CollectionScreen';

function App() {
  return (
    <BrowserRouter>
      <Background />
      <AppLayout>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/collection" element={<CollectionScreen />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
