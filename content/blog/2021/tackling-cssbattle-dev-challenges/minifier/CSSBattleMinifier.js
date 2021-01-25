export default class CSSBattleMinifier {
    htmlStr = '';
    styleStr = '';
    htmlTags = [];
    css = [];

    constructor(input, options) {
        this.input = input;
        this.options = options;
    }

    parse() {
        const parsers = this.options.reduce((acc, option) => (option.active ? [...acc, option.key] : acc), []);

        const htmlContentRegex = /^(.*?)(?=<style>)/gis;
        const styleContentRegex = /(?<=<style>)(.|\s)*(?=<\/style>| )/gim;
        const htmlTagsRegex = /(?<=<).+?(?=>| )/gim;

        this.htmlStr = String(this.input.match(htmlContentRegex) || '');
        this.styleStr = String(this.input.match(styleContentRegex) || '');

        this.htmlTags = [...this.input.matchAll(htmlTagsRegex)];

        parsers.forEach((parser) => {
            this[parser]();
        });

        return this.htmlStr + (this.styleStr ? `<style>${this.styleStr}` : '');
    }

    // Remove white spaces where possible
    whiteSpaceRemoval() {
        // Clean Styles
        let stripStyles = this.styleStr;

        stripStyles = stripStyles.replace(/\s\s+/g, ' '); // get rid of tabs and consecutive spaces
        stripStyles = stripStyles.replace(/(\r\n|\n|\r)/gm, ''); // get rid of new lines
        stripStyles = stripStyles.replace(/:\s+/gs, ':'); // remove space(s) afer css properties
        stripStyles = stripStyles.replace(/\s+\{/gs, '{'); // remove space(s) before {
        stripStyles = stripStyles.replace(/\{\s+/gs, '{'); // remove space(s) afer {
        stripStyles = stripStyles.replace(/\s+\}/gs, '}'); // remove space(s) before }
        stripStyles = stripStyles.replace(/\}\s+/gs, '}'); // remove space(s) afer }
        stripStyles = stripStyles.replace(/;\s+/gs, ';'); // remove space(s) afer ;
        stripStyles = stripStyles.replace(/,\s+/gs, ','); // remove space(s) afer ,

        this.styleStr = stripStyles.trim();

        // Clean HTML
        let stripHtml = this.htmlStr.replace(/>\s+</gis, '><'); //take the html and strip space between tags
        this.htmlStr = stripHtml.trim();
    }

    // Semi-colon for the last CSS declaration in a declaration block can be omitted.
    omitLastSemicolon() {
        this.styleStr = this.styleStr.replace(/;}/gis, '}');
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
        this.styleStr = this.styleStr.replace(
            /(?:\{|;)(?:\s+|\s?)(?:width|height|margin|padding|padding-[a-z]*|margin-[a-z]*|border|top|left|right|bottom):((?:(?:\s+|\s?)\d+px(?:\s+|\s?))+)/gis,
            function (size) {
                return size.replaceAll('px', '');
            }
        );
        this.output = this.input;
    }

    useHtmlAttributes() {
        console.log('-> useHtmlAttributes');
        this.output = this.input;
    }
}
