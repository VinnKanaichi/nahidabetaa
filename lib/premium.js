const fs = require('fs-extra');
const toMs = require('ms');

/**
 * Add premium user.
 * @param {String} userId
 * @param {String} expired
 * @param {String} name
 * @param {Object} _dir
 */
const addPremiumUser = (userId, expired, name, _dir) => {
  let position = null;
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === userId) {
      position = i;
    }
  });

  if (position !== null) {
    _dir[position].expired += Date.now() + toMs(expired);
    _dir[position].name = name;
  } else {
    const obj = { id: userId, expired: Date.now() + toMs(expired), name: name };
    _dir.push(obj);
  }
};

const delPremiumUser = (userId, _data) => {
  let position = null;
  Object.keys(_data).forEach((i) => {
    if (_data[i].id === userId) {
      position = i;
    }
  });
  if (position !== null) {
    _data.splice(position, 1);
  }
  return true;
};

/**
 * Get premium user position.
 * @param {String} userId
 * @param {Object} _dir
 * @returns {Number}
 */
const getPremiumPosition = (userId, _dir) => {
  let position = null;
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === userId) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

/**
 * Get premium user expire.
 * @param {String} userId
 * @param {Object} _dir
 * @returns {Number}
 */
const getPremiumExpired = (userId, _dir) => {
  let position = null;
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === userId) {
      position = i;
    }
  });
  if (position !== null) {
    return _dir[position].expired;
  }
};

/**
 * Check user is premium.
 * @param {String} userId
 * @param {Object} _dir
 * @returns {Boolean}
 */
const checkPremiumUser = (userId, _dir) => {
  let status = false;
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === userId) {
      status = true;
    }
  });
  return status;
};

/**
 * Constantly checking premium.
 * @param {Object} _dir
 */
const expiredCheck = (_dir) => {
  setInterval(() => {
    let position = null;
    Object.keys(_dir).forEach((i) => {
      if (Date.now() >= _dir[i].expired) {
        position = i;
      }
    });
    if (position !== null) {
      console.log(`Premium expired: ${_dir[position].id}`);
      _dir.splice(position, 1);
    }
  }, 1000);
};

/**
 * Get all premium user ID.
 * @param {Object} _dir
 * @returns {String[]}
 */
const getAllPremiumUser = (_dir) => {
  const array = [];
  Object.keys(_dir).forEach((i) => {
    array.push(_dir[i].id);
  });
  return array;
};

module.exports = {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredCheck,
  checkPremiumUser,
  getAllPremiumUser,
  delPremiumUser,
};

const path = require('path');
const chalk = require('chalk');
const file = __filename;

fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(
    chalk.bgGreen(chalk.black("[  UPDATE ]")),
    chalk.white(`${file}`)
  );
  require(file);
});





