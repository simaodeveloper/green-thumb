export default [
  {
    label: 'Home',
    state: {
      started: false
    }
  },
  {
    label: 'Sun',
    state: {
      values: ['high', 'low', 'no'],
      currentValue: null
    }
  },
  {
    label: 'Water',
    state: {
      values: ['daily', 'regularly', 'rarely'],
      currentValue: null
    }
  },
  {
    label: 'Pets',
    state: {
      values: [false, true],
      currentValue: null
    }
  },
  {
    label: 'Form',
    state: {
      fullname: '',
      email: ''
    },
    finished: false
  }
]
