let pageInContext;
const getPageInContext = () => pageInContext;
const setPageInContext = page => pageInContext = page;

module.exports = {
    getPageInContext,
    setPageInContext,
}