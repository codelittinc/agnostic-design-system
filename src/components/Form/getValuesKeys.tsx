import { isEditable, isButton } from './componentVerification';

const getValuesKeys = child => {
  if (
    !(isEditable(child) || isButton(child)) &&
    (!child.props.children || typeof child.props.children === 'string')
  ) {
    return null;
  }

  if (isEditable(child)) {
    const { name } = child.props;
    return name;
  } else {
    const { children } = child.props;
    if (children) {
      return [children].flat().map(getValuesKeys).flat();
    }
  }
};

export default children =>
  [children]
    .flat()
    .map(getValuesKeys)
    .flat()
    .filter(v => v);
