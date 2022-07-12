export class Validator {
  validateUsername(userName) {
    console.log(/\w-/.test(userName));
    console.log(/^([^\d\-_])\d{4}([^\d\-_])$/.test(userName));
  }
}


