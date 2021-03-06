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
    instance = new SongbookApi.AdminResourceApi();
  });

  describe('(package)', function() {
    describe('AdminResourceApi', function() {
      describe('activateUserUsingPATCH', function() {
        it('should call activateUserUsingPATCH successfully', function(done) {
          // TODO: uncomment, update parameter values for activateUserUsingPATCH call and complete the assertions
          /*
          var userId = 789;

          instance.activateUserUsingPATCH(userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SongbookApi.UserDTO);
            expect(data.activated).to.be.a('boolean');
            expect(data.activated).to.be(false);
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.firstName).to.be.a('string');
            expect(data.firstName).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.imageUrl).to.be.a('string');
            expect(data.imageUrl).to.be("");
            expect(data.lastName).to.be.a('string');
            expect(data.lastName).to.be("");
            expect(data.registrationDate).to.be.a(Date);
            expect(data.registrationDate).to.be(new Date());
            {
              let dataCtr = data.songs;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be("0");
              }
            }
            expect(data.userRoleId).to.be.a('number');
            expect(data.userRoleId).to.be("0");
            expect(data.username).to.be.a('string');
            expect(data.username).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateUserRoleUsingPATCH', function() {
        it('should call updateUserRoleUsingPATCH successfully', function(done) {
          // TODO: uncomment, update parameter values for updateUserRoleUsingPATCH call and complete the assertions
          /*
          var roleId = 789;
          var userId = 789;

          instance.updateUserRoleUsingPATCH(roleId, userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SongbookApi.UserDTO);
            expect(data.activated).to.be.a('boolean');
            expect(data.activated).to.be(false);
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.firstName).to.be.a('string');
            expect(data.firstName).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.imageUrl).to.be.a('string');
            expect(data.imageUrl).to.be("");
            expect(data.lastName).to.be.a('string');
            expect(data.lastName).to.be("");
            expect(data.registrationDate).to.be.a(Date);
            expect(data.registrationDate).to.be(new Date());
            {
              let dataCtr = data.songs;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be("0");
              }
            }
            expect(data.userRoleId).to.be.a('number');
            expect(data.userRoleId).to.be("0");
            expect(data.username).to.be.a('string');
            expect(data.username).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateUserUsingPUT', function() {
        it('should call updateUserUsingPUT successfully', function(done) {
          // TODO: uncomment, update parameter values for updateUserUsingPUT call and complete the assertions
          /*
          var userDTO = new SongbookApi.UserDTO();
          userDTO.activated = false;
          userDTO.email = "";
          userDTO.firstName = "";
          userDTO.id = "0";
          userDTO.imageUrl = "";
          userDTO.lastName = "";
          userDTO.registrationDate = new Date();
          userDTO.songs = ["0"];
          userDTO.userRoleId = "0";
          userDTO.username = "";

          instance.updateUserUsingPUT(userDTO, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SongbookApi.UserDTO);
            expect(data.activated).to.be.a('boolean');
            expect(data.activated).to.be(false);
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.firstName).to.be.a('string');
            expect(data.firstName).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.imageUrl).to.be.a('string');
            expect(data.imageUrl).to.be("");
            expect(data.lastName).to.be.a('string');
            expect(data.lastName).to.be("");
            expect(data.registrationDate).to.be.a(Date);
            expect(data.registrationDate).to.be(new Date());
            {
              let dataCtr = data.songs;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be("0");
              }
            }
            expect(data.userRoleId).to.be.a('number');
            expect(data.userRoleId).to.be("0");
            expect(data.username).to.be.a('string');
            expect(data.username).to.be("");

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
