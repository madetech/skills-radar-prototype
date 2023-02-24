import {Chart, Filler} from 'chart.js'
Chart.register(Filler)

export const Data = {
  labels: [
    'Leadership & Strategy',
    'Communication',
    'Software Development',
    'Cloud',
    'Security',
    'Integrations',
    'Methodology',
    'Facilitation',
    'Agile Practices',
    'Growth Mindset',
    'Resilience',
    'Business',
    'Influencing',
    'Presenting',
    'Stakeholders'
  ],
  sliderPoints: [
    ['Follow', 'Apply', 'Contribute', 'Define', 'Inspire'],
    ['Peers', 'CoP', 'Multidiscipliary', 'Business', 'Exec'],
    ['Adopts', 'Specialises', 'Evangelises', 'Masters', 'Creates'],
    ['Adopts', 'Specialises', 'Evangelises', 'Masters', 'Creates'],
    ['Adopts', 'Specialises', 'Evangelises', 'Masters', 'Creates'],
    ['Apply Within a Service', 'Apply Within a Business Domain', 'Apply External', 'Define Strategy', 'Transform an Enterprise'],
    ['Follow', 'Apply', 'Evangelises', 'Masters', 'Creates'],
    ['Assist Workshops', 'Leads Workshops', 'Creates New Workshops', 'Drives Team Ways of Working', 'Impacts Business Ways of Working'],
    ['Follow', 'Apply', 'Evangelises', 'Masters', 'Creates'],
    ['Self Improver', 'Growth Mindset', 'Teaches Others', 'Mentors Others', 'Impacts Large Groups'],
    ['delivers expected outcomes', 'delivers challenging outcomes', 'delivers challenging outcomes at pace', 'adapts and learns from challenges', 'succeeds despite the odds'],
    ['Understands Context and User Needs', 'Engages with Business and User Research', 'Translates Business Context and Useir Need to Developers', 'Influences a Service Area', 'Impacts Business Practices and End Users'],
    ['Individuals', 'Team', 'Multiple Teams', 'Company', 'Community'],
    ['Assists', 'Leads', 'Creates', 'Influences', 'Impacts'],
    ['Awareness', 'Engages', 'Recognised', 'Trusted', 'Partner'],
    
  ],
  datasets: [{
    label: 'Senior',
    data: [3, 2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2],
    fill: true,
    hidden: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    borderWidth: 2,
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'Lead',
    data: [3, 4, 4, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3],
    fill: true,
    hidden: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    borderWidth: 2,
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }, {
    label: 'Principal',
    data: [4, 4, 3, 3, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4],
    fill: true,
    hidden: true,
    backgroundColor: 'rgba(241, 90, 34, 0.2)',
    borderColor: 'rgb(241, 90, 34)',
    borderWidth: 2,
    pointBackgroundColor: 'rgb(241, 90, 34)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(241, 90, 34)'
  }, {
    label: 'You',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    fill: true,
    backgroundColor: 'rgba(0, 172, 50, 0.5)',
    borderColor: 'rgb(0, 172, 50)',
    borderWidth: 3,
    pointBackgroundColor: 'rgb(0, 172, 50)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(0, 172, 50)'
  }]
}
