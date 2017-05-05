import axios from 'axios';

axios.get('/index.html').then(() => {
  document.write('Success!')
});
