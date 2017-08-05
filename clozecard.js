function ClozeCard(text, cloze) {


    if (this instanceof ClozeCard) {
        if (text.indexOf(cloze) >= 0) {
            this.partialText = text.replace(cloze, '...');
        } else {
            let err = new Error(`Oops! There's been an error.`);
            throw err;
        }

        this.text = text;
        this.cloze = cloze;
    } else {
        return new ClozeCard(text, cloze);
    }
}

module.exports = ClozeCard;
