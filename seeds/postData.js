const { Post } = require('../models');

const postData = [
  {
    post_name: 'This is important',
    post_description: 'Learning development is important.',
    user_id: 1,
  },
  {
    post_name: 'CSS is important',
    post_description: 'Styling is great otherwise websites looks really bland.',
    user_id: 2,
  },
  {
    post_name: 'HTML is important',
    post_description: 'HTML is the first part of web dev most people learn.',
    user_id: 3,
  },
  {
    post_name: 'MVC',
    post_description: 'MVC is a good knowledge to have in order to structure your files.',
    user_id: 4,
  },
  {
    post_name: 'Handlebars',
    post_description: 'Handlebars is great, making several templates.',
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
