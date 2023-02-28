import styled from 'styled-components';
import RocketList from './components/RocketList';
import RocketReviewForm from './components/ReviewForm';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

//TODO: 
// add redirect and 404 page
// add route and page for viewing rocket review details
 
const router = createBrowserRouter([
  {
    path:'/',
    element: <RocketList />
  },
  {
    path: '/new-review',
    element: <RocketReviewForm />
  },
  {
    path: '/edit-review/:reviewId',
    element: <RocketReviewForm />
  }
]);

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 150px;
  background-color: #777;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//TODO: use uuid for ids
const mockRocketReviewList = [
  {
      title: 'Falcon 9 is great!',
      rocketName: 'Falcon 9',
      description: 'Pretty cool rocket',
      id: 0,
      userInfo: {
          login: 'spacedude342',
      },
  },
  {
      title: 'Yeet that tesla!',
      rocketName: 'Falcon heavy',
      description: 'space car go brrrr',
      id: 1,
      userInfo: {
          login: 'TeslaEnjoyer',
      },
  },
  {
      title: 'Shiny!',
      rocketName: 'Starship',
      description: 'Shiny rockets go faster. Everyone knows that!',
      id: 2,
      userInfo: {
          login: 'spacedude342',
      },
  },
  {
      title: 'Belly flop looks cool',
      rocketName: 'Starship',
      description: 'This little maneuver is gonna cost us 51 years... to get it right',
      id: 3,
      userInfo: {
          login: 'CooperDidIt',
      },
  },
];

function App() {
  if(!localStorage.getItem('mockList')) {
    localStorage.setItem('mockList', JSON.stringify(mockRocketReviewList));
  }

  return (
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  );
}

export default App;
