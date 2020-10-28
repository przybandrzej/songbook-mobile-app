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
    describe('PasswordChangeDTO', function() {
      beforeEach(function() {
        instance = new SongbookApi.PasswordChangeDTO();
      });

      it('should create an instance of PasswordChangeDTO', function() {
        // TODO: update the code to test PasswordChangeDTO
        expect(instance).to.be.a(SongbookApi.PasswordChangeDTO);
      });

      it('should have the property currentPassword (base name: "currentPassword")', function() {
        // TODO: update the code to test the property currentPassword
        expect(instance).to.have.property('currentPassword');
        // expect(instance.currentPassword).to.be(expectedValueLiteral);
      });

      it('should have the property newPassword (base name: "newPassword")', function() {
        // TODO: update the code to test the property newPassword
        expect(instance).to.have.property('newPassword');
        // expect(instance.newPassword).to.be(expectedValueLiteral);
      });

    });
  });

}));