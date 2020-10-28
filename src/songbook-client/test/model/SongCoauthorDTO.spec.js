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

  describe('(package)', function() {
    describe('SongCoauthorDTO', function() {
      beforeEach(function() {
        instance = new SongbookApi.SongCoauthorDTO();
      });

      it('should create an instance of SongCoauthorDTO', function() {
        // TODO: update the code to test SongCoauthorDTO
        expect(instance).to.be.a(SongbookApi.SongCoauthorDTO);
      });

      it('should have the property authorId (base name: "authorId")', function() {
        // TODO: update the code to test the property authorId
        expect(instance).to.have.property('authorId');
        // expect(instance.authorId).to.be(expectedValueLiteral);
      });

      it('should have the property coauthorFunction (base name: "coauthorFunction")', function() {
        // TODO: update the code to test the property coauthorFunction
        expect(instance).to.have.property('coauthorFunction');
        // expect(instance.coauthorFunction).to.be(expectedValueLiteral);
      });

      it('should have the property songId (base name: "songId")', function() {
        // TODO: update the code to test the property songId
        expect(instance).to.have.property('songId');
        // expect(instance.songId).to.be(expectedValueLiteral);
      });

    });
  });

}));