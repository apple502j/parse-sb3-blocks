export default class Sanitizer {
    static sanitize(content) {
        return (content || '').replace(/[\u0001-\u001f]/g, '') // eslint-disable-line no-control-regex
            .replace(/[)\]>\\@]/g, '\\$&');
    }

    static labelSanitize(content) {
        return Sanitizer.sanitize(content).replace(/[<([]/g, '\\$&').replace(/::|\/\//g, '\\$&');
    }
}
