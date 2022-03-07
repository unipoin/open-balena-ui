import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import postgrestRestProvider from '@raphiniert/ra-data-postgrest';
import openbalenaAuthProvider from './auth/openbalenaAuthProvider';
import user from './components/user';
import organization from './components/organization';
import role from './components/role';
import permission from './components/permission';
import apiKey from './components/apiKey';
import fleet from './components/fleet';
import device from './components/device';
import deviceType from './components/deviceType';

const dataProvider = postgrestRestProvider(process.env.REACT_APP_POSTGREST_URL);

const App = () => (
<Admin dataProvider={dataProvider} authProvider={openbalenaAuthProvider} > 
  <Resource name="actor" options={{ label: 'Actors' }} />
  <Resource name="api key" options={{ label: 'API Keys' }} {...apiKey} />
  <Resource name="api key-has-permission" options={{ label: 'API Key Permissions' }} />
  <Resource name="api key-has-role" options={{ label: 'API Key Roles' }} />
  <Resource name="application" options={{ label: 'Fleets' }} {...fleet} />
  <Resource name="application config variable" options={{ label: 'Application Cfg Vars' }} list={ListGuesser} />
  <Resource name="application environment variable" options={{ label: 'Application Env Vars' }} list={ListGuesser} />
  <Resource name="application tag" options={{ label: 'Application Tags' }} list={ListGuesser} />
  <Resource name="application type" options={{ label: 'Application Types' }} list={ListGuesser} />
  <Resource name="config" options={{ label: 'Configs' }} list={ListGuesser} />
  <Resource name="cpu architecture" options={{ label: 'CPU Architectures' }} list={ListGuesser} />
  <Resource name="device" options={{ label: 'Devices' }} {...device} />
  <Resource name="device config variable" options={{ label: 'Device Cfg Vars' }} list={ListGuesser} />
  <Resource name="device environment variable" options={{ label: 'Device Env Vars' }} list={ListGuesser} />
  <Resource name="device family" options={{ label: 'Device Families' }} list={ListGuesser} />
  <Resource name="device manufacturer" options={{ label: 'Device Mfgs' }} list={ListGuesser} />
  <Resource name="device service environment variable" options={{ label: 'Device Svc Vars' }} list={ListGuesser} />
  <Resource name="device tag" options={{ label: 'Device Tags' }} list={ListGuesser} />
  <Resource name="device type" options={{ label: 'Device Types' }} {...deviceType} />
  <Resource name="device type alias" options={{ label: 'Device Type Aliases' }}/>
  <Resource name="gateway download" options={{ label: 'Gateway Downloads' }} list={ListGuesser} />
  <Resource name="image" options={{ label: 'Images' }} list={ListGuesser} />
  <Resource name="image environment variable" options={{ label: 'Image Env Vars' }} list={ListGuesser} />
  <Resource name="image install" options={{ label: 'Image Installs' }} list={ListGuesser} />
  <Resource name="image label" options={{ label: 'Image Labels' }} list={ListGuesser} />
  <Resource name="image-is part of-release" options={{ label: 'Image Releases' }} list={ListGuesser} />
  <Resource name="migration" options={{ label: 'Migrations' }} />
  <Resource name="migration lock" options={{ label: 'Migration Locks' }} />
  <Resource name="model" options={{ label: 'Models' }} />
  <Resource name="organization" options={{ label: 'Organizations' }} {...organization} />
  <Resource name="organization membership" options={{ label: 'Org Memberships' }} />
  <Resource name="permission" options={{ label: 'Permissions' }} {...permission} />
  <Resource name="release" options={{ label: 'Releases' }} list={ListGuesser} />
  <Resource name="release tag" options={{ label: 'Release Tags' }} list={ListGuesser} />
  <Resource name="role" options={{ label: 'Roles' }} {...role} />
  <Resource name="role-has-permission" options={{ label: 'Role Permissions' }} />
  <Resource name="service" options={{ label: 'Services' }} list={ListGuesser} />
  <Resource name="service environment variable" options={{ label: 'Service Env Vars' }} list={ListGuesser} />
  <Resource name="service install" options={{ label: 'Service Installs' }} list={ListGuesser} />
  <Resource name="service instance" options={{ label: 'Service Instances' }} list={ListGuesser} />
  <Resource name="service label" options={{ label: 'Service Labels' }} list={ListGuesser} />
  <Resource name="user-has-permission" options={{ label: 'User Permissions' }} />
  <Resource name="user-has-public key" options={{ label: 'User Keys' }} list={ListGuesser} />
  <Resource name="user-has-role" options={{ label: 'User Roles' }} />
  <Resource name="user"  options={{ label: 'Users' }} {...user} />
</Admin>
);

export default App;