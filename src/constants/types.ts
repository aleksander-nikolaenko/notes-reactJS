export type Month =
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

export type Day = `${number}`;

export type Year = `${number}`;

export type DateFormat = `${Month} ${Day}, ${Year}`;

export type Categories = 'Task' | 'Random Thought' | 'Idea';

export type NotesType = 'activeNotes' | 'archivedNotes';

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
