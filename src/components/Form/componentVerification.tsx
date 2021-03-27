import { SUBMIT_TYPE } from '../Button';

export const isEditable = component => {
  return !!component?.props?.name;
};

export const isButton = component => {
  return component?.props?.type === SUBMIT_TYPE;
};
