import { HotelType } from "@/types/hotel";
import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ResultsWrapper = styled.div`
    margin: 16px 0;
    font-size: 16px;
`;

const BoldText = styled.span`
    font-weight: bold;
`;

const ItalicText = styled.span`
    padding: 0 4px;
    font-style: italic;
`;

const SelectorWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Label = styled.label`
    font-size: 16px;
    font-weight: bold;
    padding: 0 4px;
`;

const Select = styled.select`
    min-width: 120px;
`;

type SortPanelProps = {
    data: HotelType[];
    city: string;
    setSortedData: (data: HotelType[]) => void;
}

export default function SortedPanel(props: SortPanelProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        if (value === "default") {
            props.setSortedData([...props.data]);
            return;
        }
        const sortedArray = [...props.data].sort((a: HotelType, b: HotelType) =>
            value === "dec"
                ? b.offer.displayPrice.amount - a.offer.displayPrice.amount
                : a.offer.displayPrice.amount - b.offer.displayPrice.amount
        );
        props.setSortedData(sortedArray);
    }

    return <Container>
        <ResultsWrapper>
            <BoldText>{props.data?.length || 0}</BoldText>
            <ItalicText>hotels in</ItalicText>
            <BoldText>{props.city}</BoldText>
        </ResultsWrapper>
        <SelectorWrapper>
            <Label htmlFor="sortByPrice">Sort by</Label>
            <Select name="sortByPrice" onChange={handleChange}>
                <option value="default">Default</option>
                <option value="asc">Price low-high</option>
                <option value="dec">Price high-low</option>
            </Select>
        </SelectorWrapper>
    </Container>;
}