import React from 'react';
import { ComponenteData } from './context/DataContext';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Preloader from './components/preloader';
import Mainwrapper from './components/mainwrapper';
import Pagewrapper from './components/pagewrapper';
import Footer from './components/footer';
import Containerfluid from './components/containerfluid';
import Breadcrums from './components/breadcrums';
import Maincontent from './components/maincontent';

function App() {

  return (
    <ComponenteData>
      <Mainwrapper>
        <Preloader />
        <Header />
        <Sidebar />
        <Pagewrapper>
          <Containerfluid>
            <Breadcrums />
            <Maincontent>
              <div className="card">
                <div className="card-body">
                  This is some text within a card block.
                </div>
              </div>

            </Maincontent>
          </Containerfluid>
          <Footer />
        </Pagewrapper>
      </Mainwrapper>
    </ComponenteData>
  );
}

export default App;
