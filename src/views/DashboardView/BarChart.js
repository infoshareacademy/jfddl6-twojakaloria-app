import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'
const data = [
    {
        time: "tydzień 1",
        users: 1,
        fill: "red"

    },
    {
        time: "tydzień 2",
        users: 3,
        fill: "blue"

    }, {
        time: "tydzień 3",
        users: 7,
        fill: "yellow"

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