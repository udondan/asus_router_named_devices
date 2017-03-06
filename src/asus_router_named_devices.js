//Add here all your known MAC addresses
var macMap = {
    "XX:XX:XX:XX:XX:XX": "TV",
    "YY:YY:YY:YY:YY:YY": "PS4",
    "ZZ:ZZ:ZZ:ZZ:ZZ:ZZ": "LG TV",
};

window.setInterval(function() {
    // Inject jQuery if this page has it not by default
    if (typeof jQuery === "undefined") {
        console.log("jQuery not ready. Skipping...");
        var jq = document.createElement("script");
        jq.setAttribute("src", "/jquery.js");
        jq.addEventListener("load", function() {
            $.noConflict();
        });
        document.head.appendChild(jq);
        return;
    }

    // Modify list on Advanced DHCP page
    if (jQuery("table#static_list").length) {
        table = jQuery("table#static_list");
        table.find("td").each(function(i, obj) {
            var mac = jQuery(obj).text();
            var name = macMap[mac];
            if (typeof name != "undefined") {
                jQuery(obj).text(mac + " ( " + name + " )");
            }
        });
    }

    // Modify list in Overview->Clients (sidebar, iframe)
    if (jQuery("#statusframe").length) {
        var statusFrame = jQuery("#statusframe")[0].contentWindow;
        wrapClientList(statusFrame);
    } else {
        // Modify drop downs on serveral pages
        wrapClientList(window);
        if (typeof window.showWLMACList !== "undefined") {
            window.showWLMACList();
        } else if (typeof window.showLANIPList !== "undefined") {
            window.genClientList();
            window.showLANIPList();
        }
    }
}, 1000);

var wrapClientList = function(target) {
    if (typeof target.genClientList != "undefined" &&
        typeof target._genClientList == "undefined") {
        target._genClientList = target.genClientList;
        target.genClientList = function() {
            try {
                target._genClientList();
                jQuery.each(macMap, function(mac, name) {
                    if (typeof target.clientList[mac] != "undefined") {
                        if (name === "") {
                            name = target.clientList[mac].Name + " ???";
                        }
                        target.clientList[mac].Name = name;
                    }
                });
            } catch (err) {
                console.log(err.message);
            }
        };
        console.log("Injected!");
    }
};
