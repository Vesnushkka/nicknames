import { Validator } from "../index.js";

test("checkUserName", () => {
    let userName = new Validator("Ivan");
    const result = userName.validateUsername(userName);
    expect(result).toReturn(false);
});
