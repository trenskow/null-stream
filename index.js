//
// index.js
// @trenskow/null-stream
//
// Created by Kristian Trenskow on 2024/12/27
// See license in LICENSE.
//

import { Writable } from 'stream';

export default class NullStream extends Writable {

	_write(_ /* chunk */, __ /* encoding */, callback) {
		callback();
	}

};
