export class Report {
  name: string;
  title: string;
  subtitle: string;
  url: string;
}

export const ReportsList = [
  {
    name: 'Winning',
    title: 'Winning streaks',
    subtitle: 'List of longest winning streaks',
    url: 'winning',
    id: 1,
  },
  {
    name: 'Unbeaten',
    title: 'Unbeaten streaks',
    subtitle: 'List of longest streaks without losing',
    url: 'unbeaten',
    id: 2,
  },
  {
    name: 'Losing',
    title: 'Losing streaks',
    subtitle: 'List of longest losing streaks',
    url: 'losing',
    id: 3,
  },
  {
    name: 'Winningless',
    title: 'Winningless streaks',
    subtitle: 'List of longest streaks without winning',
    url: 'winningless',
    id: 4,
  },
  {
    name: 'ScoringGoals',
    title: 'Games scoring a goal',
    subtitle: 'List of longest streaks scoring a goal',
    url: 'scoringgoals',
    id: 7,
  },
  {
    name: 'Scoreless',
    title: 'Scoreless streaks',
    subtitle: 'List of longest streaks without scoring',
    url: 'scoreless',
    id: 6,
  },
  {
    name: 'CleanSheets',
    title: 'Clean Sheets',
    subtitle: 'List of longest streaks without allowing goals',
    url: 'cleansheets',
    id: 5,
  },
  {
    name: 'ConcedingGoals',
    title: 'Games conceding a goal',
    subtitle: 'List of longest streaks conceding a goal',
    url: 'concedinggoals',
    id: 8,
  },
  {
    name: 'Margin',
    title: 'Biggest victory margin',
    subtitle: 'List of matches with the biggest victory margin',
    url: 'margin',
  },
  {
    name: 'Goals',
    title: 'Most goals in a match',
    subtitle: 'List of matches with most goals scored',
    url: 'goals',
  },
];
