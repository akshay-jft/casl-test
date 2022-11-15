import { createMongoAbility } from '@casl/ability';

export default new createMongoAbility([
  {
    action: 'read',
    subject: 'Post'
  },
  {
    action: 'read',
    subject: 'Post'
  },
  {
    inverted: false,
    action: 'read',
    subject: 'Sidebar'
  },
  {
    action: 'read',
    subject: 'Home'
  },
  {
    action: 'read',
    subject: 'Navigation'
  },
  {
    inverted: true,
    action: 'read',
    subject: 'Navigation'
  },

  {
    action: 'read',
    subject: 'Element 2'
  },

  {
    action: 'read',
    subject: 'Element 2'
  },
  {
    inverted: true,
    action: 'delete',
    subject: 'Post',
  }
])