export type RocketReview = {
    title: string;
    rocketName: string;
    description: string;
    id: number;
    userInfo: {
        login: string;
    }
};

export type ReviewForm = {
    title: string;
    rocket: string;
    review: string;
    user: string;
};
