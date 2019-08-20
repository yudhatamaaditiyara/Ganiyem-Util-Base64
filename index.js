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
'use strict';

const DEFAULT_ENCODING_TO = 'base64';
const DEFAULT_ENCODING_FROM = 'utf8';

/**
 * @param {string|number} data
 * @param {string|void} encoding
 * @returns {string}
 */
function encode(data, encoding){
	const type = typeof data;
	if (type !== 'string' && type !== 'number') {
		throw new Error('The data must be type of string or number');
	}
	return Buffer.from(String(data), encoding || DEFAULT_ENCODING_FROM).toString(DEFAULT_ENCODING_TO);
}

/**
 * @param {string} data
 * @param {string|void} encoding
 * @returns {string}
 */
function decode(data, encoding){
	if (typeof data !== 'string') {
		throw new Error('The data must be type of string');
	}
	return Buffer.from(data, DEFAULT_ENCODING_TO).toString(encoding || DEFAULT_ENCODING_FROM);
}

/**
 * @+
 */
module.exports = {encode, decode};