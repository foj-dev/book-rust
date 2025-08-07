// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> The Rust Programming Language</a></li><li class="chapter-item expanded "><a href="01-variables-constants-and-data-types/index.html"><strong aria-hidden="true">2.</strong> Common Programming Concepts</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="01-variables-constants-and-data-types/comments.html"><strong aria-hidden="true">2.1.</strong> Comments</a></li><li class="chapter-item expanded "><a href="01-variables-constants-and-data-types/print.html"><strong aria-hidden="true">2.2.</strong> Print</a></li><li class="chapter-item expanded "><a href="01-variables-constants-and-data-types/line-break.html"><strong aria-hidden="true">2.3.</strong> Line break</a></li><li class="chapter-item expanded "><a href="01-variables-constants-and-data-types/format.html"><strong aria-hidden="true">2.4.</strong> Format</a></li><li class="chapter-item expanded "><a href="01-variables-constants-and-data-types/variables.html"><strong aria-hidden="true">2.5.</strong> Variables</a></li><li class="chapter-item expanded "><a href="01-variables-constants-and-data-types/arithmetic-operators.html"><strong aria-hidden="true">2.6.</strong> Arithmetic Operators</a></li><li class="chapter-item expanded "><a href="01-variables-constants-and-data-types/questions.html"><strong aria-hidden="true">2.7.</strong> Question</a></li></ol></li><li class="chapter-item expanded "><a href="02-data-structures/index.html"><strong aria-hidden="true">3.</strong> Data Structures</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="02-data-structures/integers.html"><strong aria-hidden="true">3.1.</strong> Integers</a></li><li class="chapter-item expanded "><a href="02-data-structures/floating.html"><strong aria-hidden="true">3.2.</strong> Floating</a></li><li class="chapter-item expanded "><a href="02-data-structures/booleans.html"><strong aria-hidden="true">3.3.</strong> Boolean</a></li><li class="chapter-item expanded "><a href="02-data-structures/char.html"><strong aria-hidden="true">3.4.</strong> Char</a></li><li class="chapter-item expanded "><a href="02-data-structures/tuples.html"><strong aria-hidden="true">3.5.</strong> Tuples</a></li><li class="chapter-item expanded "><a href="02-data-structures/arrays.html"><strong aria-hidden="true">3.6.</strong> Arrays</a></li><li class="chapter-item expanded "><a href="02-data-structures/questions.html"><strong aria-hidden="true">3.7.</strong> Questions</a></li></ol></li><li class="chapter-item expanded "><a href="03-operators/index.html"><strong aria-hidden="true">4.</strong> Operators</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="03-operators/arithmetic-operators.html"><strong aria-hidden="true">4.1.</strong> Arithmetic Operators</a></li><li class="chapter-item expanded "><a href="03-operators/assignment-operators.html"><strong aria-hidden="true">4.2.</strong> Assignment Operators</a></li><li class="chapter-item expanded "><a href="03-operators/string-and-str.html"><strong aria-hidden="true">4.3.</strong> String and &amp;str</a></li><li class="chapter-item expanded "><a href="03-operators/tuples.html"><strong aria-hidden="true">4.4.</strong> Tuples</a></li><li class="chapter-item expanded "><a href="03-operators/array.html"><strong aria-hidden="true">4.5.</strong> Array</a></li><li class="chapter-item expanded "><a href="03-operators/scope.html"><strong aria-hidden="true">4.6.</strong> Scope</a></li><li class="chapter-item expanded "><a href="03-operators/precedence.html"><strong aria-hidden="true">4.7.</strong> Precedence</a></li><li class="chapter-item expanded "><a href="03-operators/logical.html"><strong aria-hidden="true">4.8.</strong> Logical</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
