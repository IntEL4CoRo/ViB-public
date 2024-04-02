---
title: "Multiverse Labs"
date: 2005-11-28T14:33:42-04:00
subtitle: ""
tags: ["Research"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
resources:
- name: ActionButtons
  src: "buttons.json"
  params:
    height: 200px
---

The [Multiverse Framework](https://github.com/Multiverse-Framework/Multiverse), supported by [euROBIN](https://www.eurobin-project.eu/), incorporates Interactive Virtual Reality Labs, which is powered by Unreal Engine for rendering compatible with the Meta Quest 3 Headset and MuJoCo for physics computation, enable the operation of multiple labs concurrently and allow several users to interact simultaneously.

<div class="hidde-after-preview">
  For Detailed information click
  <a class="btn btn-success" target="_blank" href="multiverse-labs"><b>here!</b></a>
</div>

<!--more-->

<script>
    // Add Authors(1 or 2) info to the list

    // var authors = [
      // {
      //     img: "********.png",
      //     name: "********",
      //     tel: "+49 421 218 ********",
      //     fax: "+49 421 218 ********",
      //     mail: "********@cs.uni-bremen.de",
      //     profile: "https://ai.uni-bremen.de/team/*********"
      // },
      // {
      //     img: "********.png",
      //     name: "********",
      //     tel: "+49 421 218 ********",
      //     fax: "+49 421 218 ********",
      //     mail: "********@cs.uni-bremen.de",
      //     profile: "https://ai.uni-bremen.de/team/*********"
      // },
      // ];
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

<h2>Single User</h2>
<figure class="video_container">
  <video width="100%%" height="300" autoplay loop muted controls>
    <source src="./SingleUserDemo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</figure>

<h2>Multiple Users</h2>
<figure class="video_container">
  <video width="100%%" height="300" autoplay loop muted controls>
    <source src="./MultiUserDemo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</figure>

</br>
