import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Example = ({ places }) => {
  console.log(places);
  let city_list = places.map((item) => item.city);
  console.log(city_list);
  const city_count = city_list.reduce((accumulator, value) => {
    accumulator[value] = ++accumulator[value] || 1;

    return accumulator;
  }, {});
  console.log(city_count);
  let city_count_list = [];
  for (let key in city_count) {
    city_count_list.push({
        name: key,
        value: city_count[key]
    })
  }
  console.log(city_count_list);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={city_count_list}>
        <Bar dataKey="value" fill="#8884d8" />
        <XAxis dataKey="name" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Example;
