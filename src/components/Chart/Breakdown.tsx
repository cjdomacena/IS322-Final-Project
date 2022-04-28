import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
type Props = {
	labels: string[],
	data: string[]
}
ChartJS.register(ArcElement, Tooltip, Legend);
const Breakdown = (props: Props) => {
	const accounts = props.data.map((t) => Number(t).toFixed(2));
	console.log(accounts)
 const data = {
   labels: [...props.labels],
   datasets: [
     {
       label: 'Account Breakdown',
       data: accounts,
       backgroundColor: [
         'rgba(0, 63, 92, 0.6)',
         'rgba(255, 118, 74, 0.6)',
         'rgba(239, 86, 117, 0.6)',
         'rgba(88, 80, 144, 0.6)',
         'rgba(255, 166, 0, 0.6)',
         'rgba(55, 76, 128, 0.6)',
       ],
       borderColor: [
         'rgba(0, 63, 92, 1)',
         'rgba(255, 118, 74,1)',
         'rgba(239, 86, 117, 1)',
         'rgba(88, 80, 144, 1)',
         'rgba(255, 166, 0, 1)',
         'rgba(55, 76, 128, 1)',
       ],
       borderWidth: 1,
     },
   ],
 };
  return (
	<Doughnut width={100} height={50} data={data} options={{
		maintainAspectRatio: true,
		plugins: {
			legend: {
				labels: {
					usePointStyle: true,
					pointStyle: 'rectRounded',
					boxWidth: 15,
					padding: 15
				},
				position: 'bottom',
			}
		},
		responsive:true,
	
	}}></Doughnut>
  )
}

export default Breakdown