import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Label } from 'recharts'

const Chart = (props) => (
    <div>
        <BarChart
            width={
                props.viewportWidth <= 992 ?
                    props.viewportWidth / 1.5
                    :
                    props.viewportWidth / 2.5
            }
            height={550}
            data={props.data}
            margin={{ bottom: 20 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time">
                <Label value="Days Of Logging " offset={0} position="bottom" />
            </XAxis>
            <YAxis />
            <Bar dataKey="users" />
        </BarChart>
    </div>
)
export default Chart