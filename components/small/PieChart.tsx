import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { AI_DATA } from '../../lib/constants'

const COLORS = ['#0088FE', '#00C49F']
const data = [
  {
    participant: 0,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 1,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 2,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 3,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 4,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 5,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 6,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 7,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 8,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 9,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 10,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 11,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 12,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 13,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 14,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 15,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 16,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 17,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 18,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 19,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 20,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 21,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 22,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 23,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 24,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 25,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 26,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 27,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 28,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 29,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 30,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 31,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 32,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 33,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 34,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 35,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 36,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 37,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 38,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 39,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 40,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 41,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 42,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 43,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 44,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 45,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 46,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 47,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 48,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 49,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 50,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 51,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 52,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 53,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 54,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 55,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 56,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 57,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 58,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 59,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 60,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 61,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 62,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 63,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 64,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 65,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 66,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 67,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 68,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 69,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 70,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 71,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 72,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 73,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 74,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 75,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 76,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 77,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 78,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 79,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 80,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 81,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 82,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 83,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 84,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 85,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 86,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 87,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 88,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 89,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 90,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 91,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 92,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 93,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 94,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 95,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 96,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 97,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 98,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 99,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 100,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 101,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 102,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 103,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 104,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 105,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 106,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 107,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 108,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 109,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 110,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 111,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 112,
    diabetes: 0,
    no_diabetes: 1,
  },
  {
    participant: 113,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 114,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 115,
    diabetes: 1,
    no_diabetes: 0,
  },
  {
    participant: 116,
    diabetes: 0,
    no_diabetes: 1,
  },
]

let diabetes = 0
let no_diabetes = 0

for (let i = 0; i < data.length; i++) {
  diabetes += data[i].diabetes
  no_diabetes += data[i].no_diabetes
}

const dataPass = [
  { name: 'Diabetes', value: diabetes },
  { name: 'No Diabetes', value: no_diabetes },
]

type Props = {
  data: AI_DATA
}

export default function CustomPieChart({ data }: Props) {
  return (
    <PieChart width={800} height={400} onMouseEnter={(e) => console.log(e)}>
      <Pie
        data={dataPass}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {dataPass.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  )
}
