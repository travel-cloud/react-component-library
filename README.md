# react-component-library

* [Description](#description)
* [Usage](#usage)
* [Storybook](#storybook)
* [Components](#components)

## Description

react-component-library is a reusable React component library which adds the following value:
* Keeps projects clean and free of unnecessary presentational files, allowing focus on logic/data
* Maintains style consistency across applications using it, which in turn enforces the style guide
* Speeds up development time by providing pre-made components
* Building it in React means it is fairly easy to utilise in other frameworks such as Angular

## Usage

#### Implementation in projects

To install react-component-library run the following command inside the relevant project

    npm install @travel-cloud/react-component-library --save

To import into a file do the following (all components are prefixed with UI)

    import { UIButton } from 'react-component-library';

You would then use it like you would a local project component.

#### Commands

    npm run build

This is to compile the library, this should be handled by Bamboo automatically (using postinstall)
when moving to different environments.

    npm test

Run the snapshot tests.

    npm run storybook

Run the storybook application on localhost:6006. Includes Hot Module Reloading.

## Storybook

Storybook outputs your components into an interface, providing insight into how the components look
and also how they are going to work. This makes it easier for visual testing as you
don't have to pull the component into a project and rebuild. It's also a great way to get some
inspiration for a page/module or to locate a component you may need.

Storybook also provides snapshot testing via Jest ensuring stability.

## Components

* [Buttons](#buttons)
  + [`<UIButton />`](#uibutton-)
* [Forms](#forms)
  + [`<UIForm.Input />`](#uiforminput-)
  + [`<UIForm.DisabledInput />`](#uiformdisabledinput-)
* [Lists](#lists)
  + [`<UIList.Simple />`](#uilistsimple-)
  + [`<UIList.Grid />`](#uilistgrid-)
* [Loaders](#loaders)
  + [`<UILoader.Simple />`](#uiloaderskeleton-)
  + [`<UILoader.Skeleton />`](#uiloaderskeleton-)

#### `<UIButton />`

    Button.propTypes = {
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      classes: PropTypes.string,
      onClick: PropTypes.func.isRequired,
    };

#### `<UIForm.Input />`

    Input.propTypes = {
      fieldId: PropTypes.string.isRequired,
      fieldName: PropTypes.string.isRequired,
      onChangeFunction: PropTypes.func,
    };

#### `<UIForm.DisabledInput />`

    DisabledInput.propTypes = {
      fieldId: PropTypes.string.isRequired,
      fieldName: PropTypes.string.isRequired,
    };

#### `<UIList.Simple />`

    Simple.propTypes = {
      items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
    };

#### `<UIList.Grid />`

    Grid.propTypes = {
      classes: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
      keyMap: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

#### `<UILoader.Simple />`

#### `<UILoader.Skeleton />`
