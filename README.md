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

See https://storybook.js.org/

Storybook also provides snapshot testing via Jest ensuring stability.

## Components

* [Component](#component)
  + [`<UIComponent />`](#uicomponent-)
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

#### `<UIComponent />`

Component is a wrapper for all your react-component-library modules.
It uses React.Fragment to minimise redundant markup.

    Component.propTypes = {
      children: PropTypes.oneOfType([
        PropTypes.objectOf(PropTypes.any),
        PropTypes.arrayOf(PropTypes.any),
      ]).isRequired,
    };
    
#### `<UIButton />`

Standard HTML Button, this is primarily for internal library use as abstracting single elements
can be confusing.

    Button.propTypes = {
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      classes: PropTypes.string,
      type: PropTypes.string,
      onClick: PropTypes.func,
    };
    
    Button.defaultProps = {
      classes: '',
      type: 'button',
      onClick: null,
    };

#### `<UIForm.Input />`

Standard HTML Input element with a label tag and the option to include 
additional information below the input.  

    Input.propTypes = {
      fieldId: PropTypes.string.isRequired,
      fieldName: PropTypes.string.isRequired,
      onChange: PropTypes.func,
      helpText: PropTypes.string,
      value: PropTypes.string,
      autoComplete: PropTypes.string,
      required: PropTypes.bool,
    };
    
    Input.defaultProps = {
      onChange: null,
      helpText: null,
      value: null,
      autoComplete: 'on',
      required: false,
    };

#### `<UIForm.DisabledInput />`

    DisabledInput.propTypes = {
      fieldId: PropTypes.string.isRequired,
      fieldName: PropTypes.string.isRequired,
    };

#### `<UIList.Simple />`

Standard list, just includes rows.

    Simple.propTypes = {
      items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
    };

#### `<UIList.Grid />`

Grid based list, includes both columns and rows. You can pass any data to it
and selectively render items based on keys provided in the keyMap.

##### Usage

    <UIList.Grid
      items={dataArray}
      keyMap={[
        { key: 'name', text: 'Contact Name' },
        { key: 'email', text: 'Email Address' },
      ]}
    />

    Grid.propTypes = {
      classes: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape({
        onClick: PropTypes.func,
        key: PropTypes.string,
        text: PropTypes.string,
      })).isRequired,
      keyMap: PropTypes.arrayOf(PropTypes.object),
    };
    
    Grid.defaultProps = {
      classes: '',
      keyMap: [],
    };

#### `<UILoader.Simple />`

Simple full page loader

#### `<UILoader.Skeleton />`

Full page loader with a skeleton wireframe based on UIList.Grid. Button is optional.

    Wireframe.propTypes = {
      button: PropTypes.bool,
      rows: PropTypes.number,
      columns: PropTypes.number,
    };
    
    Wireframe.defaultProps = {
      button: true,
      rows: 10,
      columns: 5,
    };

#### `<UIMessages />`

In page notifications

    Messages.propTypes = {
      messages: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        text: PropTypes.string,
      }).isRequired).isRequired,
    };
