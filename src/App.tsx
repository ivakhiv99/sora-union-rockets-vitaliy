import RocketList from './components/RocketList';
import styled from 'styled-components';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


//TODO: 
// add redirect and 404 page
// add route and page for addning rocket review
// add route and page for viewing rocket review details
 
const router = createBrowserRouter([
  {
    path:'/',
    element: <RocketList />
  }
]);

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 150px;
  background-color: #777;
  position: relative;
`;


//TODO: 
// create parent component for rocket list where mock list vould be set into local storage 

function App() {
  return (
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  );
}

export default App;
