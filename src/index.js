export class Validator {
  validateUsername(userName) {
    console.log(/^([^\d\-_])([a-zA-z-_])*[^\d\d\d]([^\d\-_])$/.test(userName));
  }
}


