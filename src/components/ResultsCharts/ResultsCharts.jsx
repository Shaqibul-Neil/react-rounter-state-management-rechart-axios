import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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
];

const ResultsCharts = () => {
  return (
    <div className="md:w-11/12 w-full h-96 mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={resultsData}
          margin={{ top: 40, right: 20, left: 10, bottom: 20 }}
        >
          <XAxis dataKey={"name"} interval={0} angle={-90} textAnchor="end" />
          <YAxis
            width={40}
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
          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ bottom: -20, right: 0 }}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultsCharts;
