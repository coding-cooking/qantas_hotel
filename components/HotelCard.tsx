"use client"
import styled from "@emotion/styled";
import Image from "next/image";
import { HotelType } from "@/types/hotel";
import HotelRate from "@/components/Rating";

const Container = styled.div`
    display: flex;
    gap: 16px;
`;

const ImageAndPromotion = styled.div`
    position: relative;
    margin-top: 4px;
    width: 145px;
    height: 125px;
    flex-shrink: 0;
`;

const HotelImage = styled(Image)`
   object-fit: cover;   
`;

const Promotion = styled.div`
    position: absolute;
    top: 4px;
    background-color: white;
    font-size: 14px;
    color: #c83a3a;
    font-weight: bold;
    padding: 8px;
`;

const HotelInfoWrapper = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   border-top: 1px solid #e5e5e5;
   padding-top: 12px;
`;

const HotelInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const TitleAndRate = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const Title = styled.h3`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    max-width: 300px;
    font-size: 18px;
    color: #000000;
`;

const Address = styled.p`
    font-size: 12px;
    color: #666666;
`;

const OfferAndPrice = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
`;

const OfferInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
`;

const OfferName = styled.div`
    font-size: 12px;
    color: #de5858;
    text-decoration: underline;
`;

const CancellationOption = styled.div`
    font-size: 12px;
    color: #128912;
`;

const PriceLabel = styled.div`
    margin-top: 8px;
    font-size: 12px;
    color: #8a8888;
`;

const PriceWrapper = styled.div`
     display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-end;
`;

const PriceInfo = styled.div`
   display: flex;
   gap: 2px;
`;

const PriceUnit = styled.span`
    font-size: 12px;
    color: #5c5a5a;
`;

const Price = styled.span`
    font-size: 24px;
`;

const SaveWrapper = styled.div`
    margin-top: 2px;
    display: flex;
    color: #cb2222;
`;

const SaveMoney = styled.span`
    font-size: 16px;
`;

const Approx = styled.span` 
    font-size: 12px;
`;

enum CancellationEnum {
    FREE_CANCELLATION = "Free cancellation",
    NOT_REFUNDABLE = "Not refundable",
}

type HotelProps = {
    data: HotelType;
}

export default function HotelCard({ data }: HotelProps) {
    const cancellationType = data?.offer?.cancellationOption?.cancellationType;

    return <Container role="article">
        <ImageAndPromotion>
            <HotelImage unoptimized src={data?.property?.previewImage?.url} alt={data?.property?.previewImage?.caption || "hotel image"} fill={true} />
            <Promotion>{data?.offer?.promotion?.title}</Promotion>
        </ImageAndPromotion>
        <HotelInfoWrapper>
            <HotelInfo>
                <TitleAndRate>
                    <Title>{data?.property?.title}</Title>
                    <HotelRate ratingValue={data?.property?.rating?.ratingValue} type={data?.property?.rating?.ratingType} />

                </TitleAndRate>
                <Address>{data?.property?.address?.join(', ')}</Address>
            </HotelInfo>
            <OfferAndPrice>
                <OfferInfo>
                    <OfferName>{data?.offer?.promotion?.title}</OfferName>
                    <CancellationOption>
                        {cancellationType ? CancellationEnum[cancellationType] : ""}
                    </CancellationOption>
                </OfferInfo>
                <PriceWrapper>
                    <PriceLabel>1 night total ({data?.offer?.displayPrice?.currency})</PriceLabel>
                    <PriceInfo>
                        <PriceUnit>$</PriceUnit>
                        <Price>{data?.offer?.displayPrice?.amount}</Price>
                    </PriceInfo>
                    {
                        data?.offer?.savings?.amount && (
                            <SaveWrapper><SaveMoney>Save ${data?.offer?.savings?.amount}</SaveMoney><Approx>~</Approx></SaveWrapper>
                        )
                    }
                </PriceWrapper>
            </OfferAndPrice>
        </HotelInfoWrapper>
    </Container>
}