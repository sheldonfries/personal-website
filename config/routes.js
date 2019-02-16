/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.pug` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/about': { view: 'pages/about' },
  '/hockey': 'http://hockey.sheldonfries.com',
  '/blog': 'http://blog.sheldonfries.com',
  '/goofspiel': 'https://play.google.com/store/apps/details?id=cc.cu.hockeycalculator.goofspiel&hl=en',
  '/timer': 'https://play.google.com/store/apps/details?id=cc.cu.hockeycalculator.hiittimer&hl=en',
  '/jumpy-cat': 'https://play.google.com/store/apps/details?id=com.companyname.Jumpy_Cat',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
