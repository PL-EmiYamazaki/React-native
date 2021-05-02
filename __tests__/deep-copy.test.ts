import deepCopy from "./deep-copy";

const deepObject = {
    foo: 1,
    bar: {
        foo: {
            foo: [0, 1, 2],
            bar: {
                foo: {
                    foo: true,
                    bar: ['foo', 'bar'],
                },
            },
        },
    },
}


describe('deepCopy', () => {
    test('成功', () => {
        expect(deepCopy(deepObject)).toEqual(deepObject);
    });
    test('失敗', () => {
        expect(deepCopy(deepObject)).not.toBe(deepObject);
    });
});