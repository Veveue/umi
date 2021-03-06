import assert from 'assert';
import { isPlainObject } from 'lodash';

export default function() {
  return {
    name: 'alias',
    validate(val) {
      assert(isPlainObject(val), `The alias config must be Plain Object, but got ${val}`);
    },
  };
}
