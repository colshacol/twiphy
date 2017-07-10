const chatContainerSelector = "#right_col.column";

export const createDomNode = (node: string) => {
  return document.createRange().createContextualFragment(node);
};

type Options = {
  log: boolean,
};

export const getElement = (selector: string, options?: Options) => {
  return document.querySelector(selector);
};

type MultiOptions = {
  start: Number,
  end: Number,
  log: boolean,
};

export const getElements = (selector: string, options?: MultiOptions) => {
  return Array.from(document.querySelectorAll(selector));
};
