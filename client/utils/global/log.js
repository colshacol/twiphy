// console.log('%c a colorful message', 'background: green; color: white; display: block;');

const styles = `
  background: linear-gradient(15deg, #E2B0FF, #9F44D3);
  padding: 8px 16px;
  color: #ffffff;
  display: block;
  line-height: 30px;
`;

export const log = (logName = '') => (...messages) => {
  console.group(`%c [twiphy] ${logName}`, styles);
  messages.map(message => {
    console.log(message);
  });
  console.groupEnd();
}
