import React from 'react'
import { render, screen } from '@testing-library/react'
import Episodes from './Episodes'

// How do you get the data?

const episodesData = [
    {
        "id": 553946,
        "url": "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        "name": "Chapter One: The Vanishing of Will Byers",
        "season": 1,
        "number": 1,
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
        },
        "summary": "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
        "_links": {
            "self": {
                "href": "http://api.tvmaze.com/episodes/553946"
            }
        }
    },
    {
        "id": 578663,
        "url": "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
        "name": "Chapter Two: The Weirdo on Maple Street",
        "season": 1,
        "number": 2,
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
        }
    }
]

test("Renders without errors", () => {
    render(<Episodes episodes = {[]} />)
})

test("Rerenders with new props", () => {
    const { rerender } = render(<Episodes episodes = {[]}/>)

    rerender(<Episodes episodes={episodesData}/>)


    // Where do we put the test id? Got it.
    const episodesList = screen.getAllByTestId(/episode/i)
    expect(episodesList).toHaveLength(2)
})