const lib = require("../main");

describe("doubleANumber", () => {
  it("Should return a duplicate number", () => {
    //Testes que retornam sucesso

    const result = lib.doubleANumber(-1);
    expect(result).toBe(-2);

    const result1 = lib.doubleANumber(2);
    expect(result1).toEqual(4);
  });

  it("Should return failure", () => {
    //Testes que retornam falha

    const result = lib.doubleANumber(-1);
    expect(result).toBe(2);

    const result1 = lib.doubleANumber(2);
    expect(result1).toBe(6);
  });
});

describe("createFullName", () => {
  it("Should return a concatenation of the two names", () => {
    //Testes que retornam sucesso

    const result = lib.createFullName("Leticia", "Britto");
    expect(result).toBe("Leticia Britto");

    const result1 = lib.createFullName("Leticia", "Britto");
    expect(result1).toMatch(/Leticia Britto/);
  });

  it("Should return failure", () => {
    //Testes que retornam falha

    const result = lib.createFullName("Leticia", "Britto");
    expect(result).toBe("Leticia Guimarães");

    const result1 = lib.createFullName("Leticia", "Britto");
    expect(result1).toEqual("LeticiaBritto");
  });
});

describe("calculateTheLenghtOfAString2", () => {
  it("Should return a length of a string", () => {
    //Testes que retornam sucesso

    const result = lib.calculateTheLenghtOfAString2("string");
    expect(result).toBe(6);

    const result1 = lib.calculateTheLenghtOfAString2("lenght");
    expect(result1).toEqual(6);
  });

  it("Should return failure", () => {
    //Testes que retornam falha

    const result = lib.calculateTheLenghtOfAString2("string");
    expect(result).toBe("6");

    const result1 = lib.calculateTheLenghtOfAString2("lenght");
    expect(result1).toEqual(-6);
  });
});

describe("numbersArrayIntoString", () => {
  it("Should return 1 point every three strings place", () => {
    //Testes que retornam sucesso

    const result = lib.numbersArrayIntoString([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result).toBe("123.456.789");

    const result1 = lib.numbersArrayIntoString([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    expect(result1).toBe("123.456.789.0");
  });

  it("Should return failure", () => {
    //Testes que retornam falha

    const result = lib.numbersArrayIntoString([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result).toBe("123.456.789.");

    const result1 = lib.numbersArrayIntoString([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    expect(result1).toBe("123.456.789-0");
  });
});

describe("addNewLanguage", () => {
  //Testes que retornam sucesso

  it("Should return a array with old and new languages", () => {
    const result = lib.addNewLanguage(lib.programming, "C");
    expect(result).toMatchObject(lib.programming);
  });

  it("should return an object with language array bigger than it was before", () => {
    const initialLength = lib.programming.languages.length;
    const result = lib.addNewLanguage(lib.programming, "C");
    expect(result.languages.length).toBeGreaterThan(initialLength);
  });

  //Teste que retorna falha

  it("Should return failure", () => {
    const obj = {
      languages: [],
    };
    const result = ds.addNewLanguage(obj, "Java");
    expect(result).toMatchObject({
      languages: expect.arrayContaining(["Java"]),
    });
  });
});

describe("votersResult", () => {
  it("Should a return is a object", () => {
    const result = lib.votersResult(lib.voters);
    expect(typeof result).toBe("object");
  });

  it("Should a return is the number of voters", () => {
    const result = lib.votersResult(lib.voters);
    expect(result).toMatchObject({
      numYoungVotes: 1,
      numYoungPeople: 4,
      numMidVotesPeople: 3,
      numMidsPeople: 4,
      numOldVotesPeople: 3,
      numOldsPeople: 4,
    });
  });
});
