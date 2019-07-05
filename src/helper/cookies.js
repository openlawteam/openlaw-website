module.exports = {
  get: function(key) {
    const value = document.cookie.split(';').filter(item => {
      return item.trim().startsWith(`${key}=`);
    });
    return value === undefined ? undefined : decodeURIComponent(value);
  },

  set: function(key, value, exDays) {
    let d = new Date();
    d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();
    document.cookie = key + '=' + value + ';' + expires + ';path=/';
  },
};
