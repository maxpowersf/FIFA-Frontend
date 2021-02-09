export class Report {
    name: string;
    title: string;
    subtitle: string;
    url: string;
}

export const ReportsList = [
    { name: 'Winning', title: 'Winning streaks', subtitle: 'List of longest winning streaks', url: 'winning' },
    { name: 'Unbeaten', title: 'Unbeaten streaks', subtitle: 'List of longest streaks without losing', url: 'unbeaten' },
    { name: 'Losing', title: 'Losing streaks', subtitle: 'List of longest losing streaks', url: 'losing' },
    { name: 'Winningless', title: 'Winningless streaks', subtitle: 'List of longest streaks without winning', url: 'winningless' },
    { name: 'CleanSheets', title: 'Clean Sheets', subtitle: 'List of longest streaks without allowing goals', url: 'cleansheets' },
    { name: 'Scoreless', title: 'Scoreless streaks', subtitle: 'List of longest streaks without scoring', url: 'scoreless' },
    { name: 'Margin', title: 'Biggest victory margin', subtitle: 'List of matches with the biggest victory margin', url: 'margin' },
    { name: 'Goals', title: 'Most goals in a match', subtitle: 'List of matches with most goals scored', url: 'goals' }
]