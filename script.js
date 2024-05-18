const picker = new EmojiButton();
emojiButton.addEventListener('click', () => {
    picker.togglePicker(emojiButton);
});
picker.on('emoji', emoji => {
    input.value += emoji;
});
