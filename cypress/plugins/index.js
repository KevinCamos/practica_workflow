///<reference types="cypress"/>

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
  module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  // cypress/plugins/index.js
  // modify the config values
  config.defaultCommandTimeout = 10000

  // read an environment variable and
  // pass its value to the specs
  config.env.userName = 'Kevin'
  // the specs will be able to access the above value
  // by using Cypress.env('userName')
  
  // IMPORTANT return the updated config object
  return config
}

