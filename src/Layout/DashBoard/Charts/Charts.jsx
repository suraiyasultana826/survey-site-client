import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const Charts = () => {
    const data01 = [
        { name: 'Category: Health', value: 400 },
        { name: 'Category: Technology', value: 300 },
        { name: 'Category: Education', value: 300 },
        { name: 'Category: Business', value: 200 },
        { name: 'Category: Environment', value: 278 },
        { name: 'Category: Workplace', value: 189 },
      ];
      
      const data02 = [
        { name: 'Category: Health', value: 2400 },
        { name: 'Category: Technology', value: 4567 },
        { name: 'Category: Education', value: 1398 },
        { name: 'Category: Business', value: 9800 },
        { name: 'Category: Environment', value: 3908 },
        { name: 'Category: Workplace', value: 4800 },
      ];
     
  
    return (
        <div>
           
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
   
            
        </div>
    );
}



export default Charts;