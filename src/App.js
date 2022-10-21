
import './index.scss';

import Header from './Components/Header';
import Body from './Components/Body';
// import { Drawer } from './Components/Drawer';
import SideBar from './Components/SideBar'
import { useMobile } from './hook';




function App() {
  const isMobile = useMobile(425)
  return (
    <>
      { isMobile ? <SideBar /> : <Header /> }
      <Body />
    </>
  );
}

export default App;
