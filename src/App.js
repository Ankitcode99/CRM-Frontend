import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { Entry } from './pages/entry/Entry.page';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* now we can send the main content to be displayed in default layout */}
        <Dashboard/>
      </DefaultLayout>
    </div>
  );
}

export default App;
