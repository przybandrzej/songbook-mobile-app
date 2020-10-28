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
    instance = new SongbookApi.UserSongRatingResourceApi();
  });

  describe('(package)', function() {
    describe('UserSongRatingResourceApi', function() {
      describe('createUsingPOST7', function() {
        it('should call createUsingPOST7 successfully', function(done) {
          // TODO: uncomment, update parameter values for createUsingPOST7 call and complete the assertions
          /*
          var dto = new SongbookApi.UserSongRatingDTO();
          dto.rating = ;
          dto.songId = "0";
          dto.userId = "0";

          instance.createUsingPOST7(dto, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SongbookApi.UserSongRatingDTO);
            expect(data.rating).to.be.a('number');
            expect(data.rating).to.be();
            expect(data.songId).to.be.a('number');
            expect(data.songId).to.be("0");
            expect(data.userId).to.be.a('number');
            expect(data.userId).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteUsingDELETE8', function() {
        it('should call deleteUsingDELETE8 successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteUsingDELETE8 call
          /*
          var songId = 789;
          var userId = 789;

          instance.deleteUsingDELETE8(songId, userId, function(error, data, response) {
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
      describe('getAllUsingGET8', function() {
        it('should call getAllUsingGET8 successfully', function(done) {
          // TODO: uncomment, update parameter values for getAllUsingGET8 call and complete the assertions
          /*
          var opts = {};
          opts.equal = 8.14;
          opts.greaterThanEqual = 8.14;
          opts.lessThanEqual = 8.14;

          instance.getAllUsingGET8(opts, function(error, data, response) {
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
              expect(data).to.be.a(SongbookApi.UserSongRatingDTO);
              expect(data.rating).to.be.a('number');
              expect(data.rating).to.be();
              expect(data.songId).to.be.a('number');
              expect(data.songId).to.be("0");
              expect(data.userId).to.be.a('number');
              expect(data.userId).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBySongIdUsingGET1', function() {
        it('should call getBySongIdUsingGET1 successfully', function(done) {
          // TODO: uncomment, update parameter values for getBySongIdUsingGET1 call and complete the assertions
          /*
          var id = 789;

          instance.getBySongIdUsingGET1(id, function(error, data, response) {
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
              expect(data).to.be.a(SongbookApi.UserSongRatingDTO);
              expect(data.rating).to.be.a('number');
              expect(data.rating).to.be();
              expect(data.songId).to.be.a('number');
              expect(data.songId).to.be("0");
              expect(data.userId).to.be.a('number');
              expect(data.userId).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getByUserIdAndSongIdUsingGET', function() {
        it('should call getByUserIdAndSongIdUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getByUserIdAndSongIdUsingGET call and complete the assertions
          /*
          var songId = 789;
          var userId = 789;

          instance.getByUserIdAndSongIdUsingGET(songId, userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SongbookApi.UserSongRatingDTO);
            expect(data.rating).to.be.a('number');
            expect(data.rating).to.be();
            expect(data.songId).to.be.a('number');
            expect(data.songId).to.be("0");
            expect(data.userId).to.be.a('number');
            expect(data.userId).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getByUserIdUsingGET', function() {
        it('should call getByUserIdUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getByUserIdUsingGET call and complete the assertions
          /*
          var id = 789;

          instance.getByUserIdUsingGET(id, function(error, data, response) {
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
              expect(data).to.be.a(SongbookApi.UserSongRatingDTO);
              expect(data.rating).to.be.a('number');
              expect(data.rating).to.be();
              expect(data.songId).to.be.a('number');
              expect(data.songId).to.be("0");
              expect(data.userId).to.be.a('number');
              expect(data.userId).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateUsingPUT7', function() {
        it('should call updateUsingPUT7 successfully', function(done) {
          // TODO: uncomment, update parameter values for updateUsingPUT7 call and complete the assertions
          /*
          var dto = new SongbookApi.UserSongRatingDTO();
          dto.rating = ;
          dto.songId = "0";
          dto.userId = "0";

          instance.updateUsingPUT7(dto, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SongbookApi.UserSongRatingDTO);
            expect(data.rating).to.be.a('number');
            expect(data.rating).to.be();
            expect(data.songId).to.be.a('number');
            expect(data.songId).to.be("0");
            expect(data.userId).to.be.a('number');
            expect(data.userId).to.be("0");

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