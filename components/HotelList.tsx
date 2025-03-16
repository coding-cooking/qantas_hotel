import { HotelType } from "@/types/hotel";
import { HotelPageProps } from "./HotelPage";
import styled from "@emotion/styled";
import HotelCard from "./HotelCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 6px;
`;

type HotelListProps = HotelPageProps;

export default function HotelList({ data }: HotelListProps) {
    return data.length > 0 ? <Container>
        {
            data.map((item: HotelType) => <HotelCard key={item.id} data={item} />)
        }
    </Container> : null;
}