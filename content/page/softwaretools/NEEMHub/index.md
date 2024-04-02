---
title: "NEEMHub"
date: 2008-11-28T10:35:35-05:00
subtitle: ""
tags: ["Subsystem"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
resources:
- name: ActionButtons
  src: "buttons.json"
---

In order to make huge amount of data accessible to the research community, allow to analyze the data, create machine learning models from the data and support version control for the data and models, we have made an effort of releasing an infrastructure which can handle such requirements with one solution.

<div class="hidde-after-preview">
  {{<action_form data="ActionButtons">}}

  For Detailed information click
  <a class="btn btn-success" target="_blank" href="neemhub"><b>here!</b></a>
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

Description
---

[NEEM-Hub](https://neemgit.informatik.uni-bremen.de/neems) is a one stop shop for storing NEEMs and evaluate them by deploying custom models which can analyze data. It boasts [Hadoop](https://hadoop.apache.org/) big data support and [DVC](https://dvc.org/doc/start) based version control of large data sets. How you can access the NEEM-Hub is described in our [NEEM-Handbook](https://ease-crc.github.io/soma/owl/current/NEEM-Handbook.pdf).

Publications
---

- [NEEM Handbook (Michael Beetz, Daniel Beßler, Sebastian Koralewski, Mihai Pomarlan, Abhijit Vyas,
Alina Hawkin, Kaviya Dhanabalachandran, Sascha Jongebloed)](https://ease-crc.github.io/soma/owl/current/NEEM-Handbook.pdf)

  


