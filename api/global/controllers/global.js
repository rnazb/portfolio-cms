const { sanitizeEntity } = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
 * Retrieve a record.
 *
 * @return {Object}
 */

  async find(ctx) {
    const entity = await strapi.services.global.find();
    return sanitizeEntity(entity, { model: strapi.models.global });
  }
}
