import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'
const data = [
    {
        time: "pon",
        users: 1,
    },
    {
        time: "wt",
        users: 3,
    }, {
        time: "śr",
        users: 7,
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
            height={250}
            data={data}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Bar label={true} dataKey="users" fill="#8884d8" />
        </BarChart>
    </div>
);
export default Chart