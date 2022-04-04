import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { Entry } from './pages/entry/Entry.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* now we can send the main content to be displayed in default layout */}
        {/* <Dashboard/> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
