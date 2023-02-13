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
    ['Tries Once', 'Intermitent Attempts or Unclear Goals', 'Adopts Multiple Strategies with Clear Goals', 'Adopts Resourceful Strategies with Clear Goals', 'Succeeds Despite the Odds'],
    ['Understands Context and User Needs', 'Engages with Business and User Research', 'Translates Business Context and Use Need to Developers', 'Influences a Service Area', 'Impacts Business Practices and End Users'],
    ['Individuals', 'Team', 'Multiple Teams', 'Company', 'Community'],
    ['Assists', 'Leads', 'Creates', 'Influences', 'Impacts'],
    ['Awareness', 'Engages', 'Recognised', 'Trusted', 'Partner'],
    
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
    backgroundColor: 'rgba(34, 139, 34, 0.2)',
    borderColor: 'rgb(34, 139, 34)',
    borderWidth: 1,
    pointBackgroundColor: 'rgb(34, 139, 34)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(34, 139, 34)'
  }]
}
