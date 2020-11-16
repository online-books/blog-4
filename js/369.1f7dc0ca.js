(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{1059:function(n,e){n.exports="### Jest 与 ReactTestingLibrary\n\n### 一些配置\n\n`jest.config.js` 的一些常见配置属性如下:\n\n```js\nmodule.exports = {\n  // 可以指定测试环境\n  testEnviroment: 'jest-environment-node' | 'jest-enviroment-jsdom',\n  // 指定模块加载目录\n  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared']\n  // identity-obj-proxy 支持在 jest 中引入 css, 同时支持 css 的模块化\n  moduleNameMapper: {\n    \"\\\\.(css|less|scss)$\": \"identity-obj-proxy\",\n  },\n  // before jest is loaded(不依赖 jest)\n  setupFiles: []\n  // after jest is loaded(依赖 jest)\n  setupTestFrameworkScriptFile: require.resolve('./test/setup-tests.js')\n  // 测试覆盖率收集目录\n  collectCoverageFrom: ['src/**/*.js']\n  // 指定测试覆盖率需要需要达到的阈值\n  coverageThreshold: {\n    global: {\n      statements: 80,\n      branches: 80,\n      lines: 80,\n      functions: 80,\n    }\n  }\n  // 增强 watch 模式体验: $ npm install --save-dev jest-watch-typeahead\n  watchPlugins: [\n    'jest-watch-typeahead/filename',\n    'jest-watch-typeahead/testname',\n  ]\n}\n```\n\n> [jest-emotion](https://github.com/emotion-js/emotion): css 中具体样式发生更改便重新生成 snapshot。\n\n### jest-dom\n\n`jest-dom` 封装了测试 dom 的方法。报错的信息可以更加准确。\n\n```js\nimport 'jest-dom/extend-expect'\n```\n\n此时可以使用如下方法:\n\n```js\nexpect(input).toHavaAttribute('type', 'number') // 是否有某个属性\nexpect(..).toHaveTextContent()                  // 是否有某个内容\n```\n\n### dom-test-library\n\n`dom-test-library` 的优势。\n\n* 增加了更多的操作, 比如根据 label 找对应的节点;\n* 支持正则匹配;\n\n```js\nimport { queries } from 'dom-testing-library'\n```\n\n### @testing-library/react 的使用\n\n`@testing-library/react` 在 `dom-test-library` 的基础上查找 React 组件。\n\n```js\nimport 'react-testing-library/cleanup-after-each' // 自动完成每次的回收\n```\n\n* 可以使用 `react-testing-library` 中的 debug 函数来对子组件进行断点调试。\n\n```js\ntest('...', () => {\n  const { debug } = render(<Component />)\n  debug()\n  // or\n  debug(<SomeComponent />)\n})\n```\n\n* Test React Component Event Handlers with fireEvent from react-testing-library\n\n```js\nimport { fireEvent } from 'react-testing-library'\n\nfireEvent.change()\n```\n\n* 几种断言方式\n\n* 方式一: `expect(container).toHaveTextContent(/the number is invalid/i)`\n* 方式二: `getByText(/the number is invalid/i)`\n* 方式三: `expect(getByText(/the number is invalid/i)).toBeTruthy()`\n* 方式四: 配合 `data-testid` 属性可以使用 `expect(getByTestId('...')).toHaveTextContent(/the number is invalid/i)`\n\n* Test prop updates with react-testing-library\n\n```js\ntest('...', () => {\n  const { rerender } = render(<Component />)\n  rerender(<SomeComponent />)\n})\n```\n\n* `getByLabelText`       (form inputs)\n* `getByPlaceholderText` (only if your input doesn’t have a label — less accessible!)\n* `getByText`            (buttons and headers)\n* `getByAltText`         (images)\n* `getByTestId`          (use this for things like dynamic text or otherwise odd elements you want to test)\n\n上述每一个方法都有对应的 `queryByFoo` 替代方法。以 `query` 开头的方法找不到的话会返回 null, 以 `get` 开头的方法找不到的话会 throw。\n\n如果这些都不会让你确切地知道你在找什么, render 方法也会返回映射到 container 属性的 DOM 元素，所以也可以像 `container.querySelector('body #root')` 一样使用它。\n\n* Mock HTTP Requests with jest.mock in React Component Tests\n\n```js\nimport { render, fireEvent, wait } from 'react-testing-library'\nimport {loadGreeting as mockLoadGreeting} from '../api'\n\njest.mock('../api', () => {\n  return {\n    loadGreeting: jest.fn(subject =>\n      Promise.resolve({data: {greeting: `Hi ${subject}`}}),\n    ),\n  }\n})\n\ntest('loads greetings on click', () => {\n  const {getByLabelText, getByText, getByTestId} = render(<GreetingLoader />)\n  const nameInput = getByLabelText(/name/i)\n  const loadButton = getByText(/load/i)\n  nameInput.value = 'Mary'\n  fireEvent.click(loadButton)\n  await wait(() => expect(getByTestId('greeting')).toHaveTextContent())\n  expect(mockLoadGreeting).toHaveBeenCalledTimes(1)\n  expect(mockLoadGreeting).toHaveBeenCalledWith('Mary')\n})\n```\n\n* Mock react-transition-group in React Component Tests with jest.mock\n\n比如 `react-transition-group` 动画库也是存在异步库, 它会在 1 s 后将 Children 隐藏, 这时候可以使用 `mock` 来处理。\n\n```js\njest.mock('react-transition-group', () => {\n  return {\n    CSSTransition: props => (props.in ? props.children : null),\n  }\n})\n```\n\n* 将 `console.error()` mock 掉\n\n```js\nbeforeEach(() => {\n  jest.spyOn(console, 'error').mockImplementation(() => {})\n})\n\nafterEach(() => {\n  console.error.mockRestore()\n})\n```\n\n```js\n// componentDidCatch 里的两个参数\nconst error = expect.any(Error)\nconst info = {componentStack: expect.stringContaining('Bomb')}\nexpect(mockReportError).toHaveBeenCalledWith(error, info)\n```\n\n### mock 测试\n\n#### mock 请求后端接口数据\n\n当测试需要请求后端接口数据的 UI 组件(比如图片上传组件), 为了防止接口不稳定等影响到测试用例通过, 通常需要对请求后端接口数据进行 mock。\n\n> 当需要测试接口返回的真实数据时可以对其进行集成测试。\n\n```js\njest.spyOn(global, 'fetch').mockImplementation(() => {\n  Promise.resolve({\n    json: () => Promise.resolve(mockData)\n  })\n})\n```\n\n#### mock 模块/组件\n\n如果存在对当前组件的测试影响不大的第三方模块, 可以将相关模块/组件进行 mock, 从而可以提高测试的效率。\n\n```js\njest.mock('someComponent', () => {\n  return (props) => {\n    return <span>mock Component</span>\n  }\n})\n```\n\n#### mock 时间类 api\n\n如果测试用例中遇到 `setTimeout(fn, 5000)` 真的等上 5s 后才执行 fn 测试效率是非常低效的, 因此可以使用 jest 提供的 `jest.useFakeTimers()` 来 mock 与时间有关的 api。\n\n```js\njest.useFakeTimers()\n\n// move ahead in time by 100ms\nact(() => {\n  jest.advanceTimersByTime(100)\n})\n```\n\n### act\n\n`act` 确保其函数里跟的单元方法(比如 rendering、用户事件、数据获取)在执行步骤 `make assertions` 之前已经全部执行完。\n\n```js\nact(() => {\n  // render components\n})\n// make assertions\n```\n\n### 书写一个测试函数\n\n测试函数有两种风格, BDD(行为驱动开发) 以及 TDD(测试驱动开发)。\n\n* BDD 风格: `foo.should.equal('bar')` 或者 `expect(foo).to.equal('bar')`;\n* TDD 风格: `assert.equal(foo, 'bar', 'foo equal bar')`;\n\n> [几种断言类型](https://www.chaijs.com/guide/styles/)\n\n下面我们来书写基于 BDD 风格的 test 函数:\n\n```js\nasync function test(title, callback) {\n  try {\n    await callback()\n    console.log(`✓ ${title}`)\n  } catch (error) {\n    console.error(`✕ ${title}`)\n    console.error(error)\n  }\n}\n```\n\n`expect` 函数:\n\n```js\nfunction expect(actual) {\n  return {\n    toBe(expected) {\n      if (actual !== expected) {\n        throw new Error(`${actual} is not equal to ${expected}`)\n      }\n    }\n  }\n}\n```\n\n应用:\n\n```js\nconst sum = (a, b) => a + b\n\ntest(\"sum adds numbers\", async () => {\n  const result = await sum(3, 7)\n  const expected = 10\n  expect(result).toBe(expected)\n})\n```\n\n### link\n\n* [react-testing-3-jest-and-react-testing-library/](https://blog.sapegin.me/all/react-testing-3-jest-and-react-testing-library/)\n"}}]);