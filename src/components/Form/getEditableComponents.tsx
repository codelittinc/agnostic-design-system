import { isEditable } from './componentVerification';

const getEditableComponents = child => {
  const editable = isEditable(child);
  if (editable) {
    return child;
  }

  const children = child?.props.children;

  if (children && typeof children !== 'string') {
    const { children } = child.props;
    if (children) {
      return [children].flat().map(getEditableComponents).flat();
    }
  }
};

export default children =>
  [children]
    .flat()
    .map(getEditableComponents)
    .flat()
    .filter(v => v);
