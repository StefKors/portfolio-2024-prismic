export const ICON_ROTATION = [-3.4, 2.1, -6.2, 2, -4.5, 1.7, -3.4, 2.1, -6.2];

export const APP_SCREEN_ROTATION = [
  -3.4, 2.1, -6.2, 2, -4.5, 1.7, -3.4, 2.1, 6.2,
];

export const getRotation = (index: number, rotations: number[]) => {
  return rotations?.[index % 10] ?? 1.23;
};
