import { SUBMIT_TYPE } from '../Button';

export const isEditable = component => {
  const { name } = component.props;
  return !!name;
};

export const isButton = component => {
  return component.props.type === SUBMIT_TYPE;
};
