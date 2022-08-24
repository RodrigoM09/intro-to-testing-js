// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when the function is true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when the function is false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed "5"', function() {
        expect(isFive(5)).toBe(true);
    });
});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean', function() {
        expect(typeof isEven(2)).toBe("boolean");
    });
    it('should return true when passed and even number', function() {
        expect(isEven(2)).toBe(true);
    });
});

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe("function");
    });
    it('should return a boolean', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when passed a vowel', function() {
        expect(isVowel("a","e","i","o","u","A","E","I","O","U")).toBe(true);
    });
    it('should return false when passed a "y"', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed a 4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed true', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed true', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed "banana"', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when passed empty', function() {
        expect(isVowel()).toBe(false);
    });
});