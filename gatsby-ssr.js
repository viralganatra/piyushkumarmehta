exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();

  // Remove meta generator tag
  const newHeadComponents = headComponents.filter((component) => {
    if (component.type === 'meta' && component.props.name === 'generator') {
      return false;
    }

    return true;
  });

  replaceHeadComponents(newHeadComponents);
};
