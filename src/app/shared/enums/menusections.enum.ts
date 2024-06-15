import { MenuSection } from '@shared/models';

export const initialMenuSections: MenuSection[] = [
  {
    title: 'Management 2.0',
    menuItems: [
      {
        url: 'management/confederations',
        title: 'Confederations',
        icon: 'work',
        order: 0,
      },
    ],
  },
  {
    title: 'Statistics',
    menuItems: [
      {
        url: 'rankings',
        title: 'Ranking',
        icon: 'table_chart',
        order: 10,
      },
      {
        url: 'teamstats',
        title: 'All Time Standings',
        icon: 'format_list_numbered',
        order: 20,
      },
      {
        url: 'head2head',
        title: 'Head to Head',
        icon: 'sports_hockey',
        order: 30,
      },
      {
        url: 'matches',
        title: 'Matches',
        icon: 'sports_soccer',
        order: 40,
      },
      {
        url: 'tournaments',
        title: 'Tournaments',
        icon: 'emoji_events',
        order: 50,
      },
      {
        url: 'tournamenttypes',
        title: 'Tournament Types',
        icon: 'category',
        order: 60,
      },
      {
        url: 'reports',
        title: 'Stats',
        icon: 'query_stats',
        order: 70,
      },
    ],
  },
  {
    title: 'Management',
    order: 20,
    menuItems: [
      {
        url: 'teams',
        title: 'Teams',
        icon: 'groups',
        order: 10,
      },
      {
        url: 'players',
        title: 'Players',
        icon: 'people',
        order: 20,
      },
      {
        url: 'confederations',
        title: 'Confederations',
        icon: 'public',
        order: 30,
      },
      {
        url: 'matchtypes',
        title: 'Match Types',
        icon: 'build',
        order: 40,
      },
    ],
  },
];
