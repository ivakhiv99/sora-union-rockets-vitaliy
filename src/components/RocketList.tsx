import RocketReviewItem from './RocketReviewItem';
import styled from 'styled-components';

const ListWrapper = styled.div`
    width: 500px;
    min-height: 800px;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px;

`;

// TODO:
// add Create review button at the top of the list with redirect to create review page 

const RocketReviewList = () => {

    const mockRocketReviewList = [
        {
            title: 'Falcon 9 is great!',
            rocketName: 'Falcon 9',
            description: 'Pretty cool rocket',
            id: 0,
            userInfo: {
                login: 'spacedude342',
            }
        },
        {
            title: 'Yeet that tesla!',
            rocketName: 'Falcon heavy',
            description: 'space car go brrrr',
            id: 1,
            userInfo: {
                login: 'TeslaEnjoyer',
            }
        },
        {
            title: 'Shiny!',
            rocketName: 'Starship',
            description: 'Shiny rockets go faster. Everyone knows that!',
            id: 2,
            userInfo: {
                login: 'spacedude342',
            }
        },
        {
            title: 'Belly flop looks cool',
            rocketName: 'Starship',
            description: 'This little maneuver is gonna cost us 51 years... to get it right',
            id: 3,
            userInfo: {
                login: 'CooperDidIt',
            }
        }
    ];

    return (
       <ListWrapper>
            {mockRocketReviewList.map((rocketReview) => <RocketReviewItem data={rocketReview} key={rocketReview.id} />)}
       </ListWrapper>
    )
};

export default RocketReviewList;
