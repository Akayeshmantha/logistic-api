/**
 * Copyright 2018 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an 'AS IS' BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import * as config from 'config';
import * as express from 'express';
import { getLogger } from 'log4js';

import * as orderExistsCtrl from '../controllers/orderExists';

const router = express.Router({mergeParams: true});

/**
 * Set up logging
 */
const logger = getLogger('routes - orderExists');
logger.level = config.get('logLevel');

logger.debug('setting up /orderExists route');

/**
 * Add routes
 */
router.get('/', orderExistsCtrl.default);

module.exports = router;
