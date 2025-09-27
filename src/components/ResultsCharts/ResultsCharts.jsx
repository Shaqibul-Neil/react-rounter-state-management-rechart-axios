import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const resultsData = [
  { id: 1, name: "Rahim", physics: 78, chemistry: 65, math: 82 },
  { id: 2, name: "Karim", physics: 85, chemistry: 71, math: 90 },
  { id: 3, name: "Salma", physics: 92, chemistry: 88, math: 95 },
  { id: 4, name: "Nusrat", physics: 67, chemistry: 72, math: 69 },
  { id: 5, name: "Rafi", physics: 74, chemistry: 70, math: 80 },
  { id: 6, name: "Shila", physics: 88, chemistry: 79, math: 85 },
  { id: 7, name: "Hasan", physics: 81, chemistry: 83, math: 77 },
  { id: 8, name: "Mitu", physics: 95, chemistry: 90, math: 98 },
  { id: 9, name: "Rakib", physics: 69, chemistry: 74, math: 72 },
  { id: 10, name: "Anika", physics: 90, chemistry: 86, math: 93 },
  { id: 11, name: "Sajib", physics: 76, chemistry: 68, math: 81 },
  { id: 12, name: "Farzana", physics: 83, chemistry: 85, math: 87 },
  { id: 13, name: "Imran", physics: 72, chemistry: 66, math: 70 },
  { id: 14, name: "Nadim", physics: 65, chemistry: 60, math: 68 },
  { id: 15, name: "Joya", physics: 87, chemistry: 82, math: 91 },
];

const ResultsCharts = () => {
  return (
    <div>
      <LineChart width={1200} height={400} data={resultsData}>
        <XAxis dataKey={"name"} />
        <YAxis
          width={50}
          label={{
            value: "marks",
            position: "outsideLeft",
            angle: -90,
            dx: -20,
          }}
        />
        <Line dataKey="physics" strokeWidth={2} name="physics" />
        <Line dataKey={"math"} stroke="red" strokeWidth={2} name="math" />
        <Line
          dataKey={"chemistry"}
          stroke="green"
          strokeWidth={2}
          name="chemistry"
        />
        <Legend align="right" />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default ResultsCharts;
