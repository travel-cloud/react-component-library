# Changelog
All **notable** changes to this project will be documented in this file, including but not
limited to: Bug fixes, new components and prop changes.

## [Unreleased]
<details>
  <summary>
    Changes that have landed in master but have not been released to NPM.
    Click to see more.
  </summary>

</details>

## 1.3.6 (January 9th, 2018)

### Fixes

Adding name attribute to the input component. [#61](https://github.com/travel-cloud/react-component-library/pull/62))

## 1.3.5 (January 8th, 2018)

### Fixes

* Fixed setting an input value post load (Implemented in [#60](https://github.com/travel-cloud/react-component-library/pull/60))

## 1.3.4 (January 4th, 2018)

* Added a readOnly attribute to the Input component.

## 1.3.3 (December 21th, 2017)

### Fixes

* Fixed input not updating by switching value -> defaultValue (Implemented in [#57](https://github.com/travel-cloud/react-component-library/pull/57))

## 1.3.2 (December 20th, 2017)

### Fixes

* Fixed incorrect proptypes (Implemented in [#55](https://github.com/travel-cloud/react-component-library/pull/55))


## 1.3.1 (December 20th, 2017)

### Fixes

* Fixed button active state in `<UIPagination />` (Implemented in [#51](https://github.com/travel-cloud/react-component-library/pull/51))

## 1.3.0 (December 20th, 2017)

### Components

* Added `<UIPagination />` (Implemented in [#48](https://github.com/travel-cloud/react-component-library/pull/48))

## 1.2.4 (December 20th, 2017)

### Fixes

* Made `searchValue` check case insensitive in `<UIForm.AutoComplete />` (Implemented in [#46](https://github.com/travel-cloud/react-component-library/pull/46))

## 1.2.3 (December 19th, 2017)

### Components

* Added `searchValue` prop to `<UIForm.AutoComplete />` which highlights the search term in each list item (Implemented in [#44](https://github.com/travel-cloud/react-component-library/pull/44))

## 1.2.2 (December 15th, 2017)

### Fixes

* Fixed correct location of react-router-dom dependency (Implemented in [#42](https://github.com/travel-cloud/react-component-library/pull/42))

## 1.2.1 (December 15th, 2017)

### Fixes

* Fixed default value in `<UIForm.Textarea />` (Implemented in [#40](https://github.com/travel-cloud/react-component-library/pull/40))

## 1.2.0 (December 14th, 2017)

### Components

* Added React router link ability in `<UIList.Grid />` (Implemented in [#38](https://github.com/travel-cloud/react-component-library/pull/38))

## 1.1.0 (December 13th, 2017)

### Components

* Added `<UIForm.Textarea />` with similar attributes to `<UIForm.Input />` (Implemented in [#36](https://github.com/travel-cloud/react-component-library/pull/36))

## 1.0.0 (December 6th, 2017)

### Components

* Added a conditional wireframe loader to Grid List, activated with `withLoader` (Implemented in [#33](https://github.com/travel-cloud/react-component-library/pull/33))

### Styles

* Added base styles to provide layout for both custom and default styles (Implemented in [#34](https://github.com/travel-cloud/react-component-library/pull/34))

## 0.3.0 (December 4th, 2017)

### Components

* Added `UI` This is to wrap the entire application and supply it with default styles (Implemented in [#31](https://github.com/travel-cloud/react-component-library/pull/31))

### Styling

* Added default styles for all components(Implemented in [#31](https://github.com/travel-cloud/react-component-library/pull/31))

## 0.2.0 (December 1st, 2017)

### Fixes

* Fixed lint script hanging (Fixed in [#27](https://github.com/travel-cloud/react-component-library/pull/27))

### Components

* Added `UIComponent` This is to wrap all UI modules and provide them with `Fragment` (Implemented in [#26](https://github.com/travel-cloud/react-component-library/pull/26))
* Added `UISidebar` which contains the ability to add a nav and a logo (Implemented in [#28](https://github.com/travel-cloud/react-component-library/pull/28))

## 0.1.21 (November 30th, 2017)

### Components

* Making the UIList.Grid component handle nested keys inside object data (Implemented in [#23](https://github.com/travel-cloud/react-component-library/pull/23))
