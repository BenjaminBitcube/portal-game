import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  // <BrowserRouter>
  //       <Routes>
  //           <Route path="/" element={<GameDashboard />}></Route>
  //           <Route path="/game/:sessionId/:teamId" element={<Mobile />} />
  //           <Route path="/join/:sessionId" element={<JoinGame />} />
  //           <Route path="/continue/:sessionId" element={<ContinueGame />} />
  //           <Route path="board/:sessionId" element={<GameBoard />} />
  //           <Route path="leaderboard/:sessionId" element={<Leaderboard />} />
  //           <Route path="admin" element={<AdminDashboard />} />
  //           <Route path='admin/sessions' element={<Sessions />} />
  //           <Route path='admin/sessions/:sessionId' element={<Session />} />
  //           <Route path="admin/prompts" element={<Prompts />} />
  //           <Route path="admin/prompts/viewAll" element={<PromptsAll />} />
  //           <Route path="admin/prompts/addPrompt" element={<PrompstAdd />} />
  //       </Routes>
  //   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
