import { HotelType } from "@/types/hotel";
import Hotel from "./Hotel";
import { HotelPageProps } from "./HotelPage";
import styled from "@emotion/styled";

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
            data.map((item: HotelType) => <Hotel key={item.id} data={item} />)
        }
    </Container> : null;
}