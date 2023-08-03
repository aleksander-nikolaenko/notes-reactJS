type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

type Day = `${number}` | `${number}${number}`;

type Year = `${number}${number}${number}${number}`;

type DateFormat = `${Month} ${Day}, ${Year}`;

export type Categories = 'Task' | 'Random Thought' | 'Idea';

export interface Icons {
  [key: string]: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export interface Note {
  id: string;
  name: string;
  created: DateFormat;
  category: Categories;
  content: string;
  dates: string;
}
