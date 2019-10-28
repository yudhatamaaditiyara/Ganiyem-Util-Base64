/**
 * Copyright (C) 2019 Yudha Tama Aditiyara
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const assert = require('assert');
const {IllegalArgumentError} = require('ganiyem-error');
const {encode, decode} = require('../../');
let soekarnoQuoteDecoded = 'Gantungkan cita-cita mu setinggi langit! Bermimpilah setinggi langit. Jika engkau jatuh, engkau akan jatuh di antara bintang-bintang.';
let soekarnoQuoteEncoded = 'R2FudHVuZ2thbiBjaXRhLWNpdGEgbXUgc2V0aW5nZ2kgbGFuZ2l0ISBCZXJtaW1waWxhaCBzZXRpbmdnaSBsYW5naXQuIEppa2EgZW5na2F1IGphdHVoLCBlbmdrYXUgYWthbiBqYXR1aCBkaSBhbnRhcmEgYmludGFuZy1iaW50YW5nLg==';

/**
 */
describe('index', () => {
    /**
     */
    it('typeof(encode) === "function"', () => {
        assert.strictEqual(typeof encode, 'function');
    });

    /**
     */
    it('typeof(decode) === "function"', () => {
        assert.strictEqual(typeof decode, 'function');
    });

    /**
     */
    it('encode("foo") === "Zm9v"', () => {
        assert.strictEqual(encode('foo'), 'Zm9v');
    });

    /**
     */
    it('decode(encode("foo")) === "foo"', () => {
        assert.strictEqual(decode(encode('foo')), 'foo');
    });

    /**
     */
    it('encode("foo", "hex") === ""', () => {
        assert.strictEqual(encode('foo', 'hex'), '');
    });

    /**
     */
    it('encode("666f6f", "hex") === "Zm9v"', () => {
        assert.strictEqual(encode('666f6f', 'hex'), 'Zm9v');
    });

    /**
     */
    it('decode(encode("666f6f", "hex"), "hex") === "666f6f"', () => {
        assert.strictEqual(decode(encode('666f6f', 'hex'), 'hex'), '666f6f');
    });

    /**
     */
    it('decode(encode("foo"), "hex") === "666f6f"', () => {
        assert.strictEqual(decode(encode('foo'), 'hex'), '666f6f');
    });

    /**
     */
    it('decode(encode("666f6f", "hex")) === "foo"', () => {
        assert.strictEqual(decode(encode('666f6f', 'hex')), 'foo');
    });

    /**
     */
    it('encode(123) === "MTIz"', () => {
        assert.strictEqual(encode(123), 'MTIz');
    });

    /**
     */
    it('decode(encode(123)) === "123"', () => {
        assert.strictEqual(decode(encode(123)), "123");
    });

    /**
     */
    it('encode(soekarnoQuoteDecoded) === soekarnoQuoteEncoded', () => {
        assert.strictEqual(encode(soekarnoQuoteDecoded), soekarnoQuoteEncoded);
    });

    /**
     */
    it('decode(encode(soekarnoQuoteDecoded)) === soekarnoQuoteDecoded', () => {
        assert.strictEqual(decode(encode(soekarnoQuoteDecoded)), soekarnoQuoteDecoded);
    });

    /**
     */
    it('encode({}) ...catch(e)', () => {
        try {
            encode({});
            assert.ok(false);
        } catch (e) {
            assert.ok(e instanceof IllegalArgumentError);
        }
    });

    /**
     */
    it('decode(123) ...catch(e)', () => {
        try {
            decode(123);
            assert.ok(false);
        } catch (e) {
            assert.ok(e instanceof IllegalArgumentError);
        }
    });
});