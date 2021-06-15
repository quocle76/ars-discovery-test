import { isString } from 'lodash';

class LocalStorageUtil {
  static getItemByKey(key) {
    if (!key) return null;

    return process.browser ? localStorage.getItem(key) : '';
  }

  static setNewItem(key, value) {
    const currentValue = isString(value) ? value : JSON.stringify(value);

    try {
      localStorage.setItem(key, currentValue);
      return true;
    } catch (error) {
      return false;
    }
  }

  static clearAllItem() {
    localStorage.clear();
  }

  static clearItem(key) {
    localStorage.removeItem(key);
  }
}

export default LocalStorageUtil;
