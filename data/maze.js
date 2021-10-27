const getRandomInt = (value) => {
  return Math.floor(Math.random() * value);
};

const getRandomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const createFirstLine = (column) => {
  const array = [];
  for (let index = 0; index < column; index++) {
    const cell = {
      rightLine: 0,
      bottomLine: 0,
      _set: index,
      id: index,
    };
    array.push(cell);
  }
  return array;
};

const setUniqueMultiplicity = (array) => {
  const multiplicity = new Set();
  const multiplicityOfNull = new Set();
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element._set) {
      multiplicity.add(element._set);
    }
  }
  for (let index = 0; index < array.length; index++) {
    if (!multiplicity.has(index)) {
      multiplicityOfNull.add(index);
    }
  }
  const freeSet = Array.from(multiplicityOfNull);

  for (let index = 0; index < array.length; index++) {
    const cell = array[index];
    if (!cell._set) {
      cell._set = freeSet[0];
      freeSet.shift();
    }
  }
};

const createAndCheckRightLine = (array) => {
  let counter = 0;

  array.forEach((element, index) => {
    element.rightLine = getRandomInt(2);
    if (index == array.length - 1) element.rightLine = 1;
  });

  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (!element.rightLine) {
      counter += 1;
    }
    if (element.rightLine) {
      let multiplicityOfCells = array.slice(index - counter, index + 1);
      multiplicityOfCells.forEach((element) => {
        element._set = index - counter;
      });
      counter = 0;
    }
  }
};

const createAndCheckBottomLine = (array) => {
  let count = 0;
  array.forEach((element) => {
    element.bottomLine = getRandomInt(2);
  });

  for (let index = 0; index < array.length; index++) {
    count++;
    let cell = array[index];
    let nextCell = array[index + 1];
    //if first cell
    if (index === 0 && cell._set != nextCell._set) {
      let multiplicity = array.slice(index, index + 1);
      multiplicity[0].bottomLine = 0;
    }
    //if last cell
    if (index + 1 === array.length) {
      let multiplicity = array.slice(index - count + 1);

      if (multiplicity.length === 1) multiplicity[0].bottomLine = 0;
      const escape = multiplicity.find((element) => element.bottomLine === 0);
      if (escape === undefined) multiplicity[0].bottomLine = 0;
      count = 0;
    }
    //if not last cell & not first
    if (index > 0 && index + 1 < array.length && cell._set != nextCell._set) {
      let multiplicity = array.slice(index - count + 1, index + 1);

      if (multiplicity.length === 1) multiplicity[0].bottomLine = 0;
      const escape = multiplicity.find((element) => element.bottomLine === 0);
      if (escape === undefined) multiplicity[0].bottomLine = 0;
      count = 0;
    }
  }
};

const copyArray = (array, maze) => {
  const newRow = array.map((cell) => ({ ...cell }));
  maze.push(newRow);
};

const deleteRightLine = (array) => {
  array.forEach((element) => {
    element.rightLine = 0;
  });
  return array;
};

const checkBottomLineForMultiplicity = (array) => {
  array.forEach((cell) => {
    if (cell.bottomLine) {
      cell._set = null;
    }
  });
  return array;
};

const deleteBottomLine = (array) => {
  array.forEach((cell) => {
    cell.bottomLine = 0;
  });
  return array;
};

const addBottomLine = (array) => {
  array.forEach((cell) => {
    cell.bottomLine = 1;
  });
  return [array];
};

const destroyRight = (array, maze) => {
  for (let index = 0; index < array.length; index++) {
    const cell = array[index];
    let nextCell = array[index + 1];
    if (index === array.length - 1) {
      nextCell = cell;
    }
    if (cell._set != nextCell._set) {
      cell.rightLine = 0;
    }
  }

  array.forEach((cell) => {
    maze.push(cell);
  });
};

const column = getRandomInterval(10, 20);
const row = getRandomInterval(10, 20);
const maze = (column, row) => {
  const maze = [];
  const rowLine = createFirstLine(column);
  for (let index = 0; index < row - 1; index++) {
    setUniqueMultiplicity(rowLine);
    createAndCheckRightLine(rowLine);
    createAndCheckBottomLine(rowLine);
    copyArray(rowLine, maze);
    deleteRightLine(rowLine);
    checkBottomLineForMultiplicity(rowLine);
    deleteBottomLine(rowLine);
  }
  setUniqueMultiplicity(rowLine);
  const lastLine = addBottomLine(rowLine);
  destroyRight(lastLine, maze);
  return maze;
};

maze(column, row);

export {maze};
