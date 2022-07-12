export class Validator {
  validateUsername(userName) {
    /([a-zA-Z0-9_])*/.test(userName);
    /^([^\d\-_])\d{4}([^\d\-_])$/.test(userName);
  }
}


