// Copyright 2023 Specter Ops, Inc.
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

import { Theme } from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
    interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles' {
    interface Palette {
        neutral: { primary: string; secondary: string; tertiary: string; quaternary: string; quinary: string };
        color: { primary: string; links: string; error: string };
        low: string;
        moderate: string;
        high: string;
        critical: string;
    }
    interface PaletteOptions {
        neutral?: { primary: string; secondary: string; tertiary: string; quaternary: string; quinary: string };
        color: { primary: string; links: string; error: string };
        low: string;
        moderate: string;
        high: string;
        critical: string;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true;
    }
}

declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        neutral: true;
    }
}

export * from './components';

export * from './constants';

export * from './edgeTypes';

export * from './graphSchema';

export * from './hooks';

export * from './mocks';

export * from './providers';

export * from './routes';

export * from './store';

export * from './types';

export * from './utils';

export * from './views';
