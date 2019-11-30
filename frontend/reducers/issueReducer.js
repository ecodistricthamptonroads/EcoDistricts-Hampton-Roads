import { ADD_ISSUE, DELETE_ISSUE } from '../actions/types';

const issueInitial = {
  issues: [
    {
      name: 'William Zheng',
      email: 'BillyTheKid6@gmail.com',
      title: 'Broken Mailbox',
      type: 'Personal',
      description: 'Someone hit my mailbox and did not leave a message',
      date: new Date().toLocaleString()
    },
    {
      name: 'Garry Harris',
      email: 'gharris@csc-atl.org',
      title: 'Website',
      type: 'Community',
      description: 'Need to make a website for Eco District Hampton Roads',
      date: new Date().toLocaleString()
    },
    {
      name: 'Test Name',
      email: 'Test@test.com',
      title: 'Test',
      type: 'Community',
      description: 'Test post please ignore',
      date: new Date().toLocaleString()
    }
  ]
};

export default function(state = issueInitial, action) {
  switch (action.type) {
    case ADD_ISSUE:
      return { ...state, issues: [...state.issues, action.payload] };
    case DELETE_ISSUE:
      return {
        ...state,
        issues: state.issues.filter(issue => issue.name !== action.payload.name)
      };
    default:
      return state;
  }
}
