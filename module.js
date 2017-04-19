module.exports.ownFunction = function () {
    return "Nothing";
};

module.exports.export_multiple = {
    username: "chenlu",
    userobj: {
        "name": "Chen Lu",
        "location": "Piscataway",
        "email": "english10010at1992.com"
    },
    display_details: function () {
        return "Display details function called!!";
    }
};