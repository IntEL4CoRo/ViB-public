---
title: "GISKARD Motion Executive Laboratory"
date: 2014-11-03T10:35:35-05:00
subtitle: ""
tags: ["Subsystem"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
---

In the Motion Executive Laboratory, our primary focus is on exploring and enhancing
Giskard, a cutting-edge open-source framework dedicated to motion planning and
control. Giskard introduces a novel approach to trajectory generation for mobile
manipulators by leveraging constraint and optimization-based task space control.
This framework is designed to be user-friendly, offering intuitive Python and ROS
interfaces that simplify the process of defining constraints for the optimization
problem. By solving for the robot’s instantaneous joint velocities, Giskard ensures
precise and efficient movement, facilitating flexible and robust manipulation actions.

<div class="hidde-after-preview">
<!-- <a class="btn btn-primary" target="_blank" href="">Run Code</a> -->
<a class="btn btn-success" target="_blank" href="https://github.com/SemRoCo/giskardpy">Source Code</a>
</div>

<div class="hidde-after-preview">
  For Detailed information click
  <a class="btn btn-success" target="_blank" href="giskard-motion-executive-laboratory"><b>here!</b></a>
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
<!-- <a class="btn btn-primary" target="_blank" href="">Run Code</a> -->
<a class="btn btn-success" target="_blank" href="https://github.com/SemRoCo/giskardpy">Source Code</a>
</div>
 

Description
---
Given a world model (i.e. the kinematic model of the robot (and the environment if available)) and a motion goal description, Giskard can produce a constraint and optimization-based task space controller tailored to the robot.
This controller can either be used to control the robot in a closed-loop fashion, or to generate a trajectory by running the controller in a simple kinematic simulation and integrating the generated velocities.

Giskard has predefined motion goals, such as Cartesian pose goals, pointing (with a camera), and collision avoidance.
These goals can be combined to define complex motions, such as “keeping the cup you are holding level while also driving to a target pose and avoiding collisions.”
Additionally, new motion goals can be implemented by defining scalar-valued task functions using the controllable and observable variables of the world model.

In most cases, the controllable variables are the joint position and velocity of the robot.
Giskard will turn these functions into a quadratic program.
Solving this returns the minimal velocity, acceleration and jerk for every joint that satisfy all constraint for the current time step and a specified prediction horizon.
The prediction horizon is used to ensure that the velocity of the current time step can always be regulated to zero during the specified time window.

Example Videos
---

<figure class="video_container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/eClBmM-02Mo?si=DKTMslYiyGWDZj7L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>


Publications
---

- [S. Stelter, G. Bartels and M. Beetz, "An open-source motion planning framework for mobile manipulators using constraint-based task space control with linear MPC," 2022 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Kyoto, Japan, 2022, pp. 1671-1678, doi: 10.1109/IROS47612.2022.9982245.](https://ieeexplore.ieee.org/document/9982245)


  


