import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './layout/Background';
import AppLayout from './layout/AppLayout/AppLayout';
import MainScreen from './screens/MainScreen/MainScreen';
import CollectionScreen from './screens/CollectionScreen/CollectionScreen';

function App() {
  return (
    <BrowserRouter>
      <Background />
      <AppLayout>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/collection" element={<CollectionScreen />} />
          <Route path="/wallet" element={<CollectionScreen />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
