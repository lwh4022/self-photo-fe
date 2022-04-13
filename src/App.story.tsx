import { ComponentMeta, ComponentStory } from "@storybook/react";
import App from "./App";

export default {
    title : 'index',
    component : App,
} as ComponentMeta<typeof App>

// eslint-disable-next-line react/function-component-definition
const Template : ComponentStory<typeof App> = () => <App /> 

export const AppStory = Template.bind({})