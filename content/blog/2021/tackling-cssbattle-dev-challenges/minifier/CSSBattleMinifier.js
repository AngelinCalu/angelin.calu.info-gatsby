export default class CSSBattleMinifier {
    htmlTags = [];
    css = [];
    styleStr = '';
    output = '';

    constructor(input, options) {
        this.input = input;
        this.options = options;
    }

    parse() {
        const parsers = this.options.reduce((acc, option) => (option.active ? [...acc, option.key] : acc), []);

        const htmlTagsRegex = /(?<=<).+?(?=>| )/gmi;
        const styleContentRegex = /(?<=<style>)(.|\s)*(?=<\/style>|)/gmi;

        this.htmlTags = [...this.input.matchAll(htmlTagsRegex)];
        let strip = this.input.replace(/\s\s+/g, ' '); // get rid of tabs and consecutive spaces
        strip = strip.replace(/(\r\n|\n|\r)/gm, ''); // get rid of new lines

        this.styleStr = strip.match(styleContentRegex);
        console.log(this.htmlTags, this.styleStr);

        parsers.forEach((parser) => {
            this[parser]();
        });

        return this.output;
    }

    // Remove white spaces where possible
    whiteSpaceRemoval() {
        console.log('-> whiteSpaceRemoval');
        this.output = this.input;
    }

    // Semi-colon for the last CSS declaration in a declaration block can be omitted.
    omitLastSemicolon() {
        console.log('-> omitLastSemicolon');
        this.output = this.input;
    }

    // In some cases you can omit the closing tag of an element as the browser will close them automatically. However, some other times that would result in having nested elements.
    omitClosingTags() {
        console.log('-> omitClosingTags');
        this.output = this.input;
    }

    // You can remove the quotes from HTML attributes and replace the white-spaces before numbers with + or - sign.
    removeDoubleQuotes() {
        console.log('-> removeDoubleQuotes');
        this.output = this.input;
    }

    // You can assign made-up attribute to any element to target it specifically in your selectors.
    shortenSelectorsWithMadeUpAttributes() {
        console.log('-> shortenSelectorsWithMadeUpAttributes');
        this.output = this.input;
    }

    // In most cases, you might want to absolutely position an element with respect to the window/viewport instead of another element.
    positionFixedInsteadOfAbsolute() {
        console.log('-> positionFixedInsteadOfAbsolute');
        this.output = this.input;
    }

    // Using different units can save characters.
    updateUnits() {
        console.log('-> updateUnits');
        this.output = this.input;
    }

    // The html and body elements are always in the code and could be styled!
    useBodyAndHtmlTags() {
        console.log('-> useBodyAndHtmlTags');
        this.output = this.input;
    }

    // For many properties, you can omit the px unit and just write the numeric value.
    // can strip 'px' from: width, height, margin*, padding*, border-width, top, right, bottom, left
    stripPx() {
        console.log('-> stripPx');
        this.output = this.input;
    }

    useHtmlAttributes() {
        console.log('-> useHtmlAttributes');
        this.output = this.input;
    }
}
