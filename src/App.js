import Background from './layout/Background';
import AppLayout from './layout/AppLayout/AppLayout';
import MainScreen from './features/MainScreen/MainScreen';

function App() {
  return (
    <>
      <Background />
      <AppLayout>
        <MainScreen />
      </AppLayout>
    </>
  );
}

export default App;
