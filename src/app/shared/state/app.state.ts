import { Menu } from '@shared/models';

export interface FIFAState {
  menu: Menu;
  displayedColumns: string[];
  isEditing: boolean;
}

export const initialState: FIFAState = {
  menu: { isMenuLoading: false },
  displayedColumns: [],
  isEditing: false,
};

export const FIFA_FEATURE = 'fifa';
