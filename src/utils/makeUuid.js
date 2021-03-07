const uuid4 = require('uuid4');

const makeUuid = () => {
  const id = uuid4();
  return uuid4.valid(id);
};

module.exports = makeUuid;