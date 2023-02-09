import {Chart, Filler} from 'chart.js'
Chart.register(Filler)

export const Data = {
  labels: [
    'Leadership & Strategy',
    'Technical Communication',
    'Software Development',
    'Cloud',
    'Security',
    'Integrations',
    'Methodology',
    'Facilitation',
    'Agile Practices',
    'Growth Mindset',
    'Resilience & Persistence',
    'User and Business Awareness',
    'Influencing',
    'Speaking and Presenting',
    'Stakeholder Management'
  ],
  datasets: [{
    label: 'Senior',
    data: [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 3, 2],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    borderWidth: 1,
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'Lead',
    data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 4, 3],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    borderWidth: 1,
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }, {
    label: 'Principal',
    data: [4, 4, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 4, 5, 4],
    fill: true,
    backgroundColor: 'rgba(241, 90, 34, 0.2)',
    borderColor: 'rgb(241, 90, 34)',
    borderWidth: 1,
    pointBackgroundColor: 'rgb(241, 90, 34)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(241, 90, 34)'
  }, {
    label: 'You',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    fill: true,
    backgroundColor: 'rgba(241, 90, 34, 0.2)',
    borderColor: 'rgb(241, 90, 34)',
    borderWidth: 1,
    pointBackgroundColor: 'rgb(241, 90, 34)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(241, 90, 34)'
  }]
}
