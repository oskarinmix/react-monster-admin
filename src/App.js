import React from 'react';
import { ComponenteData } from './context/DataContext';
import Header from './components/header/';
import SideBar from './components/sidebar/';
import PreLoader from './components/preloader';
import MainWrapper from './components/wrappers/mainwrapper';
import PageWrapper from './components/wrappers/pagewrapper';
import Footer from './components/footer';
import ContainerFluid from './components/wrappers/containerfluid';
import BreadCrums from './components/breadcrums';
import MainContent from './components/maincontent';

function App() {

  return (
    <ComponenteData>
      <MainWrapper>
        <PreLoader />
        <Header />
        <SideBar />
        <PageWrapper>
          <ContainerFluid>
            <BreadCrums />
            <MainContent>
              <div className="card">
                <div className="card-body">
                  This is some text within a card block.
                </div>
              </div>
            </MainContent>
          </ContainerFluid>
          <Footer />
        </PageWrapper>
      </MainWrapper>
    </ComponenteData>
  );
}

export default App;
