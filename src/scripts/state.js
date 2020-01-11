export default [
  {
    label: 'Home',
    data: {
      started: false
    }
  },
  {
    label: 'Sun',
    data: {
      values: ['high', 'low', 'no'],
      currentValue: null
    }
  },
  {
    label: 'Water',
    data: {
      values: ['daily', 'regularly', 'rarely'],
      currentValue: null
    }
  },
  {
    label: 'Pets',
    data: {
      values: [false, true],
      currentValue: null
    }
  },
  {
    label: 'Form',
    data: {
      fullname: '',
      email: ''
    },
    finished: false
  }
]
