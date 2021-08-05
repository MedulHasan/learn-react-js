/* eslint-disable no-useless-constructor */
import Emoji from './Emoji';

export default class Text extends Emoji {
    constructor(props) {
        super(props);
    }

    render() {
        const decorateText = this.addEmoji('I am JS', '❤');
        return super.render(decorateText);
    }
}
