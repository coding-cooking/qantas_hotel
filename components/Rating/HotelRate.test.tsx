import { render, screen } from '@testing-library/react'
import HotelRate, { HAS_COLOUR, NO_COLOUR } from './index'

describe('HotelRate', () => {
    it('renders correct number of stars for integer rating', () => {
        render(<HotelRate ratingValue={4} type="star" />)

        // Should have 4 filled stars and 1 empty star
        const stars = screen.getAllByTitle(/star/i)
        expect(stars).toHaveLength(5)

        // Check if stars have correct fill colors
        const starPaths = screen.getAllByTestId('star-path')
        const filledStars = starPaths.filter(path => path.getAttribute('fill') === HAS_COLOUR)
        const emptyStars = starPaths.filter(path => path.getAttribute('fill') === NO_COLOUR)

        expect(filledStars).toHaveLength(4)
        expect(emptyStars).toHaveLength(1)
    })

    it('renders correct stars for half rating', () => {
        render(<HotelRate ratingValue={3.5} type="star" />)

        // Should have 3 filled stars, 1 half star, and 1 empty star
        const stars = screen.getAllByTitle(/star/i)
        expect(stars).toHaveLength(5)

        const fullStars = screen.getAllByTitle('Full Star')
        const halfStars = screen.getAllByTitle('Half Star')
        const emptyStars = screen.getAllByTitle('Empty Star')

        expect(fullStars).toHaveLength(3)
        expect(halfStars).toHaveLength(1)
        expect(emptyStars).toHaveLength(1)
    })

    it('renders circles for self rating type', () => {
        render(<HotelRate ratingValue={4} type="self" />)

        // Should have 4 filled circles and 1 empty circle
        const circles = screen.getAllByTestId('circle-path')
        expect(circles).toHaveLength(5)

        const filledCircles = circles.filter(circle => circle.getAttribute('fill') === HAS_COLOUR)
        const emptyCircles = circles.filter(circle => circle.getAttribute('fill') === NO_COLOUR)

        expect(filledCircles).toHaveLength(4)
        expect(emptyCircles).toHaveLength(1)
    })

    it('renders half circles for self rating type with half rating', () => {
        render(<HotelRate ratingValue={3.5} type="self" />)

        const fullCircles = screen.getAllByTitle('Full Circle')
        const halfCircles = screen.getAllByTitle('Half Circle')
        const emptyCircles = screen.getAllByTitle('Empty Circle')

        expect(fullCircles).toHaveLength(3)
        expect(halfCircles).toHaveLength(1)
        expect(emptyCircles).toHaveLength(1)
    })

    it('uses self rating type by default', () => {
        render(<HotelRate ratingValue={4} />)

        // Should render circles instead of stars
        expect(screen.queryAllByTitle(/star/i)).toHaveLength(0)
        expect(screen.getAllByTestId('circle-path')).toHaveLength(5)
    })

    it('rounds rating to nearest half', () => {
        render(<HotelRate ratingValue={3.7} type="star" />)

        // 3.7 should round to 3.5, so we expect 3 full stars, 1 half star, and 1 empty star
        const fullStars = screen.getAllByTitle('Full Star')
        const halfStars = screen.getAllByTitle('Half Star')
        const emptyStars = screen.getAllByTitle('Empty Star')

        expect(fullStars).toHaveLength(3)
        expect(halfStars).toHaveLength(1)
        expect(emptyStars).toHaveLength(1)
    })

    it('handles rating greater than 5', () => {
        render(<HotelRate ratingValue={6} type="star" />)

        // Should cap at 5 stars
        const stars = screen.getAllByTitle(/star/i)
        expect(stars).toHaveLength(5)

        const starPaths = screen.getAllByTestId('star-path')
        const filledStars = starPaths.filter(path => path.getAttribute('fill') === HAS_COLOUR)

        expect(filledStars).toHaveLength(5)
    })

    it('handles rating less than 0', () => {
        render(<HotelRate ratingValue={-1} type="star" />)

        // Should show all empty stars
        const stars = screen.getAllByTitle(/star/i)
        expect(stars).toHaveLength(5)

        const starPaths = screen.getAllByTestId('star-path')
        const emptyStars = starPaths.filter(path => path.getAttribute('fill') === NO_COLOUR)

        expect(emptyStars).toHaveLength(5)
    })
})
