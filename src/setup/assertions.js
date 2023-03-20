const chai = require("chai");

//bacause cucumber don't have any assertions
global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should;
