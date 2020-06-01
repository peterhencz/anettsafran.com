const doSomething = (what, cl) => {
  const element = document.createElement(what);
  element.classList.add(`${cl}`);
  return element;
};

export { doSomething };
