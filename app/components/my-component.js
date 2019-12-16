import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class MyComponentComponent extends Component {
  @tracked showIt = false;
}
