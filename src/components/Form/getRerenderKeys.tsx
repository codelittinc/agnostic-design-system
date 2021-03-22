export default (children, values, fieldsValidationState) => {
  const ids = children.map(child => child.props.id);
  const v = {};
  ids.forEach(c => {
    v[c] = values[c] || '';
  });

  const names = children.map(child => child.props.name);
  const n = {};
  names.forEach(c => {
    n[c] = fieldsValidationState[c];
  });

  return [...ids, ...Object.values(v), ...Object.values(n)];
};
