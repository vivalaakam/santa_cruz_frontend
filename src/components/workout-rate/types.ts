import { IconButtonProps } from '../ui';

export type WorkoutRateSubmit = {
  rate: number;
  comment: string;
};

export type WorkoutRateProps = {
  onSubmit: (params: WorkoutRateSubmit) => void;
};

export type WorkoutRateRef = {
  showModal: () => void;
  hideModal: () => void;
};

export type RateButtonProps = Omit<IconButtonProps, 'onClick'> & {
  index: number | string;
  active: number | string;
  onClick: (index: number) => void;
};
