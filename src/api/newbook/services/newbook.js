'use strict';

/**
 * newbook service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newbook.newbook');
