
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const studentData = [
        { id: 1, name: 'Alice', math: 78, physics: 85, chemistry: 79 },
        { id: 2, name: 'Bob', math: 85, physics: 78, chemistry: 88 },
        { id: 3, name: 'Charlie', math: 92, physics: 89, chemistry: 94 },
        { id: 4, name: 'David', math: 74, physics: 82, chemistry: 76 },
        { id: 5, name: 'Eve', math: 88, physics: 90, chemistry: 85 },
        { id: 6, name: 'Frank', math: 81, physics: 84, chemistry: 80 },
        { id: 7, name: 'Grace', math: 95, physics: 91, chemistry: 92 },
        { id: 8, name: 'Hannah', math: 69, physics: 73, chemistry: 71 },
        { id: 9, name: 'Ivy', math: 76, physics: 79, chemistry: 77 },
        { id: 10, name: 'Jack', math: 84, physics: 86, chemistry: 83 }
      ];

    return (
        <div>
            <LChart width={500} height={400} data={studentData}>
                <XAxis dataKey={'name'} ></XAxis>
                <YAxis  ></YAxis>
                <Line dataKey="math" stroke='red'  ></Line>
                <Line dataKey={'physics'} stroke='yellow' ></Line>
                <Line dataKey={'chemistry'} stroke='blue'  ></Line>
            </LChart>
        </div>
    );
};

export default LineChart;