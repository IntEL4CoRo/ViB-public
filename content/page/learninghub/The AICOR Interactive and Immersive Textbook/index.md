---
title: "The AICOR Interactive and Immersive Textbook"
date: 2014-02-27T14:33:42-04:00
subtitle: ""
tags: ["Research", "Writing", "Teaching", "Book", "Lecture"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
resources:
- name: ActionButtons
  src: "buttons.json"
---

The “AI-powered and Cognition-enabled Robotics” textbook represents a novel
approach to education in the field of cognitive robotics. This interactive textbook is
designed to offer an immersive learning experience, uniquely combining theoretical
knowledge with practical application. It features video lectures from world-leading
experts on various topics within the domain, providing students with first-class
insights into the subject matter. Additionally, the textbook includes exercises that
can be conducted within virtual research laboratories, utilizing open-source,
cutting-edge research software to bridge the gap between theory and practice.
Students also have direct access to a wealth of resources and background material
through a learning hub, enhancing their study and research capabilities. Currently in
its early stages, the textbook offers an introductory chapter as a glimpse into its
comprehensive educational approach, setting a new standard for academic resources
in cognitive robotics.

<div class="hidde-after-preview">
  For Detailed information click
  <a class="btn btn-success" target="_blank" href="the-aicor-interactive-and-immersive-textbook"><b>here!</b></a>
</div>

<!--more-->

<script>
  // Add Authors(1 or 2) info to the list
  var authors = [
    {
        img: "joern.png",
        name: "Dr.rer.nat. Jörn Syrbe",
        tel: "+49 421 218 64031",
        fax: "+49 421 218 64047",
        mail: "syrbe@uni-bremen.de",
        profile: "https://ai.uni-bremen.de/team/dr._jörn_syrbe"
    },
    {
        img: "MichaelaKümpel.png",
        name: "Michaela Kümpel",
        tel: "+49 421 218 64021",
        fax: "+49 421 218 64047",
        mail: "michaela.kuempel@cs.uni-bremen.de",
        profile: "https://ai.uni-bremen.de/team/michaela_kümpel"
    },
    ];
</script>

<script>
  if (authors.length === 1)
  {
    document.write(
      '<div class="main-well-flex-container2">' +
        '<div class="left-main-well-flex2">' +
            '<img src="' + authors[0].img + '">' +
        '</div>' +
        '<div class="right-main-well-flex2">' +
            '<h3>' + authors[0].name + '</h3>' +
            'Tel: ' + authors[0].tel + ' <br>' +
            'Fax: ' + authors[0].fax + ' <br>' +
            'Mail: <a href="mailto:' + authors[0].mail + '">' + authors[0].mail + '</a> <br>' +
            '<a href="' + authors[0].profile + '">' +
              '<span>Profile</span>' +
            '</a>' +
        '</div>' +
      '</div>'
    );
  }
  else
  {
    document.write(
      '<div class="main-well-flex-container2">' +

        '<div class="left-main-well-flex2">' +
            '<div class="main-well-flex-container2">' +
                '<div class="left-main-well-flex3">' +
                    '<img src="' + authors[0].img + '" >' +
                '</div>' +
                '<div class="right-main-well-flex3">' +
                    '<h3>' + authors[0].name + '</h3>' +
                    'Tel: ' + authors[0].tel + ' <br>' +
                    'Fax: ' + authors[0].fax + ' <br>' +
                    'Mail: <a href="mailto:' + authors[0].mail + '">' + authors[0].mail + '</a> <br>' +
                    '<a href="' + authors[0].profile + '">' +
                      '<span>Profile</span>' +
                    '</a>' +
                '</div>' +
            '</div>' +
        '</div>' +

        '<div class="left-main-well-flex2">' +
            '<div class="main-well-flex-container2">' +
                '<div class="left-main-well-flex3">' +
                    '<img src="' + authors[1].img + '" >' +
                '</div>' +
                '<div class="right-main-well-flex3">' +
                    '<h3>' + authors[1].name + '</h3>' +
                    'Tel: ' + authors[1].tel + ' <br>' +
                    'Fax: ' + authors[1].fax + ' <br>' +
                    'Mail: <a href="mailto:' + authors[1].mail + '">' + authors[1].mail + '</a> <br>' +
                    '<a href="' + authors[1].profile + '">' +
                      '<span>Profile</span>' +
                    '</a>' +
                '</div>' +
            '</div>' +
        '</div>' +

        '</div>'
    );
  }

</script>

For Detailed information and the full moodle click <a class="btn btn-success" target="_blank" href="https://moodle.intel4coro.de/"><b>here!</b></a>

---
<iframe src="https://iris.informatik.uni-bremen.de/textbook/" width="100%" height=1300 style="border:none;box-shadow: 1px 1px 3px #000;" allowfullscreen></iframe>
---
