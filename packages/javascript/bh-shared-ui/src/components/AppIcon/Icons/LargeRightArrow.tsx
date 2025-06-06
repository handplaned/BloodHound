// Copyright 2025 Specter Ops, Inc.
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { BasePath, BaseSVG, BaseSVGProps } from './utils';

export const LargeRightArrow: React.FC<BaseSVGProps> = (props) => {
    return (
        <BaseSVG
            name='large-right-arrow'
            width='7'
            height='60'
            viewBox='0 0 7 60'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}>
            <BasePath d='M6 30.2522L1 1V59L6 30.2522Z' strokeLinejoin='round' />
        </BaseSVG>
    );
};

export default LargeRightArrow;
