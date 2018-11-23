import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
const data = [
    {
        value: 15,
        name: "Warzywa",
        fill: "red"
    },
    {
        value: 10,
        name: "Owoce",
        fill: "purple"

    },
    {
        value: 6,
        name: "Mięso",
        fill: "blue"

    },
    {
        value: 3,
        name: "Ryby",
        fill: "green"

    },
    {
        value: 12,
        name: "Nabiał",
        fill: "yellow"

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
            <Pie data={data} dataKey="value" nameKey="name"  />
            <Tooltip />
        </PieChart>
    </div>
);
export default Chart