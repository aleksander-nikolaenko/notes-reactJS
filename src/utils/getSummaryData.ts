import { Categories, Note, SummaryData } from 'constants/types';
import { generateUuid } from './generateUuid';

export const getSummaryData = (
  activeNotes: Note[],
  archivedNotes: Note[]
): SummaryData[] => {
  const activeNotesCategory: Record<Categories, number> = activeNotes.reduce(
    (acc: Record<string, number>, obj) => {
      const key = obj.category;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    },
    {}
  );

  const archivedNotesCategory: Record<Categories, number> =
    archivedNotes.reduce((acc: Record<string, number>, obj) => {
      const key = obj.category;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

  const uniqueCategoryArr: Categories[] = [
    ...(Object.keys(activeNotesCategory) as Categories[]),
    ...(Object.keys(archivedNotesCategory) as Categories[]),
  ];

  const uniqueObjectsWithCount: SummaryData[] = uniqueCategoryArr.map(
    category => ({
      category,
      active: activeNotesCategory[category] || 0,
      archived: archivedNotesCategory[category] || 0,
      id: generateUuid(),
    })
  );

  return uniqueObjectsWithCount;
};
