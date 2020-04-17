let __value = 42;
const isomorphicFetch = jest.fn(() => __value);
isomorphicFetch.__set_value = v => __value = v;
export default isomorphicFetch;
