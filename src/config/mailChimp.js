const user = 'c84d0ce9174564a00c8119520';
const id = process.env.NODE_ENV !== 'production' ? '60cfdaa71c' : 'fa06a63d4d';

const MailChimpData = {
  id,
  url: `https://openlaw.us16.list-manage.com/subscribe/post-json?u=${user}&id=${id}`,
  user,
};

export default MailChimpData;
