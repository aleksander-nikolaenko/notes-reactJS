import { Categories, Note } from './types';

export const CATEGORY_LIST: Categories[] = ['Task', 'Random Thought', 'Idea'];
export const ARCHIVED_DATA: Note[] | [] = [];
export const ACTIVE_DATA: Note[] | [] = [
  {
    id: '1',
    name: 'Shopping list dhfkj fhdsjfh shfdljslfk disflsdh dslfhlsdh idsh',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'Tomatos, bread, butter',
    dates: '',
  },
  {
    id: '2',
    name: 'The teory of... ',
    created: 'April 27, 2021',
    category: 'Random Thought',
    content: 'The evolution...',
    dates: '',
  },
  {
    id: '3',
    name: 'New Feature ',
    created: 'May 05, 2021',
    category: 'Idea',
    content: 'Implement new feature 10/5/2021, but must be moved to 15/05/2021',
    dates: '10/5/2021, 15/05/2021',
  },
  {
    id: '4',
    name: 'Shopping list',
    created: 'May 06, 2021',
    category: 'Task',
    content: 'Tomatos, bread, butter',
    dates: '',
  },
  {
    id: '5',
    name: 'The teory of... ',
    created: 'May 08, 2021',
    category: 'Random Thought',
    content: 'The evolution...',
    dates: '',
  },
  {
    id: '6',
    name: 'Shopping list',
    created: 'May 10, 2021',
    category: 'Task',
    content: 'Tomatos, bread, butter',
    dates: '',
  },
  {
    id: '7',
    name: 'New Feature ',
    created: 'May 15, 2021',
    category: 'Task',
    content: 'Implement new feature 10/5/2021, but must be moved to 15/05/2021',
    dates: '10/5/2021, 15/05/2021',
  },
];
