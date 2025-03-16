"use client";

import styled from "@emotion/styled";
import Logo from "@/components/Logo";
import SortedPanel from "@/components/SortedPanel";
import HotelList from "@/components/HotelList";
import { useState, useEffect } from "react";
import { HotelType } from "@/types/hotel";

const Container = styled.div`
  max-width: 765px;
  min-width: 370px;
  margin: 0 auto;
  padding: 16px;
`;

export type HotelPageProps = {
    data: HotelType[];
}

export default function HotelPage({ data }: HotelPageProps) {
    const [sortedData, setSortedData] = useState<HotelType[]>(data || []);

    useEffect(() => {
        if (data) {
            setSortedData(data);
        }
    }, [data])

    return <Container>
        <Logo />
        <SortedPanel city="Sydney" data={data} setSortedData={setSortedData} />
        <HotelList data={sortedData} />
    </Container>;
}
