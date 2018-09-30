import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  include: ['diceroll', 'tableItems', 'tableItems.encounters']
});
