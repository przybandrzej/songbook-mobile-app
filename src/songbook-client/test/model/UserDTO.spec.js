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
    describe('UserDTO', function() {
      beforeEach(function() {
        instance = new SongbookApi.UserDTO();
      });

      it('should create an instance of UserDTO', function() {
        // TODO: update the code to test UserDTO
        expect(instance).to.be.a(SongbookApi.UserDTO);
      });

      it('should have the property activated (base name: "activated")', function() {
        // TODO: update the code to test the property activated
        expect(instance).to.have.property('activated');
        // expect(instance.activated).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property firstName (base name: "firstName")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property imageUrl (base name: "imageUrl")', function() {
        // TODO: update the code to test the property imageUrl
        expect(instance).to.have.property('imageUrl');
        // expect(instance.imageUrl).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "lastName")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property registrationDate (base name: "registrationDate")', function() {
        // TODO: update the code to test the property registrationDate
        expect(instance).to.have.property('registrationDate');
        // expect(instance.registrationDate).to.be(expectedValueLiteral);
      });

      it('should have the property songs (base name: "songs")', function() {
        // TODO: update the code to test the property songs
        expect(instance).to.have.property('songs');
        // expect(instance.songs).to.be(expectedValueLiteral);
      });

      it('should have the property userRoleId (base name: "userRoleId")', function() {
        // TODO: update the code to test the property userRoleId
        expect(instance).to.have.property('userRoleId');
        // expect(instance.userRoleId).to.be(expectedValueLiteral);
      });

      it('should have the property username (base name: "username")', function() {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

    });
  });

}));
