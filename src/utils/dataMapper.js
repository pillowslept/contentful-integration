const productPageComponents = [`accordion`, `headline`, `paragraph`, `product`];

const mapComponent = ({ fields, sys }) => {
  const contentType = sys.contentType.sys.id;

  return {
    ...fields,
    contentType,
    items: fields.items ? fields.items.map(({ fields: itemFields }) => ({ ...itemFields })) : [],
  }
};

const mapComponents = (components) => {
  return components.map((component) => (mapComponent(component)));
};

export const mapSimplePageData = (data) => {
  if (!data || !data.length) {
    return { components: [] };
  }

  const {
    fields,
    sys,
  } = data[0];

  return {
    ...fields,
    components: mapComponents(fields.components),
    contentType: sys.contentType.sys.id,
  };
};

export const mapProductPageData = (data) => {
  if (!data || !data.length) {
    return {};
  }

  const {
    fields,
    sys,
  } = data[0];

  const components = productPageComponents.reduce((component, actual) => {
    component[actual] = mapComponent(fields[actual]);

    return component;
  }, {});

  return {
    ...components,
    contentType: sys.contentType.sys.id,
  };
};
