type PromoScreenTimer = {
    label: string;
    endDate: string;
};

type PromoScreen = {
    id: string;
    name: string;
    order: number;
    template: string;
    bgImage?: string;
    content: {
        title: string;
        description: string;
        buttonType: 'in-game' | 'more' | 'purchase';
        buttonText: string;
        buttonRoute: string;
        timer?: PromoScreenTimer;
        image?: string;
    };
};
