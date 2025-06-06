// Copyright 2024 Specter Ops, Inc.
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

import { Link } from '@mui/material';

const sharpHoundCELink = (
    <Link
        target='_blank'
        data-testid='download-collectors-sharphound-ce-link'
        href={'https://bloodhound.specterops.io/collect-data/ce-collection/sharphound'}>
        SharpHound Community
    </Link>
);

const azureHoundCELink = (
    <Link
        target='_blank'
        data-testid='download-collectors-azurehound-ce-link'
        href={'https://bloodhound.specterops.io/collect-data/ce-collection/azurehound'}>
        AzureHound Community
    </Link>
);

const samlConfigDocLink = (
    <Link
        target='_blank'
        data-testid='saml-config-doc-link'
        href={'https://bloodhound.specterops.io/manage-bloodhound/auth/saml'}>
        here
    </Link>
);

const ManageUsersDocLink = (
    <Link
        target='_blank'
        data-testid='manage-users-doc-link'
        href={'https://bloodhound.specterops.io/manage-bloodhound/auth/users-and-roles'}>
        adding users, changing their roles, or understanding role capabilities
    </Link>
);

const fileIngestLink = (
    <Link
        target='_blank'
        data-testid='file-upload-gettingstarted-link'
        href={'https://bloodhound.specterops.io/get-started/quickstart/community-edition-quickstart'}>
        Getting Started
    </Link>
);

const apiUsageLink = (
    <Link
        target='_blank'
        data-testid='file-upload-gettingstarted-link'
        href={'https://bloodhound.specterops.io/integrations/bloodhound-api/working-with-api'}>
        Working with the BloodHound API
    </Link>
);

export default {
    sharpHoundCELink,
    azureHoundCELink,
    samlConfigDocLink,
    ManageUsersDocLink,
    fileIngestLink,
    apiUsageLink,
};
