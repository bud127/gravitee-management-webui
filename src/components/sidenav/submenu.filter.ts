/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export const submenuFilter = function($state: ng.ui.IStateService) {
  'ngInject';
  return function(menuItems: ng.ui.IState[]) {
    let universeLevels: string[] = $state.current.name.split(".").splice(0, 2);
    if (universeLevels.length !== 2) {
      return [];
    } else {
      let universe: string = `${universeLevels.join(".")}.`;
      return menuItems.filter((cState) => (
        !cState.abstract &&
        cState.data && cState.data.menu &&
        cState.name.indexOf(universe) === 0)
      );
    }
  };
};
