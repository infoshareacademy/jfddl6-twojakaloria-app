import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'



const data = [
    {
        time: "Poniedziałek",
        users: 1,
        fill: "red"

    },
    {
        time: "Wtorek",
        users: 3,
        fill: "blue"

    }, {
        time: "Środa",
        users: 7,
        fill: "yellow"

    },
    {
        time: "Czwartek",
        users: 1,
        fill: "green"

    },
    {
        time: "Piątek",
        users: 3,
        fill: "purple"

    },
    {
        time: "Sobota",
        users: 7,
        fill: "pink"

    },
    {
        time: "Niedziela",
        users: 7,
        fill: "black"

    }
]
const Chart = (props) => (
    <div>
        <BarChart
            width={
                props.viewportWidth <= 992 ?
                    props.viewportWidth / 1.5
                    :
                    props.viewportWidth / 2.5
            }
            height={500}
            data={data}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Bar label={true} dataKey="users"  />
        </BarChart>
    </div>
);
export default Chart