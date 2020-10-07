if (typeof window === 'undefined') {
    module.exports = function () {} // Or something, it's not going to be used anyway
} else {
    module.exports = require('@ashthornton/asscroll')
}
