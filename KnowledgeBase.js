﻿
if (typeof jQuery != 'undefined') {
    // jQuery is loaded => print the version
    alert(jQuery.fn.jquery);
    document.addEventListener('click', getNav(), false);
};


class Page {
    constructor(name, link, children) {
        this.name = name;
        this.talk = function () {
            alert("Meow, I am " + this.name);
            this.addEventListener('click', showChildren, false);
        };
        this.children = children;
    }

}
class DIY extends Page {
    constructor(name, host) {
        super(name);
        this.host = host;
    }
    talk() {
        alert("Meow, I am " + this.name + "! My host is " + this.host + "!");
    }
}

class DIYImages {
    constructor(name, diyTutorial)
    {
        this.name = name;
        this.diyTutorial = diyTutorial;
    }
}
//get all nav objects and links
function getNav()
{
    var pages = [];
    var pageObjects = [];
    pages = document.getElementsByClassName("navLink")[i];
    for (var i = 0; i < pages.length; i++)
    {
        pageObjects[i] = new Page(pages[i].getInnerHTML, pages[i].getAttribute("href"));
        pageObjects[i].talk();
    }
    alert(pages.length);
}

//show children
function showChildren()
{ }

//
