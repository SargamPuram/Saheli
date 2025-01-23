import React, { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';
import Features from './Features.jsx';
import Articles from './Articles.jsx';
import Testimonials from './Testimonials.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "468bb670-777b-42e0-90e5-09540d6da062",
      region: "au-syd",
      serviceInstanceID: "a81b5e4b-2cb1-4991-87ac-009ac65c7e7c",
      onLoad: async (instance) => { await instance.render(); }
    };
    setTimeout(() => {
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + 
              (window.watsonAssistantChatOptions.clientVersion || 'latest') + 
              "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Banner />
        <Features />
        <Articles />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
