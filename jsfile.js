var i = 0;
            var txt = 'I am a second year co-op student studying Systems Design Engineering at the University of Waterloo.';
            var speed = 50;
            function typeWriter() {
                if (i < txt.length) {
                    document.getElementById("demo").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }

            document.addEventListener('DOMContentLoaded', function() {
                var colours = ['Azure'];
                function getRandInt(colours) {
                    return Math.floor(Math.random() * colours.length);
                }
                document.body.style.backgroundColor = colours[getRandInt(colours)];
            }, false);

            function mousehandler(e) {
                var myevent = (isNS) ? e : event;
                var eventbutton = (isNS) ? myevent.which : myevent.button;
                if ((eventbutton == 2) || (eventbutton == 3)) return false;
            }
            document.oncontextmenu = mousehandler;
            document.onmousedown = mousehandler;
            document.onmouseup = mousehandler;
            function disableCtrlKeyCombination(e) {
                var forbiddenKeys = new Array("a", "s", "c", "x","u");
                var key;
                var isCtrl;
                if (window.event) {
                    key = window.event.keyCode;
                    //IE
                    if (window.event.ctrlKey)
                        isCtrl = true;
                    else
                        isCtrl = false;
                }
                else {
                    key = e.which;
                    //firefox
                    if (e.ctrlKey)
                        isCtrl = true;
                    else
                        isCtrl = false;
                }
                if (isCtrl) {
                    for (i = 0; i < forbiddenKeys.length; i++) {
                        //case-insensitive comparation
                        if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                            return false;
                        }
                    }
                }
                return true;
            }
            var message = "function disabled";
            function rtclickcheck(keyp){ if (navigator.appName == "Netscape" && keyp.which == 3){ alert(message); return false; }
            if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) { alert(message); return false; } }
            document.onmousedown = rtclickcheck;