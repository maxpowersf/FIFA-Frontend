import { Confederation } from '../models';

export const MANAGEMENT_FEATURE = 'management';

export interface ManagementState {
  confederations: Confederation[];
  teams: any;
  players: any;
  tournaments: any;
  matchTypes: any;
  tournamentTypes: any;
  selectedItem?: number;
  isLoading: boolean;
}

export const initialState: ManagementState = {
  confederations: [],
  teams: {},
  players: null,
  tournaments: null,
  matchTypes: null,
  tournamentTypes: null,
  selectedItem: null,
  isLoading: false,
};
