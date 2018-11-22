import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
const data = [
    {
        value: 15,
        name: "Warzywa"
    },
    {
        value: 10,
        name: "Owoce"
    },
    {
        value: 6,
        name: "Mięso"
    },
    {
        value: 3,
        name: "Ryby"
    },
    {
        value: 12,
        name: "Nabiał"
    }

];

const Chart = (props) => (
    <div>
        <PieChart width={
            props.viewportWidth <= 992 ?
                props.viewportWidth / 1.5
                :
                props.viewportWidth / 2.5
        }
            height={500}>
            <Pie data={data} dataKey="value" nameKey="name" fill="#8884d8" />
            <Tooltip />
        </PieChart>
    </div>
);
export default Chart