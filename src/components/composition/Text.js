export default function Text({ addEmoji, addBracket }) {
    let text = 'I love JavaScript Programming Language Pro';
    if (addEmoji) {
        text = addEmoji(text, '❤');
    }
    if (addBracket) {
        text = addBracket(text);
    }
    return text;
}
