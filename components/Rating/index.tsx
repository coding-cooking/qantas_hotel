import { Fragment } from "react";
import { HalfStar, Star } from "./Star";
import { Circle, HalfCircle } from "./Circle";
import styled from "@emotion/styled";

export const HAS_COLOUR = '#e0c61d';
export const NO_COLOUR = '#f0eeee';

const Container = styled.div`
    display: flex;
    gap: 2px;
`;

type RateProps = {
    ratingValue: number;
    type?: "self" | "star";
}

export default function HotelRate({ ratingValue, type = "self" }: RateProps) {
    const halfRoundedRating = Math.round(2 * ratingValue) / 2;
    return (
        <Container>
            {Array.from(Array(5).keys()).map((index) => (
                <Fragment key={index}>
                    {
                        halfRoundedRating >= index + 1 && (type === "star" ? <Star fill={HAS_COLOUR} /> : <Circle fill={HAS_COLOUR} />)
                    }
                    {
                        halfRoundedRating <= index && (type === "star" ? <Star fill={NO_COLOUR} /> : <Circle fill={NO_COLOUR} />)
                    }
                    {
                        halfRoundedRating > index && halfRoundedRating < index + 1 && (type === "star" ? <HalfStar leftFill={HAS_COLOUR} rightFill={NO_COLOUR} /> : <HalfCircle leftFill={HAS_COLOUR} rightFill={NO_COLOUR} />)
                    }
                </Fragment>
            ))}
        </Container>
    )
}