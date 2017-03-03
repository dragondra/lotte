/**
 * Probabilityoftemplates.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    templatesnumber: {
      type: 'integer'
    },
    templates: {
      type: 'string'
    },
    averagesum: {
      type: 'integer'
    },
    combinations: {
      type: 'integer'
    },
    calculus: {
      type: 'integer'
    }

  }
};

