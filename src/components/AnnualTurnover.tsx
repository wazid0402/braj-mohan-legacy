import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AnnualTurnover = () => {
  // Hardcoded data based on the screenshot
  const chartData = [
    { name: "2022-23", "Annual Turnover": 30, Growth: 20 },
    { name: "2023-24", "Annual Turnover": 111, Growth: 370 },
    { name: "2024-25", "Annual Turnover": 384, Growth: 346 },
  ];

  const tableData = [
    { year: "2022-23", turnover: 30, growth: "20%" },
    { year: "2023-24", turnover: 111, growth: "370%" },
    { year: "2024-25", turnover: 384, growth: "346%" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center font-sans">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#2a3044] p-4 text-white font-bold text-lg text-center flex justify-between items-center relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-400 via-orange-300 to-transparent opacity-20 z-0"></div>
          <div className="relative z-10 flex-1 text-center text-2xl font-bold">
            ANNUAL TURNOVER & Y-O-Y GROWTH
          </div>
        </div>

        {/* Chart Section */}
        <div className="p-8">
          <h3 className="text-center text-lg font-semibold mb-4">
            Last 3 Years Annual Turnover & Y-o-Y Growth
          </h3>
          <div className="relative" style={{ height: "500px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  stroke="#2a3044"
                  label={{
                    value: "ANNUAL TURNOVER IN LAKHS",
                    angle: -90,
                    position: "insideLeft",
                    offset: -10,
                  }}
                />
                {/* Modified YAxis to include a tickFormatter to add the '%' sign */}
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#e67e22"
                  label={{
                    value: "GROWTH RATE IN PERCENTAGE",
                    angle: 90,
                    position: "insideRight",
                    offset: -10,
                  }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip />
                <Legend
                  layout="horizontal"
                  verticalAlign="top"
                  align="center"
                  wrapperStyle={{ paddingBottom: "20px" }}
                />
                <Bar
                  yAxisId="left"
                  dataKey="Annual Turnover"
                  fill="#2a3044"
                  barSize={40}
                />
                <Line
                  yAxisId="right"
                  type="linear"
                  dataKey="Growth"
                  stroke="#e67e22"
                  strokeWidth={2}
                  dot={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Table Section */}
        <div className="p-8 pt-0">
          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"></th>
                  {tableData.map((row, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                    >
                      {row.year}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-gray-900">
                    Annual Turnover
                  </td>
                  {tableData.map((row, index) => (
                    <td
                      key={index}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {row.turnover}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-gray-900">
                    Growth
                  </td>
                  {tableData.map((row, index) => (
                    <td
                      key={index}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {row.growth}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualTurnover;
