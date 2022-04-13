/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LeftSideMenu from './LeftSideMenu';

export default {
  title : 'leftSideMenu',
  component : LeftSideMenu
} as ComponentMeta<typeof LeftSideMenu>


// eslint-disable-next-line react/function-component-definition
const Template : ComponentStory<typeof LeftSideMenu> = (args) => <LeftSideMenu {...args} /> 

export const LeftSideMenuStory = Template.bind({})