module.exports = (obj) => {
    Object.entries(obj).forEach(
        ([key, value]) => {
            if(value=='') obj[key] = null;
        }
    );
};