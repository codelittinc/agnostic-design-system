export default (editables, values) => {
  const initialValidationState = {};
  editables.forEach(child => {
    const { name, required } = child.props;
    if (required) {
      initialValidationState[name] = !!values[name];
    }
  });

  return initialValidationState;
};
