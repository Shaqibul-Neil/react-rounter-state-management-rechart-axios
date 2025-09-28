import { use } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MarksCharts = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;
  console.log(marksData);

  //data processing for the chart cz rechart doesn't allow nested obj but in our json data marks are in nested obj. so we are processing it.
  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };
    const average = (student.physics + student.chemistry + student.math) / 3;
    student.average = average;
    console.log(student);
    return student;
  });

  return (
    <div className="w-full lg:w-11/12 mx-auto">
      <ResponsiveContainer width="100%" height={800}>
        <BarChart
          data={marksChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"name"} angle={-90} textAnchor="end" interval={0} />
          <YAxis
            width={25}
            label={{
              value: "marks",
              position: "outsideLeft",
              angle: -90,
              dx: -20,
            }}
          />
          <Tooltip
            contentStyle={{ color: "aqua", backgroundColor: "black" }}
            cursor={{ fill: "black" }}
          />
          <Legend wrapperStyle={{ backgroundColor: "black", bottom: -30 }} />
          <Bar dataKey={"physics"} fill="#8884d8" />
          <Bar dataKey={"chemistry"} fill="#82ca9d" />
          <Bar dataKey={"math"} fill="pink" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarksCharts;
