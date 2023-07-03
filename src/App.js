import './App.css';
import FetchChats from './api/FetchChats';
import ChatTiming from './components/ChatTiming';
import DefaultChat from './components/DefaultChat';
import Header from './components/Header'
import InputFooterTextbox from './components/InputFooterTextbox';
import TextMsg from './components/TextMsg';

function App() {

  return (
    <div className="App">

      <Header />
      <ChatTiming />
      <DefaultChat/>
      <TextMsg />
      <InputFooterTextbox/>
    </div>
  );
}

export default App;

// <FetchChats/>

