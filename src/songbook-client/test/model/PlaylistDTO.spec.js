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
    describe('PlaylistDTO', function() {
      beforeEach(function() {
        instance = new SongbookApi.PlaylistDTO();
      });

      it('should create an instance of PlaylistDTO', function() {
        // TODO: update the code to test PlaylistDTO
        expect(instance).to.be.a(SongbookApi.PlaylistDTO);
      });

      it('should have the property creationTime (base name: "creationTime")', function() {
        // TODO: update the code to test the property creationTime
        expect(instance).to.have.property('creationTime');
        // expect(instance.creationTime).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property isPrivate (base name: "isPrivate")', function() {
        // TODO: update the code to test the property isPrivate
        expect(instance).to.have.property('isPrivate');
        // expect(instance.isPrivate).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property ownerId (base name: "ownerId")', function() {
        // TODO: update the code to test the property ownerId
        expect(instance).to.have.property('ownerId');
        // expect(instance.ownerId).to.be(expectedValueLiteral);
      });

      it('should have the property songs (base name: "songs")', function() {
        // TODO: update the code to test the property songs
        expect(instance).to.have.property('songs');
        // expect(instance.songs).to.be(expectedValueLiteral);
      });

    });
  });

}));
