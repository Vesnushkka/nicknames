import { Validator } from "../index.js";

test("checkFirstUserName", () => {
    let userName = new Validator("Ivan");
    const result = userName.validateUsername(userName);
    expect(result).toReturn(true);
    expect(result).toReturn(false);
});


test("checkSecondUserName", () => {
    let user2Name = new Validator("Iva_123n");
    const result2 = user2Name.validateUsername(user2Name);
    expect(result2).toReturn(true, false);
});