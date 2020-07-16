import React from 'react';
import { ExampleComponent } from '../index'

export default {
  title: 'Example Component',
  component: ExampleComponent,
};

export const Text = () => <ExampleComponent text="Storybooks Text Example"/>

export const Emoji = () => <ExampleComponent text="😀 😎 👍 💯"/>
