// @flow

const defaultKeys = ['children', 'className', 'style'];

const excludeProps = (props: Object = {}, keys: Array<string> = []): Object => {
  const res = {};
  const excludedKeys = [...defaultKeys, ...keys];

  Object.keys(props).forEach((item) => {
    if (!excludedKeys.includes(item)) res[item] = props[item];
  });

  return res;
};

export default excludeProps;
