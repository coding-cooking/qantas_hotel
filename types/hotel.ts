type OfferType = {
    promotion: {
        title: string;
        type: 'MEMBER' | 'CAMPAIGN';
    };
    name: string;
    displayPrice: {
        amount: number;
        currency: 'AUD';
    };
    savings: {
        amount: number;
        currency: 'AUD';
    } | null;
    cancellationOption?: {
        cancellationType: 'NOT_REFUNDABLE' | 'FREE_CANCELLATION';
    };

};

type PropertyType = {
    propertyId: string;
    title: string;
    address: string[];
    previewImage: {
        url: string;
        caption: string;
        imageType: 'PRIMARY';
    };
    rating: {
        ratingValue: number;
        ratingType: 'self' | 'star';
    }
};

export type HotelType = {
    id: string;
    property: PropertyType;
    offer: OfferType;
};