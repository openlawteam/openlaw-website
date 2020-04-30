export const FetchBreezyJobs = () =>
  global
    .fetch('https://openlaw.breezy.hr/')
    .then(response => response.text())
    .then(text => text)
    .then(text => {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(text, 'text/html');
      const jobCount = htmlDoc.querySelectorAll('ul.positions > li').length;

      return jobCount;
    });
