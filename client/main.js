import { Meteor } from "meteor/meteor";

// OGLify

import { renderDisplay } from "meteor/oglify:oglify";

Meteor.startup(() => {
  renderDisplay(document.getElementById("app"));
});
