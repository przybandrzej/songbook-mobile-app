/*
 * Songbook API
 * Tourist songs application
 *
 * OpenAPI spec version: 1.5.5
 * Contact: andrzej.przybysz01@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SongbookApi);
  }
}(this, function(expect, SongbookApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SongbookApi.UserRoleResourceApi();
  });

  describe('(package)', function() {
    describe('UserRoleResourceApi', function() {
      describe('createUsingPOST6', function() {
        it('should call createUsingPOST6 successfully', function(done) {
          // TODO: uncomment, update parameter values for createUsingPOST6 call and complete the assertions
          /*
          var userRoleDto = new SongbookApi.UniversalCreateDTO();
          userRoleDto.id = "0";
          userRoleDto.name = "";

          instance.createUsingPOST6(userRoleDto, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SongbookApi.UserRoleDTO);
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            // expect(data.name).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteUsingDELETE7', function() {
        it('should call deleteUsingDELETE7 successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteUsingDELETE7 call
          /*
          var id = 789;

          instance.deleteUsingDELETE7(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAllUsingGET7', function() {
        it('should call getAllUsingGET7 successfully', function(done) {
          // TODO: uncomment getAllUsingGET7 call and complete the assertions
          /*

          instance.getAllUsingGET7(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SongbookApi.UserRoleDTO);
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be("0");
              expect(data.name).to.be.a('string');
              // expect(data.name).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getByIdUsingGET7', function() {
        it('should call getByIdUsingGET7 successfully', function(done) {
          // TODO: uncomment, update parameter values for getByIdUsingGET7 call and complete the assertions
          /*
          var id = 789;

          instance.getByIdUsingGET7(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SongbookApi.UserRoleDTO);
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            // expect(data.name).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getByNameSearchQueryUsingGET', function() {
        it('should call getByNameSearchQueryUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getByNameSearchQueryUsingGET call and complete the assertions
          /*
          var searchQuery = "searchQuery_example";

          instance.getByNameSearchQueryUsingGET(searchQuery, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SongbookApi.UserRoleDTO);
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be("0");
              expect(data.name).to.be.a('string');
              // expect(data.name).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUsersByUserRoleIdUsingGET', function() {
        it('should call getUsersByUserRoleIdUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getUsersByUserRoleIdUsingGET call and complete the assertions
          /*
          var id = 789;

          instance.getUsersByUserRoleIdUsingGET(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SongbookApi.UserDTO);
              expect(data.activated).to.be.a('boolean');
              // expect(data.activated).to.be(false);
              expect(data.email).to.be.a('string');
              // expect(data.email).to.be("");
              expect(data.firstName).to.be.a('string');
              // expect(data.firstName).to.be("");
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be("0");
              expect(data.imageUrl).to.be.a('string');
              // expect(data.imageUrl).to.be("");
              expect(data.lastName).to.be.a('string');
              // expect(data.lastName).to.be("");
              expect(data.registrationDate).to.be.a(Date);
              // expect(data.registrationDate).to.be(new Date());
              {
                let dataCtr = data.songs;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  // expect(data).to.be("0");
                }
              }
              expect(data.userRoleId).to.be.a('number');
              // expect(data.userRoleId).to.be("0");
              expect(data.username).to.be.a('string');
              // expect(data.username).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateUsingPUT6', function() {
        it('should call updateUsingPUT6 successfully', function(done) {
          // TODO: uncomment, update parameter values for updateUsingPUT6 call and complete the assertions
          /*
          var userRoleDto = new SongbookApi.UserRoleDTO();
          userRoleDto.id = "0";
          userRoleDto.name = "";

          instance.updateUsingPUT6(userRoleDto, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SongbookApi.UserRoleDTO);
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            // expect(data.name).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
