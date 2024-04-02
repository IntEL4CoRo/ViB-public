---
title: "URoboSim Artificial World Laboratory"
date: 2010-11-03T10:35:35-05:00
subtitle: ""
tags: ["Research, Unreal Engine"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
---

URoboSim is an Unreal Engine 4/5 plugin that allows importing robots
to Unreal Engine using the URDF/SDF format and control them using various ROS interfaces.
Using URoboSim it is not only possible to execute real robot plans in
simulation, it is also possible to emulate the actions of a real robot in order
to build a continuous belief state of the world.

You can <a class="btn btn-success" target="_blank" href="https://github.com/urobosim/DemoProject"><b>try out an example project </b></a> here.


<div class="hidde-after-preview">
<a class="btn btn-primary" disabled target="_blank">Run Code</a>
<a class="btn btn-success" target="_blank" href="https://github.com/urobosim/URoboSim">Source Code</a>
</div>

<div class="hidde-after-preview">
  For Detailed information click
  <a class="btn btn-success" target="_blank" href="urobosim"><b>here!</b></a>
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

Interactive Actions and/or Examples
---
<div>
<a class="btn btn-primary" disabled target="_blank">Run Code</a>
<a class="btn btn-success" target="_blank" href="https://github.com/urobosim/URoboSim">Source Code</a>
</div>

---
<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/C8b3CTWFE8o?si=6PKbxz4bf5HGkM5O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>

---
<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/feCqV_-n9Pw?si=cAzNClyLYloZwidg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>

Description
---

The goal of URoboSim is firstly, to allow users to simulate robots in a
photorealistic environment. Secondly, it allows users to emulate the action of a
real robot, thus creating a continuous belief state. For this, URoboSim makes it
possible to import robots to Unreal Engine from SDF files, which can be auto
generated from URDF. The model can that be controlled using ROS. The controllers
allow the robot to be moved in a kinetically (without physics) or dynamically (with physics).
The ROS interfaces such as joint state publishers or follow joint trajectory
actions that are required to be used with the CRAM architecture as well as
emulating the robots action are already included.


Publications
---
- [Patrick Mania, Franklin Kenghagho Kenfack, Michael Neumann and Michael Beetz, "Imagination-enabled Robot Perception", In International Conference on Intelligent Robots and Systems (IROS), 2021. Best Paper Award on Cognitive Robotics]()

- [Michael Neumann, Andrei Haidu and Michael Beetz, "URoboSim — a simulation-based predictive modelling engine forcognition-enabled robot manipulation", In 2nd Embodied AI Workshop (CVPR), 2021.](https://embodied-ai.org/papers/URoboSim.pdf)

- [Patrick Mania, Franklin Kenghagho Kenfack, Michael Neumann and Michael Beetz, "Imagination-enabled Robot Perception", 2020.](https://arxiv.org/abs/2011.11397)
